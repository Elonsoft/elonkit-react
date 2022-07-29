import { IDirection } from './SFSSorting.types';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { IconSortDirectionDown } from './icons/IconSortDirectionDown';
import { IconSortDirectionUp } from './icons/IconSortDirectionUp';

const SFSSortingOptionRoot = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto'
}));

const SFSSortingOptionBadge = styled('div')<{ ownerState: { isWithCount?: boolean } }>(
  ({ ownerState: { isWithCount }, theme }) => ({
    marginLeft: '6px',
    backgroundColor: theme.palette.secondary.A400,
    border: `1px solid ${theme.palette.monoA.A25}`,
    borderRadius: '4px',
    display: 'flex',
    padding: '2px 1px',

    ...(isWithCount && {
      minWidth: '18px'
    }),

    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      color: theme.palette.monoA.A600,
      width: '8px',
      height: '12px'
    }
  })
);

export const SFSSortingOption = ({ direction, count }: { direction: IDirection; count?: number }) => {
  let sortingOptions = null;

  switch (direction) {
    case null:
      return null;
    case 'asc':
      sortingOptions = {
        label: 'По возрастанию',
        icon: <IconSortDirectionUp />
      };
      break;
    case 'desc':
      sortingOptions = {
        label: 'По убыванию',
        icon: <IconSortDirectionDown />
      };
      break;
  }

  return (
    <SFSSortingOptionRoot>
      <Typography variant="caption" color="monoA.A600">
        {sortingOptions.label}
      </Typography>
      <SFSSortingOptionBadge ownerState={{ isWithCount: !!count }}>
        {sortingOptions.icon}
        {count && (
          <Typography component="div" variant="mini100Bold" color="monoA.A600">
            {count}
          </Typography>
        )}
      </SFSSortingOptionBadge>
    </SFSSortingOptionRoot>
  );
};
