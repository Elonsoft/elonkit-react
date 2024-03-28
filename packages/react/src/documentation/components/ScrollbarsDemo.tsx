import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ScrollbarsDemoName = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  marginBottom: '8px',
  padding: '3px 5px',
  borderRadius: '3px',
  fontSize: '13px',
  backgroundColor: theme.vars.palette.monoA.A50,
  border: `1px solid ${theme.vars.palette.monoA.A75}`
})) as typeof Typography;

export const ScrollbarsDemo = () => {
  const content = (
    <Typography component="div" sx={{ height: '1000px', width: '1000px', padding: '8px' }} variant="body200">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
  );

  return (
    <Box>
      <ScrollbarsDemoName component="code">normalMonoA</ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoB.A75',
          color: 'monoA.A900',
          ...theme.scrollbars.normalMonoA
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        normalMonoB
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoA.A800',
          color: 'monoB.A900',
          ...theme.scrollbars.normalMonoB
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        normalBlack
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'white.A800',
          color: 'black.A900',
          ...theme.scrollbars.normalBlack
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        normalWhite
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'black.A800',
          color: 'white.A900',
          ...theme.scrollbars.normalWhite
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        thinMonoA
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoA.A75',
          ...theme.scrollbars.thinMonoA
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        thinMonoB
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoA.A800',
          color: 'monoB.A900',
          ...theme.scrollbars.thinMonoB
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        thinBlack
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'white.A800',
          color: 'black.A900',
          ...theme.scrollbars.thinBlack
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        thinWhite
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'black.A800',
          color: 'white.A900',
          ...theme.scrollbars.thinWhite
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        overlayMonoA
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoB.A75',
          color: 'monoA.A900',
          ...theme.scrollbars.overlayMonoA
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        overlayMonoB
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'monoA.A800',
          color: 'monoB.A900',
          ...theme.scrollbars.overlayMonoB
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        overlayBlack
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'white.A800',
          color: 'black.A900',
          ...theme.scrollbars.overlayBlack
        })}
      >
        {content}
      </Box>
      <ScrollbarsDemoName component="code" sx={{ marginTop: '16px' }}>
        overlayWhite
      </ScrollbarsDemoName>
      <Box
        sx={(theme) => ({
          height: '150px',
          backgroundColor: 'black.A800',
          color: 'white.A900',
          ...theme.scrollbars.overlayWhite
        })}
      >
        {content}
      </Box>
    </Box>
  );
};
