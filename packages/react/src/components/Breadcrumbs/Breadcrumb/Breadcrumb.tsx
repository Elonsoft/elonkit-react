import { BreadcrumbProps, BreadcrumbTypeMap } from './Breadcrumb.types';

import clsx from 'clsx';
import { breadcrumbsClasses } from '../Breadcrumbs.classes';
import { breadcrumbClasses, getBreadcrumbUtilityClass } from './Breadcrumb.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { buttonBaseClasses, tooltipClasses } from '@mui/material';
import Button from '@mui/material/Button';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Typography from '@mui/material/Typography';

import { IconBreadcrumbArrowRight } from '../../../icons';
import { svgIconClasses } from '../../SvgIcon';
import { TooltipEllipsis, TooltipEllipsisProps } from '../../TooltipEllipsis';

type BreadcrumbOwnerState = {
  classes?: BreadcrumbProps['classes'];
  shouldFirstShrink?: boolean;
  disabled?: boolean;
};

const useUtilityClasses = (ownerState: BreadcrumbOwnerState) => {
  const { classes, disabled, shouldFirstShrink } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled', shouldFirstShrink && 'shouldFirstShrink'],
    content: ['content'],
    separator: ['separator'],
    tooltip: ['tooltip']
  };

  return composeClasses(slots, getBreadcrumbUtilityClass, classes);
};

const BreadcrumbRoot = styled(Typography, {
  name: 'ESBreadcrumb',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { disabled, shouldFirstShrink }
    } = props;
    return [styles.root, disabled && styles.disabled, shouldFirstShrink && styles.shouldFirstShrink];
  }
})<{ ownerState: BreadcrumbOwnerState }>(({ ownerState }) => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  minWidth: '56px',
  overflow: 'hidden',

  [`&.${breadcrumbsClasses.buttonMore}`]: {
    minWidth: '40px'
  },

  span: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },

  ...(ownerState.shouldFirstShrink && {
    '&:first-of-type': {
      flexShrink: '1',
      flexGrow: 0
    }
  }),

  ...(ownerState.disabled && {
    div: {
      cursor: 'not-allowed',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }
  }),

  '&:last-of-type': {
    minWidth: '40px',
    flexGrow: 1,
    flexShrink: '1',
    flexBasis: '0px',

    [`.${breadcrumbClasses.separator}`]: {
      display: 'none'
    }
  }
})) as any;

const BreadcrumbTooltip = styled(
  ({ className, ...props }: TooltipEllipsisProps) => <TooltipEllipsis {...props} classes={{ popper: className }} />,
  {
    name: 'ESBreadcrumb',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip
  }
)(() => ({
  [`&[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]: {
    marginBottom: '10px !important'
  },
  [`&[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]: {
    marginBottom: '10px !important'
  }
}));

const BreadcrumbContent = styled(Button, {
  name: 'ESBreadcrumb',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})(({ theme }) => ({
  [`&.${buttonBaseClasses.root}.${breadcrumbClasses.content}`]: {
    padding: '0 4px',
    width: '100%',
    maxWidth: '400px',

    ...theme.mixins.button({
      background: 'transparent',
      color: theme.vars.palette.monoA.A900,
      hover: theme.vars.palette.monoA.A50,
      focus: theme.vars.palette.monoA.A200,
      active: theme.vars.palette.monoA.A150
    }),

    [`&.${buttonBaseClasses.disabled}`]: {
      color: theme.vars.palette.monoA.A500,
      pointerEvents: 'none'
    },

    [`& .${svgIconClasses.root}`]: {
      color: theme.vars.palette.monoA.A500
    },

    ...theme.typography.caption
  }
})) as typeof Button;

const BreadcrumbSeparator = styled('div', {
  name: 'ESBreadcrumb',
  slot: 'Separator',
  overridesResolver: (props, styles) => styles.separator
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  color: theme.vars.palette.monoA.A500,

  [`& .${svgIconClasses.root}`]: {
    width: '16px'
  }
}));

export const Breadcrumb: OverridableComponent<BreadcrumbTypeMap> = (inProps: BreadcrumbProps) => {
  const {
    children,
    className,
    sx,
    style,
    separator = <IconBreadcrumbArrowRight container containerWidth="16px" />,
    disabled,
    position,
    shouldFirstShrink,

    ...props
  } = useThemeProps({ props: inProps, name: 'ESBreadcrumb' });

  const ownerState = { disabled, shouldFirstShrink, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <BreadcrumbRoot
      noWrap
      align="center"
      className={clsx(classes.root, className)}
      component="li"
      itemProp={position ? 'itemListElement' : undefined}
      itemScope={position ? '' : undefined}
      itemType={position ? 'https://schema.org/ListItem' : undefined}
      ownerState={ownerState}
      style={style}
      sx={sx}
    >
      <BreadcrumbTooltip
        arrow
        disableInteractive
        className={clsx(classes.tooltip)}
        placement="top"
        title={<Typography variant="caption">{children}</Typography>}
        {...(position ? {} : { disableHoverListener: true, disableFocusListener: true, disableTouchListener: true })}
      >
        {({ ref, childrenRef }) => (
          <div ref={ref as never} style={{ minWidth: 0 }}>
            <BreadcrumbContent
              className={clsx(classes.content)}
              color="monoA"
              disabled={disabled}
              itemProp={position ? 'item' : undefined}
              size="24"
              {...props}
            >
              {position ? (
                <span ref={childrenRef} itemProp="name">
                  {children}
                </span>
              ) : (
                <>{children}</>
              )}
            </BreadcrumbContent>
          </div>
        )}
      </BreadcrumbTooltip>

      {!!position && <meta content={position} itemProp="position" />}
      <BreadcrumbSeparator className={clsx(classes.separator)}>{separator}</BreadcrumbSeparator>
    </BreadcrumbRoot>
  );
};
