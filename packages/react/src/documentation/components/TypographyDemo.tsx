import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export const TypographyDemo = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Variant</TableCell>
          <TableCell>Display</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <code>h1</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="h1">
              Heading 1
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>h2</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="h2">
              Heading 2
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>h3</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="h3">
              Heading 3
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>h4</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="h4">
              Heading 4
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>h5</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="h5">
              Heading 5
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>h6</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="h6">
              Heading 6
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>subtitle1</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="subtitle1">
              Subtitle 1
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>subtitle2</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="subtitle2">
              Subtitle 2
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body400</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body400">
              Body 400
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body400Medium</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body400Medium">
              Body 400 | Medium
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body400Bold</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body400Bold">
              Body 400 | Bold
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body300</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body300">
              Body 300
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body300Medium</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body300Medium">
              Body 300 | Medium
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body300Bold</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body300Bold">
              Body 300 | Bold
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body200</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body200">
              Body 200
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body200Medium</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body200Medium">
              Body 200 | Medium
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body200Bold</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body200Bold">
              Body 200 | Bold
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body100</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body100">
              Body 100
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body100Medium</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body100Medium">
              Body 100 | Medium
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>body100Bold</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="body100Bold">
              Body 100 | Bold
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>mini200</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="mini200">
              Mini 200
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>mini100</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="mini100">
              Mini 100
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>mini100Bold</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="mini100Bold">
              Mini 100 | Bold
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>micro</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="micro">
              Micro
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>button</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="button">
              Button
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>caption</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="caption">
              Caption
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>captionMedium</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="captionMedium">
              Caption | Medium
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>captionBold</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="captionBold">
              Caption | Bold
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <code>overline</code>
          </TableCell>
          <TableCell>
            <Typography component="div" variant="overline">
              Overline
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
