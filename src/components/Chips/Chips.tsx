import { useLayoutEffect, useRef, useState } from 'react';

import { ChipsProps } from './Chips.types';

import clsx from 'clsx';
import { getChipsUtilityClass } from './Chips.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useResizeObserver } from '../../hooks';
import { IconChevronDownSmall } from '../../icons';

type ChipsOwnerState = {
  classes?: ChipsProps['classes'];
};

const useUtilityClasses = (ownerState: ChipsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    showMore: ['showMore']
  };

  return composeClasses(slots, getChipsUtilityClass, classes);
};

const ChipsRoot = styled('div', {
  name: 'ESChips',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(() => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  paddingBottom: '10px'
}));

const ChipsShowMore = styled(Button, {
  name: 'ESChips',
  slot: 'ShowMore',
  overridesResolver: (_, styles) => styles.showMore
})(({ theme }) => ({
  '&.MuiButton-root': {
    color: theme.palette.monoA.A600,
    flexShrink: 0,
    marginBottom: '8px',
    padding: '0 2px 0 6px',
    borderRadius: '100px',
    '.MuiButton-endIcon': {
      margin: 0,
      '.MuiSvgIcon-root': {
        width: '20px !important',
        height: '20px !important',
        color: theme.palette.monoA.A500
      }
    }
  }
}));

export const Chips = (inProps: ChipsProps) => {
  const [hiddenItems, setHiddenItems] = useState<Record<number, boolean>>({});
  const [containerWidth, setContainerWidth] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState<any>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const {
    className,
    sx,
    children,
    labelButtonMore,
    labelTooltip,
    iconChevron = <IconChevronDownSmall style={{ transform: showMore ? 'rotate(180deg)' : 'rotate(0)' }} />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESChips'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  useResizeObserver(containerRef, (entries: any) => {
    const entry = entries[0];
    if (containerWidth === entry.contentRect.width) {
      return;
    }
    setHiddenItems({});
    setContainerWidth(entry.contentRect.width);
  });

  useLayoutEffect(() => {
    const containerElement = containerRef.current;
    const containerChildren = containerElement?.children;
    if (!showMore) {
      if (!containerChildren || !containerWidth) {
        return;
      }
      containerElement.style.flexWrap = 'nowrap';

      const elementWidths: number[] = [];
      let showDonw = 0;

      for (let i = 0, l = containerChildren.length; i < l; i++) {
        const child = containerChildren[i];
        (child as HTMLElement).style.display = 'flex';
        (child as HTMLElement).style.marginRight = '8px';
        const clientRect = child.getBoundingClientRect();

        const { width } = clientRect;

        const totoalWidth = i > 0 ? 6 + width : width;

        if (child.getAttribute('data-element') === 'more') {
          showDonw = totoalWidth - 6;
        } else {
          elementWidths.push(totoalWidth);
        }
      }

      const hiddenItemsMap: Record<number, boolean> = {};
      let remaningContainerWidth = containerWidth - showDonw;

      Array.from(containerChildren).forEach((item, index: number) => {
        const itemWidth = elementWidths[index];
        if (itemWidth <= remaningContainerWidth) {
          remaningContainerWidth -= itemWidth;
          if (elementWidths[index + 1] >= remaningContainerWidth) {
            remaningContainerWidth = 0;
            (item as HTMLElement).style.marginRight = '4px';
          }
        } else if (item.getAttribute('data-element') === 'more') {
          (item as HTMLElement).style.display = Object.keys(hiddenItemsMap).length ? 'flex' : 'none';
          (item as HTMLElement).style.marginRight = '0';
        } else {
          (item as HTMLElement).style.display = 'none';
          hiddenItemsMap[+(item as HTMLElement).id] = true;
        }
      });
      setHiddenItems(hiddenItemsMap);
    } else {
      if (!containerChildren || !containerWidth) {
        return;
      }
      containerElement.style.flexWrap = 'wrap';
      Array.from(containerChildren).forEach((item, index) => {
        (item as HTMLElement).style.display = 'flex';
        (item as HTMLElement).style.marginRight = containerChildren.length === ++index ? '0' : '8px';
      });
    }
  }, [children, containerWidth, showMore]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleTooltipOpen = (state: boolean) => {
    setTooltipOpen(state);
  };

  return (
    <ChipsRoot ref={containerRef} className={clsx(classes.root, className)} sx={sx}>
      {children}
      <Tooltip
        open={showMore ? false : tooltipOpen}
        onOpen={() => toggleTooltipOpen(true)}
        onClose={() => toggleTooltipOpen(false)}
        TransitionProps={showMore ? { exit: false } : undefined}
        arrow
        title={<Typography variant="caption">{labelTooltip}</Typography>}
      >
        <ChipsShowMore
          className={classes.showMore}
          size="24"
          color="tertiary"
          endIcon={iconChevron}
          onClick={toggleShowMore}
          data-element="more"
        >
          <Typography component="div" variant="caption">
            {!showMore ? `+${Object.keys(hiddenItems).length}` : labelButtonMore}
          </Typography>
        </ChipsShowMore>
      </Tooltip>
    </ChipsRoot>
  );
};
