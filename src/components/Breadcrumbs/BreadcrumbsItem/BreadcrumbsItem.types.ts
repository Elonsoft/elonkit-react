import React from 'react';

import { BreadcrumbsItemClasses } from './BreadcrumbsItem.classes';

export interface BreadcrumbsItemProps {
  /** Used for defining submenu. */
  menu?: React.ReactNode[];
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<BreadcrumbsItemClasses>;

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;

  /** iIf true, the component is disabled. */
  disabled?: boolean;
  /** Any props you need in your Link component */
  [key: string]: any;

  collapseFirst?: boolean;
  collapseLast?: boolean;
}
