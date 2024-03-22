/* eslint-disable no-use-before-define */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../src/overrides.d.ts" />

import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableRow, { tableRowClasses } from '@mui/material/TableRow';

import json from '../../src/typedoc.json';

export const TableContainer = styled(MuiTableContainer)(() => ({
  fontFamily: 'monospace'
}));

export const TableRow = styled(MuiTableRow)(({ theme }) => ({
  [`&.${tableRowClasses.head}`]: {
    backgroundColor: theme.palette.monoA.A50
  },
  [`& .${tableCellClasses.root}`]: {
    borderBottom: `1px solid ${theme.palette.monoA.A150}`
  },
  [`&.${tableRowClasses.head}:last-child .${tableCellClasses.root}`]: {
    borderBottom: `1px solid ${theme.palette.monoA.A150}`
  }
}));

export const TableDescription = styled('div')(() => ({
  marginBottom: 4
}));

export const TableCode = styled('code')(({ theme }) => ({
  display: 'inline-block',
  padding: '3px 5px',
  borderRadius: 3,
  backgroundColor: theme.palette.monoA.A50,
  border: `1px solid ${theme.palette.monoA.A150}`
}));

export const getDescription = (c) => {
  return c.comment?.shortText || c.signatures?.[0]?.comment?.shortText || null;
};

export const getMethod = (m) => {
  const signature = m?.signatures?.[0];
  if (signature) {
    const parameters = signature.parameters
      ? signature.parameters.map((p) => `${p.name}: ${getProperty(p.type)}`).join(', ')
      : '';
    return `(${parameters}) => ${getProperty(signature.type)}`;
  }
  return '';
};

export const getProperty = (p) => {
  switch (p.type) {
    case 'intrinsic': {
      return p.name;
    }
    case 'literal': {
      if (p.value === null) {
        return `${p.value}`;
      }
      return `'${p.value}'`;
    }
    case 'union': {
      return p.types.map(getProperty).join(' | ');
    }
    case 'array': {
      return `Array<${getProperty(p.elementType)}>`;
    }
    case 'reference': {
      const reference = json.children.find((e) => e.id === p.id);
      if (reference && reference.type && reference.type.type !== 'reflection') {
        return getProperty(reference.type);
      }
      return `${p.name}${p.typeArguments ? `<${p.typeArguments.map(getProperty).join(', ')}>` : ''}`;
    }
    case 'typeOperator': {
      return `${p.operator} ${getProperty(p.target)}`;
    }
    case 'reflection': {
      return getMethod(p.declaration);
    }
    case 'indexedAccess': {
      return `${getProperty(p.objectType)}[${getProperty(p.indexType)}]`;
    }
    default: {
      return '';
    }
  }
};

export const getField = (t) => {
  if (t.kindString === 'Method') {
    return getMethod(t);
  }
  if (t.kindString === 'Property') {
    return getProperty(t.type);
  }
  return '';
};
