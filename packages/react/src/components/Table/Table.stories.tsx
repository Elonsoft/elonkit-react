import { useCallback, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { Table } from './Table';
import { TableActions } from './TableActions';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableFoot } from './TableFoot';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { TableScrollbar } from './TableScrollbar';
import { TableText } from './TableText';
import { useTableResize } from './useTableResize';
import { useTableSelection } from './useTableSelection';

import { IconCloseW600, IconDotsVerticalW500, IconPencilW500 } from '../../icons';
import { Pagination, PaginationPages, PaginationRange } from '../Pagination';

const DATA: {
  en: Array<{
    id: number;
    name: string;
    age: number;
    status: string;
    city: string;
  }>;
  ru: Array<{
    id: number;
    name: string;
    age: number;
    status: string;
    city: string;
  }>;
} = { en: [], ru: [] };

const NAMES = {
  en: {
    checkbox: 'Checkbox',
    id: 'ID',
    name: 'Name',
    age: 'Age',
    status: 'Status',
    city: 'City',
    menu: 'Menu'
  },
  ru: {
    checkbox: 'Чекбокс',
    id: 'ID',
    name: 'ФИО',
    age: 'Возраст',
    status: 'Статус',
    city: 'Город',
    menu: 'Меню'
  }
};

for (let i = 0; i < 50; i++) {
  DATA.en.push({
    id: i + 1,
    name: 'John Doe',
    age: 25,
    status: 'Active',
    city: 'New York City'
  });

  DATA.ru.push({
    id: i + 1,
    name: 'Иванов Иван Иванович',
    age: 25,
    status: 'Активен',
    city: 'Иваново'
  });
}

const meta: Meta<typeof Table> = {
  tags: ['autodocs'],
  component: Table,
  parameters: {
    references: [
      'Table',
      'TableActions',
      'TableBody',
      'TableCell',
      'TableFoot',
      'TableHead',
      'TableRow',
      'TableScrollbar',
      'TableText'
    ]
  },
  argTypes: {
    columns: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Demo: Story = {
  render: function Render(_args, context) {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    const ref = useRef<HTMLDivElement | null>(null);
    const rowRef = useRef<HTMLDivElement | null>(null);

    const [fields] = useState<Array<keyof (typeof DATA)['en'][0]>>(['id', 'name', 'age', 'status', 'city']);
    const [columns, setColumns] = useState([
      '56px',
      'minmax(50px, 1fr)',
      'minmax(150px, 2fr)',
      '150px',
      'minmax(100px, 2fr)',
      'minmax(100px, 1fr)',
      'minmax(0px, auto)',
      '72px'
    ]);

    const { onResize, onResizeCommit } = useTableResize(ref, rowRef, columns, setColumns);

    const { selected, setSelected, isAllSelected, isSomeSelected, toggle, toggleAll } = useTableSelection(
      DATA[locale],
      {
        key: 'id'
      }
    );

    const onClose = useCallback(() => {
      setSelected([]);
    }, []);

    return (
      <Table ref={ref} columns={columns}>
        <TableHead sticky={0}>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={isAllSelected}
                color="secondary"
                indeterminate={isSomeSelected}
                inputProps={{ 'aria-label': isAllSelected ? 'Unselect all' : 'Select all' }}
                onChange={() => toggleAll()}
              />
            </TableCell>
            <TableCell colSpan={3} onResize={onResize(1, 3)} onResizeCommit={onResizeCommit(1, 3)}>
              {locale === 'en' ? 'Group 1' : 'Группа 1'}
            </TableCell>
            <TableCell colSpan={2} onResize={onResize(4, 2)} onResizeCommit={onResizeCommit(4, 2)}>
              {locale === 'en' ? 'Group 2' : 'Группа 2'}
            </TableCell>
            <TableCell padding="none" />
            <TableCell />
          </TableRow>
          <TableRow ref={rowRef}>
            <TableCell padding="checkbox" />
            {fields.map((field, index) => (
              <TableCell
                key={field}
                minWidth={100}
                onResize={onResize(index + 1)}
                onResizeCommit={onResizeCommit(index + 1)}
              >
                <TableText>{NAMES[locale][field]}</TableText>
              </TableCell>
            ))}
            <TableCell padding="none" />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {DATA[locale].map((row) => {
            const isSelected = selected.indexOf(row.id) !== -1;
            const labelId = `story-usage-checkbox-${row.id}`;

            return (
              <TableRow key={row.id} hover selected={isSelected} tabIndex={0}>
                <TableCell overlap padding="checkbox">
                  <Checkbox
                    checked={isSelected}
                    color="secondary"
                    inputProps={{ 'aria-labelledby': labelId }}
                    onChange={() => toggle(row.id)}
                  />
                </TableCell>
                {fields.map((field) => (
                  <TableCell key={field} id={field === 'name' ? labelId : undefined}>
                    <TableText>{row[field]}</TableText>
                  </TableCell>
                ))}
                <TableCell padding="none" />
                <TableCell overlap align="flex-end">
                  <IconButton aria-label={locale === 'en' ? 'More' : 'Ещё'}>
                    <IconDotsVerticalW500 />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFoot sticky={0}>
          {!!selected.length && (
            <TableActions
              count={selected.length}
              label={locale === 'en' ? 'Selected' : 'Выбрано'}
              sx={(theme) => ({ borderBottom: `1px solid ${theme.palette.monoA.A100}` })}
            >
              <IconButton aria-label={locale === 'en' ? 'Edit' : 'Редактировать'}>
                <IconPencilW500 />
              </IconButton>
              <Divider flexItem orientation="vertical" />
              <IconButton aria-label={locale === 'en' ? 'Unselect all' : 'Снять всё выделение'} onClick={onClose}>
                <IconCloseW600 />
              </IconButton>
            </TableActions>
          )}
          <TableScrollbar />
          <Pagination
            count={100}
            itemsPerPage={10}
            page={1}
            sx={{ padding: '12px', paddingLeft: '16px' }}
            onItemsPerPageChange={() => {
              /* */
            }}
            onPageChange={() => {
              /* */
            }}
          >
            <PaginationRange />
            <PaginationPages boundaryCount={0} siblingCount={0} />
          </Pagination>
        </TableFoot>
      </Table>
    );
  }
};

/** Pinned (or frozen, locked, or sticky) columns are columns that are visible at all time while the user scrolls the data grid horizontally. They can be pinned either to the left or right side.
 *
 * You may encounter issues if the sum of the widths of the pinned columns is larger than the width of the table. Make sure
that the table can accommodate properly, at least, these columns.
 */
export const ColumnPinning: Story = {
  render: function Render(_args, context) {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    const ref = useRef<HTMLDivElement | null>(null);
    const rowRef = useRef<HTMLDivElement | null>(null);

    const [pinLeft, setPinLeft] = useState<Array<string>>(['checkbox']);
    const [pinRight, setPinRight] = useState<Array<string>>(['menu']);

    const [columns, setColumns] = useState([
      '56px',
      'minmax(50px, 1fr)',
      'minmax(150px, 2fr)',
      '150px',
      'minmax(100px, 2fr)',
      'minmax(100px, 1fr)',
      'minmax(0px, auto)',
      '72px'
    ]);

    const { onResize, onResizeCommit } = useTableResize(ref, rowRef, columns, setColumns);

    const { selected, setSelected, isAllSelected, isSomeSelected, toggle, toggleAll } = useTableSelection(
      DATA[locale],
      {
        key: 'id'
      }
    );

    const onClose = () => {
      setSelected([]);
    };

    const onPinChange = (pin: 'left' | 'right') => (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value }
      } = event;

      if (pin === 'left') {
        setPinRight((prev) => prev.filter((e) => !value.includes(e)));
        setPinLeft(value as unknown as string[]);
      }
      if (pin === 'right') {
        setPinLeft((prev) => prev.filter((e) => !value.includes(e)));
        setPinRight(value as unknown as string[]);
      }
    };

    const getPin = (field: string) => {
      if (pinLeft.includes(field)) {
        return 'left';
      }
      if (pinRight.includes(field)) {
        return 'right';
      }
      return undefined;
    };

    return (
      <Box>
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '16px',
            maxWidth: '850px',
            [theme.breakpoints.up('tabletXS')]: { flexDirection: 'row' }
          })}
        >
          <TextField
            fullWidth
            select
            SelectProps={{ multiple: true }}
            label={locale === 'en' ? 'Pin left' : 'Закрепить слева'}
            size="40"
            value={pinLeft}
            onChange={onPinChange('left')}
          >
            {Object.entries(NAMES[locale]).map(([key, value]) => (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            SelectProps={{ multiple: true }}
            label={locale === 'en' ? 'Pin right' : 'Закрепить справа'}
            size="40"
            value={pinRight}
            onChange={onPinChange('right')}
          >
            {Object.entries(NAMES[locale]).map(([key, value]) => (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Table ref={ref} columns={columns}>
          <TableHead sticky={0}>
            <TableRow ref={rowRef}>
              <TableCell padding="checkbox" pin={getPin('checkbox')}>
                <Checkbox
                  checked={isAllSelected}
                  color="secondary"
                  indeterminate={isSomeSelected}
                  inputProps={{ 'aria-label': isAllSelected ? 'Unselect all' : 'Select all' }}
                  onChange={() => toggleAll()}
                />
              </TableCell>
              <TableCell minWidth={100} pin={getPin('id')} onResize={onResize(1)} onResizeCommit={onResizeCommit(1)}>
                <TableText>{NAMES[locale].id}</TableText>
              </TableCell>
              <TableCell minWidth={100} pin={getPin('name')} onResize={onResize(2)} onResizeCommit={onResizeCommit(2)}>
                <TableText>{NAMES[locale].name}</TableText>
              </TableCell>
              <TableCell
                minWidth={100}
                pin={getPin('status')}
                onResize={onResize(3)}
                onResizeCommit={onResizeCommit(3)}
              >
                <TableText>{NAMES[locale].status}</TableText>
              </TableCell>
              <TableCell minWidth={100} pin={getPin('age')} onResize={onResize(4)} onResizeCommit={onResizeCommit(4)}>
                <TableText>{NAMES[locale].age}</TableText>
              </TableCell>
              <TableCell minWidth={100} pin={getPin('city')} onResize={onResize(5)} onResizeCommit={onResizeCommit(5)}>
                <TableText>{NAMES[locale].city}</TableText>
              </TableCell>
              <TableCell padding="none" pin={getPin('city')} />
              <TableCell pin={getPin('menu')} />
            </TableRow>
          </TableHead>
          <TableBody>
            {DATA[locale].map((row) => {
              const isSelected = selected.indexOf(row.id) !== -1;
              const labelId = `story-usage-checkbox-${row.id}`;

              return (
                <TableRow key={row.id} hover={false} selected={isSelected}>
                  <TableCell overlap padding="checkbox" pin={getPin('checkbox')}>
                    <Checkbox
                      checked={isSelected}
                      color="secondary"
                      inputProps={{ 'aria-labelledby': labelId }}
                      onChange={() => toggle(row.id)}
                    />
                  </TableCell>
                  <TableCell pin={getPin('id')}>
                    <TableText>{row.id}</TableText>
                  </TableCell>
                  <TableCell id={labelId} pin={getPin('name')}>
                    <TableText>{row.name}</TableText>
                  </TableCell>
                  <TableCell pin={getPin('status')}>
                    <TableText>{row.status}</TableText>
                  </TableCell>
                  <TableCell pin={getPin('age')}>
                    <TableText>{row.age}</TableText>
                  </TableCell>
                  <TableCell pin={getPin('city')}>
                    <TableText>{row.city}</TableText>
                  </TableCell>
                  <TableCell padding="none" pin={getPin('city')} />
                  <TableCell overlap align="flex-end" pin={getPin('menu')}>
                    <IconButton aria-label={locale === 'en' ? 'More' : 'Ещё'}>
                      <IconDotsVerticalW500 />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFoot sticky={0}>
            {!!selected.length && (
              <TableActions
                count={selected.length}
                label={locale === 'en' ? 'Selected' : 'Выбрано'}
                sx={(theme) => ({ borderBottom: `1px solid ${theme.palette.monoA.A100}` })}
              >
                <IconButton aria-label={locale === 'en' ? 'Edit' : 'Редактировать'}>
                  <IconPencilW500 />
                </IconButton>
                <Divider flexItem orientation="vertical" />
                <IconButton aria-label={locale === 'en' ? 'Unselect all' : 'Снять всё выделение'} onClick={onClose}>
                  <IconCloseW600 />
                </IconButton>
              </TableActions>
            )}
            <TableScrollbar />
            <Pagination
              count={100}
              itemsPerPage={10}
              page={1}
              sx={{ padding: '12px', paddingLeft: '16px' }}
              onItemsPerPageChange={() => {
                /* */
              }}
              onPageChange={() => {
                /* */
              }}
            >
              <PaginationRange />
              <PaginationPages boundaryCount={0} siblingCount={0} />
            </Pagination>
          </TableFoot>
        </Table>
      </Box>
    );
  }
};
