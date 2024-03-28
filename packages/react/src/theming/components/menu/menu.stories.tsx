/* eslint-disable storybook/default-exports */

import { useState } from 'react';

import { Args, Story, StoryContext } from '@storybook/react';

import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';

import { MenuItem } from '../../../components/MenuItem';
import { IconDotsVerticalW400, IconUpload } from '../../../icons';

const getButtonText = (args: Args, context: StoryContext) => {
  return context.globals.locale === 'en' ? 'Open menu' : 'Открыть меню';
};

const getCutText = (args: Args, context: StoryContext) => {
  return context.globals.locale === 'en' ? 'Cut' : 'Вырезать';
};

const getCopyText = (args: Args, context: StoryContext) => {
  return context.globals.locale === 'en' ? 'Copy' : 'Копировать';
};

const getPasteText = (args: Args, context: StoryContext) => {
  return context.globals.locale === 'en' ? 'Paste' : 'Вставить';
};

const getActionText = (args: Args, context: StoryContext) => {
  return context.globals.locale === 'en' ? 'Action' : 'Действие';
};

const getErrorActionText = (args: Args, context: StoryContext) => {
  return context.globals.locale === 'en' ? 'Dangerous action' : 'Опасное действие';
};

export const Demo: Story = (args, context) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" onClick={onClick}>
        {getButtonText(args, context)}
      </Button>
      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={onClose}>
        <MenuItem>
          <ListItemIcon>
            <IconUpload />
          </ListItemIcon>
          <ListItemText>{getCutText(args, context)}</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconUpload />
          </ListItemIcon>
          <ListItemText>{getCopyText(args, context)}</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconUpload />
          </ListItemIcon>
          <ListItemText>{getPasteText(args, context)}</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>{getActionText(args, context)}</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>{getActionText(args, context)}</ListItemText>
        </MenuItem>
        <MenuItem color="error">
          <ListItemText>{getErrorActionText(args, context)}</ListItemText>
        </MenuItem>
        <MenuItem color="error">
          <ListItemIcon>
            <IconUpload />
          </ListItemIcon>
          <ListItemText>{getErrorActionText(args, context)}</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export const DemoList: Story = (args, context) => {
  return (
    <Box
      sx={(theme) => ({
        maxWidth: '360px',
        boxShadow: theme.vars.palette.shadow.down[500],
        backgroundColor: theme.vars.palette.surface[400],
        borderRadius: '4px'
      })}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <IconUpload />
          </ListItemIcon>
          <ListItemText>{getCutText(args, context)}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <IconUpload />
          </ListItemIcon>
          <ListItemText>{getCopyText(args, context)}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <IconUpload />
          </ListItemIcon>
          <ListItemText>{getPasteText(args, context)}</ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText>{getActionText(args, context)}</ListItemText>
          <IconButton color="tertiary" size="32">
            <IconDotsVerticalW400 />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemText inset>{getActionText(args, context)}</ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export const DemoListButton: Story = (args, context) => {
  return (
    <Box
      sx={(theme) => ({
        maxWidth: '360px',
        boxShadow: theme.vars.palette.shadow.down[500],
        backgroundColor: theme.vars.palette.surface[400],
        borderRadius: '4px'
      })}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <IconUpload />
          </ListItemIcon>
          <ListItemText>{getCutText(args, context)}</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <IconUpload />
          </ListItemIcon>
          <ListItemText>{getCopyText(args, context)}</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <IconUpload />
          </ListItemIcon>
          <ListItemText>{getPasteText(args, context)}</ListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText>{getActionText(args, context)}</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText inset>{getActionText(args, context)}</ListItemText>
        </ListItemButton>
      </List>
    </Box>
  );
};
