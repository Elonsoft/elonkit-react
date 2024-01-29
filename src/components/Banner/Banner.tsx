import { BannerProps } from './Banner.types';

import clsx from 'clsx';
import { bannerClasses, getBannerUtilityClass } from './Banner.classes';
import { bannerTitleClasses } from './BannerTitle/BannerTitle.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material/utils';

import { IconAlertW500, IconCheckCircleW500, IconErrorW500, IconInformation2W500 } from '../../icons';

type BannerOwnerState = {
  classes?: BannerProps['classes'];
  color?: BannerProps['color'];
  severity: NonNullable<BannerProps['severity']>;
  variant: NonNullable<BannerProps['variant']>;
  breakpoint: BannerProps['breakpoint'];
};

const useUtilityClasses = (ownerState: BannerOwnerState) => {
  const { classes, color, variant, severity } = ownerState;

  const slots = {
    root: ['root', `color${capitalize(color || severity)}`, `variant${capitalize(variant)}`],
    wrapper: ['wrapper'],
    content: ['content'],
    message: ['message'],
    action: ['action'],
    icon: ['icon']
  };

  return composeClasses(slots, getBannerUtilityClass, classes);
};

const BannerRoot = styled('div', {
  name: 'ESBanner',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color, variant, severity }
    } = props;

    return [styles.root, styles[`variant${capitalize(variant)}`], styles[`color${capitalize(color || severity)}`]];
  }
})(({ theme }) => ({
  padding: '4px 8px',
  paddingLeft: '16px',

  [`&.${bannerClasses.variantColored}`]: {
    color: theme.palette.monoB[500],

    [`&.${bannerClasses.colorWarning}`]: {
      backgroundColor: theme.palette.warning[300]
    },

    [`&.${bannerClasses.colorError}`]: {
      backgroundColor: theme.palette.error[300]
    },

    [`&.${bannerClasses.colorSuccess}`]: {
      backgroundColor: theme.palette.success[300]
    },

    [`&.${bannerClasses.colorInfo}`]: {
      backgroundColor: theme.palette.info[300]
    },

    [`&.${bannerClasses.colorMonoA}`]: {
      backgroundColor: theme.palette.monoA.A300,
      color: theme.palette.monoA.A900,

      [`& .${bannerTitleClasses.root}`]: {
        color: theme.palette.monoA.A800
      },

      [`& .${bannerClasses.icon}`]: {
        color: theme.palette.monoA.A550
      }
    },

    [`&.${bannerClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.primary[300]
    },

    [`&.${bannerClasses.colorSecondary}`]: {
      backgroundColor: theme.palette.secondary[300],
      color: theme.palette.monoA.A900,

      [`& .${bannerTitleClasses.root}`]: {
        color: theme.palette.monoA.A800
      }
    }
  },

  [`&.${bannerClasses.variantMonoB}`]: {
    backgroundColor: theme.palette.monoB[500],
    color: theme.palette.monoA.A900,

    [`&.${bannerClasses.colorWarning} .${bannerClasses.icon}`]: {
      color: theme.palette.warning[300]
    },

    [`&.${bannerClasses.colorError} .${bannerClasses.icon}`]: {
      color: theme.palette.error[300]
    },

    [`&.${bannerClasses.colorSuccess} .${bannerClasses.icon}`]: {
      color: theme.palette.success[300]
    },

    [`&.${bannerClasses.colorInfo} .${bannerClasses.icon}`]: {
      color: theme.palette.info[300]
    },

    [`&.${bannerClasses.colorMonoA} .${bannerClasses.icon}`]: {
      color: theme.palette.monoA.A550
    },

    [`&.${bannerClasses.colorPrimary} .${bannerClasses.icon}`]: {
      color: theme.palette.primary[300]
    },

    [`&.${bannerClasses.colorSecondary} .${bannerClasses.icon}`]: {
      color: theme.palette.secondary[300]
    }
  }
}));

const BannerWrapper = styled('div', {
  name: 'ESBanner',
  slot: 'Wrapper',
  overridesResolver: (_props, styles) => styles.wrapper
})(() => ({
  display: 'flex'
}));

const BannerContent = styled('div', {
  name: 'ESBanner',
  slot: 'Wrapper',
  overridesResolver: (_props, styles) => styles.content
})<{ ownerState: { breakpoint: BannerProps['breakpoint'] } }>(({ ownerState: { breakpoint }, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flexGrow: 1,

  ...(!!breakpoint && {
    [theme.breakpoints.up(breakpoint)]: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  })
}));

const BannerMessage = styled(Typography, {
  name: 'ESBanner',
  slot: 'Message',
  overridesResolver: (_props, styles) => styles.message
})(() => ({
  wordBreak: 'break-word',
  minHeight: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})) as typeof Typography;

const BannerAction = styled('div', {
  name: 'ESBanner',
  slot: 'Action',
  overridesResolver: (_props, styles) => styles.action
})(() => ({
  paddingTop: '4px',
  marginLeft: '8px'
}));

const BannerIcon = styled('div', {
  name: 'ESBanner',
  slot: 'Icon',
  overridesResolver: (_props, styles) => styles.icon
})(() => ({
  paddingTop: '8px',
  marginRight: '8px'
}));

const defaultIconMapping = {
  success: <IconCheckCircleW500 />,
  warning: <IconAlertW500 />,
  error: <IconErrorW500 />,
  info: <IconInformation2W500 />
};

/**
 * An banner displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
 */
export const Banner = (inProps: BannerProps) => {
  const {
    className,
    children,
    sx,
    icon,
    variant = 'colored',
    severity = 'success',
    breakpoint,
    action,
    actions,
    color,
    iconMapping = defaultIconMapping,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESBanner'
  });

  const ownerState = { ...props, variant, severity, color, breakpoint };
  const classes = useUtilityClasses(ownerState);

  return (
    <BannerRoot className={clsx(classes.root, className)} sx={sx}>
      <BannerWrapper className={classes.wrapper}>
        {icon !== false && <BannerIcon className={classes.icon}>{icon || iconMapping[severity]}</BannerIcon>}
        <BannerContent className={classes.content} ownerState={{ breakpoint }}>
          <BannerMessage className={classes.message} color="inherit" component="div" variant="body100">
            {children}
          </BannerMessage>
          {actions}
        </BannerContent>
        {!!action && <BannerAction className={classes.action}>{action}</BannerAction>}
      </BannerWrapper>
    </BannerRoot>
  );
};
