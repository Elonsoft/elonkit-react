import { useEffect, useRef, useState } from 'react';

import { ChipListProps } from './ChipList.types';

import clsx from 'clsx';
import { chipClasses } from '../Chip/Chip.classes';
import { getChipListUtilityClass } from './ChipList.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useResizeObserver } from '../../hooks';
import { IconChevronDownW200, IconChevronUpW200 } from '../../icons';
import { Button, buttonClasses } from '../Button';
import { buttonBaseClasses } from '../ButtonBase';

type ChipOwnerState = {
  classes?: ChipListProps['classes'];
};

const useUtilityClasses = (ownerState: ChipOwnerState) => {
  const { classes } = ownerState;
  const slots = {
    root: ['root'],
    button: ['button'],
  };
  return composeClasses(slots, getChipListUtilityClass, classes);
};

const ChipListRoot = styled('div', {
  name: 'ESChipList',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})({
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px 8px',
});

const ChipListButton = styled(Button, {
  name: 'ESChipList',
  slot: 'Button',
  overridesResolver: (_props, styles) => styles.button,
})(({ theme }) => ({
  borderRadius: 100,

  [`&.${buttonClasses.size300}.${buttonClasses.variantText}`]: {
    '--text': theme.vars.palette.monoA.A550,

    [`.${buttonBaseClasses.wrapper}`]: {
      padding: '4px 2px 4px 6px',
      ...theme.typography.caption,
    },
  },
}));

export const ChipList = (inProps: ChipListProps) => {
  const {
    className,
    classes: inClasses,
    children,
    sx,
    maxLines: inMaxLines = 1,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESChipList',
  });

  const ref = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);
  const [hiddenChipsCount, setHiddenChipsCount] = useState(0);

  const maxLines = inMaxLines < 1 ? 1 : inMaxLines;

  const handleResize = () => {
    if (!ref.current) {
      return;
    }

    const chips = Array.from(ref.current.children) as HTMLElement[];
    chips.forEach((chip) => chip.style.removeProperty('display'));

    if (!isOpen) {
      let lineCount = 1,
        hiddenCount = 0,
        totalWidth = 0;

      const containerWidth = ref.current.clientWidth;

      setCollapsed(false);

      chips.forEach((chip) => {
        if (!chip.classList.contains(chipClasses.root)) {
          return;
        }

        const chipWidth = chip.clientWidth;

        if (totalWidth + chipWidth > containerWidth) {
          lineCount += 1;
          totalWidth = chipWidth;
        } else {
          totalWidth += chipWidth;
        }

        if (lineCount > maxLines) {
          setCollapsed(true);
          chip.style.display = 'none';
          hiddenCount += 1;
        }
      });

      setHiddenChipsCount(hiddenCount);
    }
  };

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  useResizeObserver(ref, handleResize);

  useEffect(() => {
    handleResize();
  }, [isOpen]);

  return (
    <ChipListRoot ref={ref} className={clsx(classes.root, className)} sx={sx} {...props}>
      {children}

      {isCollapsed && (
        <ChipListButton className={classes.button} color="monoA" size="300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <>
              Скрыть <IconChevronUpW200 />
            </>
          ) : (
            <>
              +{hiddenChipsCount} <IconChevronDownW200 />
            </>
          )}
        </ChipListButton>
      )}
    </ChipListRoot>
  );
};
