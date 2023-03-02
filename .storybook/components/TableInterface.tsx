// Waiting for storybook implementation of this feature.
// https://github.com/storybookjs/storybook/issues/15008

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../src/overrides.d.ts" />

import React, { useMemo } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';

import { getDescription, getField, TableCode, TableContainer, TableDescription, TableRow } from './TableBase';

import { Theme } from '../../src/testing';
import json from '../../src/typedoc.json';

import { useDarkMode } from 'storybook-dark-mode';

interface TableInterfaceProps {
  name: string;
  variant: 'props' | 'css';
}

const TableInterfaceBase = ({ name, variant }: TableInterfaceProps) => {
  const data: Array<{
    id: number;
    name: string;
    isOptional: boolean;
    type: string;
    default: string | null;
    description: string | null;
  }> = useMemo(() => {
    let entry = json.children.find((e) => e.name === name);
    let children = entry?.children || entry?.type?.declaration?.children;

    if (variant === 'props' && entry?.kindString === 'Type alias') {
      if (entry?.type?.typeArguments?.length) {
        entry = json.children.find((e) => e.name === (entry?.type as any).typeArguments[0]?.name);
        children = (entry as any)?.children?.[1]?.type?.types?.[1]?.declaration?.children;
      } else {
        children = (entry as any).type.types[0].declaration.children;
      }
    }

    if (children) {
      return children
        .map((child) => ({
          id: child.id,
          name: child.name,
          isOptional: !!child.flags.isOptional,
          type: getField(child),
          default: child.comment?.tags?.find((tag) => tag.tag === 'default')?.text,
          description: getDescription(child)
        }))
        .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    }
    return [];
  }, [name]);

  if (!data.length) {
    return (
      <div>
        No type definitions found for <code>{name}</code>
      </div>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={variant === 'props' ? 3 : 2}>
              <Typography component="code" variant="body100">
                {name}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={{ width: '200px' }}>Name</TableCell>
            <TableCell>Description</TableCell>
            {variant === 'props' && <TableCell>Default</TableCell>}
          </TableRow>
          {data.map((e) => (
            <TableRow key={e.id}>
              <TableCell>
                <Typography component="code" variant="body100">
                  {e.name}
                  {variant === 'props' && !e.isOptional && '*'}
                </Typography>
              </TableCell>
              <TableCell>
                <TableDescription>{e.description}</TableDescription>
                {variant === 'props' && <TableCode>{e.type}</TableCode>}
              </TableCell>
              {variant === 'props' && <TableCell>{!!e.default && <TableCode>{e.default}</TableCode>}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const TableInterface = (props: TableInterfaceProps) => {
  const isDarkMode = useDarkMode();

  return (
    <Theme isDarkMode={isDarkMode}>
      <TableInterfaceBase {...props} />
    </Theme>
  );
};
