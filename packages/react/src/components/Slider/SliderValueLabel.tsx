import { cloneElement } from 'react';

import { SliderValueLabelProps } from './SliderValueLabel.types';

import clsx from 'clsx';
import { sliderClasses } from './Slider.classes';

import PropTypes from 'prop-types';

const useValueLabelClasses = (props: SliderValueLabelProps) => {
  const { open } = props;

  const utilityClasses = {
    offset: clsx({
      [sliderClasses.valueLabelOpen]: open,
    }),
    circle: sliderClasses.valueLabelCircle,
    label: sliderClasses.valueLabelLabel,
  };

  return utilityClasses;
};

export function SliderValueLabel(props: SliderValueLabelProps) {
  const { children, className, value } = props;
  const classes = useValueLabelClasses(props);

  if (!children) {
    return null;
  }

  return cloneElement(
    children,
    {
      className: clsx(children.props.className),
    },
    <>
      {children.props.children}
      <span aria-hidden className={clsx(classes.offset, className)}>
        <span className={classes.circle}>
          <span className={classes.label}>{value}</span>
        </span>
      </span>
    </>
  );
}

SliderValueLabel.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  value: PropTypes.node,
} as any;
