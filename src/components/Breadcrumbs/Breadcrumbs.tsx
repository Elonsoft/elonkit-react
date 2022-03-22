import React, { ReactNode, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { BreadcrumbsProps } from './Breadcrumbs.types';

import clsx from 'clsx';
import { getBreadcrumbsUtilityClass } from './Breadcrumbs.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { BreadcrumbsButton } from './BreadcrumbsButton';
import { BreadcrumbsCollapsedMenuItem } from './BreadcrumbsCollapsedMenuItem';
import { BreadcrumbsMenu } from './BreadcrumbsMenu';

import { useResizeObserver } from '../../hooks/useResizeObserver';
import { IconChevronLeftSeparator, IconUnion } from '../../icons';

type BreadcrumbsOwnerState = {
  classes?: BreadcrumbsProps['classes'];
};

const useUtilityClasses = (ownerState: BreadcrumbsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    list: ['list'],
    separator: ['separator'],
    collapsedMenuButton: ['collapsedMenuButton']
  };

  return composeClasses(slots, getBreadcrumbsUtilityClass, classes);
};

const BreadcrumbsRoot = styled(Typography, {
  name: 'ESBreadcrumbs',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({})) as typeof Typography;

const BreadcrumbsList = styled('ul', {
  name: 'ESBreadcrumbs',
  slot: 'List',
  overridesResolver: (props, styles) => styles.listWrapper
})(({ theme }) => ({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  color: theme.palette.monoA.A900
}));

const BreadcrumbsSeparator = styled('li', {
  name: 'ESBreadcrumbs',
  slot: 'Separator',
  overridesResolver: (props, styles) => styles.separator
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& .MuiSvgIcon-root': {
    width: '16px',
    stroke: theme.palette.monoA.A500,
    strokeWidth: '1.5px'
  }
}));

const BreadcrumbsUnionButton = styled(BreadcrumbsButton, {
  name: 'ESBreadcrumbs',
  slot: 'CollapsedMenuButton',
  overridesResolver: (props, styles) => styles.collapsedMenuButton
})<{ ownerState: { isHiddenSubmenuOpen: boolean } }>(({ ownerState, theme }) => ({
  '&.MuiButton-root': {
    ...(ownerState.isHiddenSubmenuOpen && { backgroundColor: theme.palette.monoA.A50 }),
    width: '24px',
    height: '24px',
    '& .MuiSvgIcon-root': {
      color: theme.palette.monoA.A500,
      width: '20px',
      height: '20px'
    }
  }
}));

const SUBMENU_HIDDEN_BUTTON_WIDTH = 24;

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (inProps) => {
  const {
    component = 'nav',
    separator = IconChevronLeftSeparator,
    children,
    className,
    sx,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESBreadcrumbs'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const Separator = separator as any;

  const containerRef = useRef<HTMLUListElement>(null);
  const collapsedItems = useRef<React.ReactNode[]>([]);

  const [breadcrumbs, setBreadcrumbs] = useState<React.ReactNode[] | null>(null);
  const [showHiddenElements, setShowHiddenElements] = useState<null | HTMLElement>(null);

  const breadcrumbsAll = useMemo(() => {
    const breadcrumbs = React.Children.toArray(children)
      .reduce(
        (acc: ReactNode[], current, i: number) =>
          acc.concat(
            current,
            <BreadcrumbsSeparator className={classes.separator} key={`breadcrumbsSeparator-${i}`}>
              <Separator />
            </BreadcrumbsSeparator>
          ),
        []
      )
      .slice(0, -1);

    breadcrumbs[breadcrumbs.length - 1] = React.cloneElement((breadcrumbs as any)[breadcrumbs.length - 1], {
      disabled: true
    });

    return breadcrumbs;
  }, []);

  useResizeObserver(containerRef, () => setBreadcrumbs(null));

  useLayoutEffect(() => {
    if (breadcrumbs === null) {
      const tempBreadcrumbs = [...breadcrumbsAll];
      const containerWidth = containerRef.current?.getBoundingClientRect().width as number;
      const ulRef = containerRef.current?.lastElementChild as Element;

      let ulScroll = ulRef.scrollWidth;
      let secondaryElementWidth = -SUBMENU_HIDDEN_BUTTON_WIDTH;
      let i = 2;

      collapsedItems.current = [];

      while (containerWidth < ulScroll && i < tempBreadcrumbs.length - 1) {
        const elementWidth = ulRef.children[i].getBoundingClientRect().width;

        ulScroll -= elementWidth + secondaryElementWidth;
        secondaryElementWidth = ulRef.children[i + 1].getBoundingClientRect().width;
        i += 2;
      }

      if (i > 2) {
        collapsedItems.current = tempBreadcrumbs
          .splice(2, i - 3)
          .filter((elem: any) => !elem.key.includes('breadcrumbsSeparator'));
        tempBreadcrumbs.splice(2, 0, SubmenuButton);
      }

      setBreadcrumbs(tempBreadcrumbs);
    }
  }, [breadcrumbs]);

  useLayoutEffect(() => {
    if (breadcrumbs?.length === 5 && (breadcrumbs[2] as any).key === 'SubmenuButton') {
      const ulChildrenRef = containerRef.current?.lastElementChild?.children as HTMLCollection;
      if (
        !(breadcrumbs[breadcrumbs.length - 1] as any).props.collapseLast &&
        ulChildrenRef[ulChildrenRef.length - 1].getBoundingClientRect().width <=
          ((breadcrumbs[breadcrumbs.length - 1] as any).props.menu?.length ? 60 : 40) &&
        ulChildrenRef[0].getBoundingClientRect().width >= 40
      ) {
        const tempBreadcrumbs = [...breadcrumbs];
        tempBreadcrumbs[0] = React.cloneElement(tempBreadcrumbs[0] as any, { collapseFirst: true });
        tempBreadcrumbs[tempBreadcrumbs.length - 1] = React.cloneElement(
          tempBreadcrumbs[tempBreadcrumbs.length - 1] as any,
          { collapseLast: true }
        );
        setBreadcrumbs(tempBreadcrumbs);
      }
    }
  }, [breadcrumbs]);

  useEffect(() => {
    if (breadcrumbs && (breadcrumbs[2] as any).key === 'SubmenuButton') {
      const newBreadcrumbs = [...breadcrumbs];
      newBreadcrumbs[2] = SubmenuButton;
      setBreadcrumbs(newBreadcrumbs);
    }
  }, [showHiddenElements]);

  const onShowHiddenElements = (event: React.MouseEvent<HTMLElement>) => {
    setShowHiddenElements(event.currentTarget);
  };

  const onHandleClose = () => {
    setShowHiddenElements(null);
  };

  const SubmenuButton = (
    <li key="SubmenuButton">
      <BreadcrumbsUnionButton
        ownerState={{ isHiddenSubmenuOpen: !!showHiddenElements }}
        className={classes.collapsedMenuButton}
        onClick={onShowHiddenElements}
      >
        <IconUnion />
      </BreadcrumbsUnionButton>
    </li>
  );

  return (
    <BreadcrumbsRoot sx={sx} ref={containerRef} component={component} className={clsx(classes.root, className)}>
      <BreadcrumbsList className={classes.list}>{breadcrumbs === null ? breadcrumbsAll : breadcrumbs}</BreadcrumbsList>
      {!!collapsedItems.current.length && (
        <BreadcrumbsMenu anchorEl={showHiddenElements} open={!!showHiddenElements} onClose={onHandleClose}>
          {/* React.Children.map */}
          {collapsedItems.current.map((item: any, i) => (
            <BreadcrumbsCollapsedMenuItem key={item.key} id={i} {...item.props} />
          ))}
        </BreadcrumbsMenu>
      )}
    </BreadcrumbsRoot>
  );
};
