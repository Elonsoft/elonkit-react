// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../src/overrides.d.ts" />

import React, { useMemo } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';

import { getDescription, getProperty, TableCode, TableContainer, TableDescription, TableRow } from './TableBase';

import { Theme } from '../../src/testing';
import json from '../../src/typedoc.json';

import { useDarkMode } from 'storybook-dark-mode';

interface TableFunctionProps {
  name: string;
}

const TableFunctionBase = ({ name }: TableFunctionProps) => {
  const data: {
    params: Array<{
      id: number;
      name: string;
      isOptional: boolean;
      type: string;
      default: string | null;
      description: string | null;
    }>;
    returns: {
      type: string;
      description: string | null;
    };
  } | null = useMemo(() => {
    const entry = json.children.find((e) => e.name === name);
    const signature = entry?.signatures?.[0];
    if (signature) {
      const params = (signature as any).parameters
        ? (signature as any).parameters.map((child) => ({
            id: child.id,
            name: child.name,
            isOptional: !!child.flags.isOptional,
            type: getProperty(child.type),
            default: child.comment?.tags?.find((tag) => tag.tag === 'default')?.text,
            description: getDescription(child)
          }))
        : [];
      const returns = { type: getProperty(signature.type), description: (signature as any)?.comment?.returns || null };
      return { params, returns };
    }
    return null;
  }, [name]);

  if (!data) {
    return (
      <div>
        No type definitions found for <code>{name}</code>
      </div>
    );
  }
  return (
    <TableContainer>
      <Table>
        {!!data.params.length && (
          <>
            <TableHead>
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography component="code" variant="body100">
                    Arguments
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: '200px' }}>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Default</TableCell>
              </TableRow>
              {data.params.map((e) => (
                <TableRow key={e.id}>
                  <TableCell>
                    <Typography component="code" variant="body100">
                      {e.name}
                      {e.isOptional && '*'}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <TableDescription>{e.description}</TableDescription>
                    <TableCode>{e.type}</TableCode>
                  </TableCell>
                  <TableCell>{!!e.default && <TableCode>{e.default}</TableCode>}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>
              <Typography component="code" variant="body100">
                Return Value
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3}>
              <TableDescription>{data.returns.description}</TableDescription>
              <TableCode>{data.returns.type}</TableCode>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const TableFunction = (props: TableFunctionProps) => {
  const isDarkMode = useDarkMode();

  return (
    <Theme isDarkMode={isDarkMode}>
      <TableFunctionBase {...props} />
    </Theme>
  );
};
