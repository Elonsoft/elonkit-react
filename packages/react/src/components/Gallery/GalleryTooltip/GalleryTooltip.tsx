import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

export const GalleryTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESGalleryTooltip',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  }
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background: theme.vars.palette.white.A600,
    color: theme.vars.palette.black.A900,
    borderRadius: '4px',

    [`& .${tooltipClasses.arrow}`]: {
      color: theme.vars.palette.white.A600
    }
  },
  '&[data-popper-reference-hidden]': {
    pointerEvents: 'none',
    opacity: '0'
  }
}));
