import React, { useEffect, useState } from 'react';

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
  border: `1px solid ${theme.palette.monoA.A100}`
}));

export const IconsDemo = () => {
  const [oversizedIcons, setOversizedIcons] = useState({});
  const [wideIcons, setWideIcons] = useState({});

  const containerSize = 48;

  useEffect(() => {
    Object.keys(icons).forEach((name) => {
      const iconElement = document.getElementById(name);

      if (iconElement) {
        const { width, height } = iconElement.getBoundingClientRect();

        if (height > containerSize) {
          setOversizedIcons((prev) => ({ ...prev, [name]: true }));
        } else if (width > containerSize) {
          setWideIcons((prev) => ({ ...prev, [name]: true }));
        }
      }
    });
  }, []);

  return (
    <IconsDemoRoot>
      {Object.keys(icons).map((name) => {
        const Icon = icons[name as keyof typeof icons];

        return (
          <Tooltip key={name} arrow title={<code>{name}</code>}>
            <IconsDemoIcon>
              <Icon
                id={name}
                {...(name in oversizedIcons ? { size: '40px' } : name in wideIcons ? { width: '40px' } : {})}
              />
            </IconsDemoIcon>
          </Tooltip>
        );
      })}
    </IconsDemoRoot>
  );
};
