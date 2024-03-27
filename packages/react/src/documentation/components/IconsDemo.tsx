import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

import * as icons from '../../icons';

const IconsDemoRoot = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px'
}));

const IconsDemoIcon = styled('div')(({ theme }) => ({
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '2px',
  border: `1px solid ${theme.vars.palette.monoA.A100}`
}));

export const IconsDemo = () => {
  return (
    <IconsDemoRoot>
      {Object.keys(icons).map((name) => {
        const Icon = icons[name as keyof typeof icons];

        return (
          <Tooltip key={name} arrow title={<code>{name}</code>}>
            <IconsDemoIcon>
              <Icon />
            </IconsDemoIcon>
          </Tooltip>
        );
      })}
    </IconsDemoRoot>
  );
};
