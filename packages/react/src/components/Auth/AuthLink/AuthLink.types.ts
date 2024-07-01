/* eslint-disable @typescript-eslint/ban-types */

import { AuthLinkClasses } from './AuthLink.classes';

import { OverrideProps } from '@mui/material/OverridableComponent';

import { LinkClasses, LinkOwnProps } from '../../Link';

export interface AuthLinkTypeMap<P = {}, D extends React.ElementType = 'a'> {
  props: P &
    Omit<LinkOwnProps, 'classes'> & {
      classes?: Partial<LinkClasses> & Partial<AuthLinkClasses>;
    };
  defaultComponent: D;
}

export type AuthLinkProps<D extends React.ElementType = AuthLinkTypeMap['defaultComponent'], P = {}> = OverrideProps<
  AuthLinkTypeMap<P, D>,
  D
>;
