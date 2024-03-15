/* eslint-disable storybook/default-exports */

import { useRef } from 'react';

import { Story } from '@storybook/react';

import { Box, Button, List, ListItem } from '@mui/material';

import { useScrollSpy } from './useScrollSpy';

const buttons = [
  { id: '1', text: 'Pink' },
  { id: '2', text: 'Yellow' },
  { id: '3', text: 'Grey' },
  { id: '4', text: 'Orange' },
  { id: '5', text: 'Green' }
];

export const Demo: Story = () => {
  const containerRef = useRef<HTMLElement>(null);

  const isDocsPage = window.location.href.includes('docs');

  const activeId = useScrollSpy(
    buttons.map(({ id }) => id),
    {
      ...(containerRef.current ? { root: containerRef.current, rootMargin: `0px 0px -100% 0px` } : {})
    }
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: isDocsPage ? '40vh' : '100vh',
        marginTop: isDocsPage ? '-40px' : '-35px',
        paddingTop: isDocsPage ? '0' : '18px'
      }}
    >
      <List sx={{ display: 'flex', flexDirection: 'row' }}>
        {buttons.map((item) => (
          <ListItem key={item.id} sx={{ justifyContent: 'center' }}>
            <Button disabled={+activeId !== +item.id} variant="contained">
              {item.text}
            </Button>
          </ListItem>
        ))}
      </List>
      <Box ref={containerRef} sx={{ overflowY: 'auto' }}>
        <Box
          id="1"
          sx={(theme) => ({
            backgroundColor: theme.palette.pink[100],
            height: isDocsPage ? '40vh' : '100vh',
            marginBottom: '8px'
          })}
        />
        <Box
          id="2"
          sx={(theme) => ({
            backgroundColor: theme.palette.yellow[100],
            height: isDocsPage ? '40vh' : '100vh',
            marginBottom: '8px'
          })}
        />
        <Box
          id="3"
          sx={(theme) => ({
            backgroundColor: theme.palette.grey[100],
            height: isDocsPage ? '40vh' : '100vh',
            marginBottom: '8px'
          })}
        />
        <Box
          id="4"
          sx={(theme) => ({
            backgroundColor: theme.palette.orange[100],
            height: isDocsPage ? '40vh' : '100vh',
            marginBottom: '8px'
          })}
        />
        <Box
          id="5"
          sx={(theme) => ({
            backgroundColor: theme.palette.green[100],
            height: isDocsPage ? '40vh' : '100vh',
            marginBottom: '8px'
          })}
        />
      </Box>
    </Box>
  );
};
