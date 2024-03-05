// https://github.com/material-components/material-web/blob/main/ripple/internal/ripple.ts

import { useRef, useState } from 'react';

import { TouchRippleParams } from './TouchRipple.types';

export const EASING = {
  STANDARD: 'cubic-bezier(0.2, 0, 0, 1)'
} as const;

const PRESS_GROW_MS = 800;
const MINIMUM_PRESS_MS = 150;
const INITIAL_ORIGIN_SCALE = 0.2;
const PADDING = 10;
const SOFT_EDGE_MINIMUM_SIZE = 75;
const SOFT_EDGE_CONTAINER_RATIO = 0.35;
const PRESS_PSEUDO = '::after';
const ANIMATION_FILL = 'forwards';

enum State {
  /**
   * Initial state of the control, no touch in progress.
   *
   * Transitions:
   *   - on touch down: transition to `TOUCH_DELAY`.
   *   - on mouse down: transition to `WAITING_FOR_CLICK`.
   */
  INACTIVE,
  /**
   * Touch down has been received, waiting to determine if it's a swipe or
   * scroll.
   *
   * Transitions:
   *   - on touch up: begin press; transition to `WAITING_FOR_CLICK`.
   *   - on cancel: transition to `INACTIVE`.
   *   - after `TOUCH_DELAY_MS`: begin press; transition to `HOLDING`.
   */
  TOUCH_DELAY,
  /**
   * A touch has been deemed to be a press
   *
   * Transitions:
   *  - on up: transition to `WAITING_FOR_CLICK`.
   */
  HOLDING,
  /**
   * The user touch has finished, transition into rest state.
   *
   * Transitions:
   *   - on click end press; transition to `INACTIVE`.
   */
  WAITING_FOR_CLICK
}

// Delay reacting to touch so that we do not show the ripple for a swipe or scroll interaction.
const TOUCH_DELAY_MS = 150;

export const useTouchRipple = ({
  center,
  disabled,

  pressGrowDuration = PRESS_GROW_MS,
  minimumPressDuration = MINIMUM_PRESS_MS,

  ...rest
}: TouchRippleParams) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [pressed, setPressed] = useState(false);

  const initialSize = useRef(0);
  const rippleSize = useRef('');
  const rippleScale = useRef('');
  const hovered = useRef(false);
  const state = useRef(State.INACTIVE);
  const checkBoundsAfterContextMenu = useRef(false);
  const rippleStartEvent = useRef<React.PointerEvent<HTMLElement> | undefined>(undefined);

  const growAnimation = useRef<Animation | null>(null);

  const isTouch = ({ pointerType }: React.PointerEvent<HTMLElement>) => {
    return pointerType === 'touch';
  };

  const shouldReactToEvent = (event: React.PointerEvent<HTMLElement>) => {
    if (disabled || !event.isPrimary) {
      return false;
    }

    if (!event.isPrimary) {
      return false;
    }

    if (rippleStartEvent.current && rippleStartEvent.current.pointerId !== event.pointerId) {
      return false;
    }

    if (event.type === 'pointerenter' || event.type === 'pointerleave') {
      return !isTouch(event);
    }

    const isPrimaryButton = event.buttons === 1;
    return isTouch(event) || isPrimaryButton;
  };

  const getNormalizedPointerEventCoords = (pointerEvent?: React.PointerEvent<HTMLElement>) => {
    if (!pointerEvent) {
      return { x: 0, y: 0 };
    }

    const { scrollX, scrollY } = window;
    const { left, top } = ref.current!.getBoundingClientRect();
    const documentX = scrollX + left;
    const documentY = scrollY + top;
    const { pageX, pageY } = pointerEvent;
    return { x: pageX - documentX, y: pageY - documentY };
  };

  const getTranslationCoordinates = (positionEvent?: React.PointerEvent<HTMLElement>) => {
    const { height, width } = ref.current!.getBoundingClientRect();
    // end in the center
    const endPoint = {
      x: (width - initialSize.current) / 2,
      y: (height - initialSize.current) / 2
    };

    let startPoint;
    if (!!positionEvent && !center) {
      startPoint = getNormalizedPointerEventCoords(positionEvent);
    } else {
      startPoint = {
        x: width / 2,
        y: height / 2
      };
    }

    // center around start point
    startPoint = {
      x: startPoint.x - initialSize.current / 2,
      y: startPoint.y - initialSize.current / 2
    };

    return { startPoint, endPoint };
  };

  const determineRippleSize = () => {
    if (!ref.current) {
      return;
    }

    const { height, width } = ref.current.getBoundingClientRect();
    const maxDim = Math.max(height, width);
    const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);

    const initialSizeV = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
    const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
    const maxRadius = hypotenuse + PADDING;

    initialSize.current = initialSizeV;
    rippleScale.current = `${(maxRadius + softEdgeSize) / initialSizeV}`;
    rippleSize.current = `${initialSize.current}px`;
  };

  const startPressAnimation = (positionEvent?: React.PointerEvent<HTMLElement>) => {
    setPressed(true);
    growAnimation.current?.cancel();
    determineRippleSize();
    const { startPoint, endPoint } = getTranslationCoordinates(positionEvent);
    const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
    const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;

    growAnimation.current = ref.current!.animate(
      {
        top: [0, 0],
        left: [0, 0],
        height: [rippleSize.current, rippleSize.current],
        width: [rippleSize.current, rippleSize.current],
        transform: [`translate(${translateStart}) scale(1)`, `translate(${translateEnd}) scale(${rippleScale.current})`]
      },
      {
        pseudoElement: PRESS_PSEUDO,
        duration: pressGrowDuration,
        easing: EASING.STANDARD,
        fill: ANIMATION_FILL
      }
    );
  };

  const endPressAnimation = async () => {
    rippleStartEvent.current = undefined;
    state.current = State.INACTIVE;
    const animation = growAnimation.current;
    let pressAnimationPlayState = Infinity;
    if (typeof animation?.currentTime === 'number') {
      pressAnimationPlayState = animation.currentTime;
    } else if (animation?.currentTime) {
      pressAnimationPlayState = (animation.currentTime as any).to('ms').value;
    }

    if (pressAnimationPlayState >= minimumPressDuration) {
      setPressed(false);
      return;
    }

    await new Promise((resolve) => {
      setTimeout(resolve, minimumPressDuration - pressAnimationPlayState);
    });

    if (growAnimation.current !== animation) {
      // A new press animation was started. The old animation was canceled and
      // should not finish the pressed state.
      return;
    }

    setPressed(false);
  };

  const inBounds = (event: React.PointerEvent<HTMLElement>) => {
    const { pageX: x, pageY: y } = event;
    const { top, left, bottom, right } = ref.current!.getBoundingClientRect();
    return x >= left && x <= right && y >= top && y <= bottom;
  };

  const onPointerDown = async (event: React.PointerEvent<HTMLElement>) => {
    rest.onPointerDown?.(event);

    if (!shouldReactToEvent(event)) {
      return;
    }

    event.persist();
    rippleStartEvent.current = event;

    if (!isTouch(event)) {
      state.current = State.WAITING_FOR_CLICK;
      startPressAnimation(event);
      return;
    }

    // after a longpress contextmenu event, an extra `pointerdown` can be
    // dispatched to the pressed element. Check that the down is within
    // bounds of the element in this case.
    if (checkBoundsAfterContextMenu.current && !inBounds(event)) {
      return;
    }

    checkBoundsAfterContextMenu.current = false;

    // Wait for a hold after touch delay
    state.current = State.TOUCH_DELAY;
    await new Promise((resolve) => {
      setTimeout(resolve, TOUCH_DELAY_MS);
    });

    if (state.current !== State.TOUCH_DELAY) {
      return;
    }

    state.current = State.HOLDING;
    startPressAnimation(event);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLElement>) => {
    rest.onPointerUp?.(event);

    if (!shouldReactToEvent(event)) {
      return;
    }

    if (state.current === State.HOLDING) {
      state.current = State.WAITING_FOR_CLICK;
      return;
    }

    if (state.current === State.TOUCH_DELAY) {
      state.current = State.WAITING_FOR_CLICK;
      startPressAnimation(rippleStartEvent.current);
    }
  };

  const onPointerLeave = (event: React.PointerEvent<HTMLElement>) => {
    rest.onPointerLeave?.(event);

    if (!shouldReactToEvent(event)) {
      return;
    }

    hovered.current = false;

    // release a held mouse or pen press that moves outside the element
    if (state.current !== State.INACTIVE) {
      endPressAnimation();
    }
  };

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    rest.onClick?.(event);

    // Click is a MouseEvent in Firefox and Safari, so we cannot use `shouldReactToEvent`
    if (disabled) {
      return;
    }

    if (state.current === State.WAITING_FOR_CLICK) {
      endPressAnimation();
      return;
    }

    if (state.current === State.INACTIVE) {
      // keyboard synthesized click event
      startPressAnimation();
      endPressAnimation();
    }
  };

  const onContextMenu = (event: React.MouseEvent<HTMLElement>) => {
    rest.onContextMenu?.(event);
    if (disabled) {
      return;
    }

    checkBoundsAfterContextMenu.current = true;
    endPressAnimation();
  };

  const onPointerCancel = (event: React.PointerEvent<HTMLElement>) => {
    if (!shouldReactToEvent(event)) {
      return;
    }

    endPressAnimation();
  };

  return {
    ref,
    pressed,
    bind: { onClick, onContextMenu, onPointerCancel, onPointerUp, onPointerDown, onPointerLeave }
  };
};
