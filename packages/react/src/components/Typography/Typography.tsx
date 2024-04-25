import { forwardRef } from 'react';

import { TypographyProps, TypographyTypeMap, TypographyVariant } from './Typography.types';

import clsx from 'clsx';
import { getTypographyUtilityClass } from './Typography.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { Breakpoint, styled, useThemeProps } from '@mui/material/styles';
// import { extendSxProp } from '@mui/system/styleFunctionSx';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { capitalize } from '@mui/material/utils';

type TypographyOwnerState = {
  classes?: TypographyProps['classes'];
  variant: NonNullable<TypographyProps['variant']>;
  align: NonNullable<TypographyProps['align']>;
  noWrap: TypographyProps['noWrap'];
};

const useUtilityClasses = (ownerState: TypographyOwnerState) => {
  const { align, noWrap, variant, classes } = ownerState;

  const slots = {
    root: [
      'root',
      typeof variant === 'string' && variant,
      ownerState.align !== 'inherit' && `align${capitalize(align)}`,
      noWrap && 'noWrap'
    ]
  };

  return composeClasses(slots, getTypographyUtilityClass, classes);
};

export const TypographyRoot = styled('span', {
  name: 'ESTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.variant && styles[ownerState.variant],
      ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`],
      ownerState.noWrap && styles.noWrap
    ];
  }
})<{ ownerState: TypographyOwnerState }>(({ theme, ownerState }) => ({
  margin: 0,
  ...(ownerState.variant === 'inherit' && {
    // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
    font: 'inherit'
  }),
  ...(ownerState.align !== 'inherit' && {
    textAlign: ownerState.align
  }),
  ...(ownerState.noWrap && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }),

  ...(typeof ownerState.variant === 'string' &&
    ownerState.variant !== 'inherit' &&
    theme.typography[ownerState.variant]),

  ...(typeof ownerState.variant !== 'string' &&
    Object.entries(ownerState.variant || {}).reduce(
      (acc, entry) => ({
        ...acc,
        [theme.breakpoints.up(entry[0] as number | Breakpoint)]: {
          ...theme.typography[entry[1] as Exclude<TypographyVariant, 'inherit'>]
        }
      }),
      {}
    ))
}));

const defaultVariantMapping: TypographyProps['variantMapping'] = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body400: 'div',
  body400Medium: 'div',
  body400Bold: 'div',
  body300: 'div',
  body300Medium: 'div',
  body300Bold: 'div',
  body200: 'div',
  body200Medium: 'div',
  body200Bold: 'div',
  body100: 'div',
  body100Medium: 'div',
  body100Bold: 'div',
  captionMedium: 'div',
  captionBold: 'div',
  mini200: 'span',
  mini100: 'span',
  mini100Bold: 'span',
  micro: 'span',
  inherit: 'span'
};

// @ts-expect-error tmp
export const Typography: OverridableComponent<TypographyTypeMap> = forwardRef(function Typography(inProps, ref) {
  const {
    // @ts-expect-error tmp
    component,
    align = 'inherit',
    className,
    noWrap = false,
    variant = 'body100',
    variantMapping = defaultVariantMapping,
    ...props
  } = useThemeProps({ props: inProps, name: 'ESTypography' });

  const ownerState = {
    ...props,
    align,
    className,
    component,
    noWrap,
    variant,
    variantMapping
  };

  const firstVariant = typeof variant === 'string' ? variant : Object.values(variant)[0];
  const Component = component || variantMapping[firstVariant] || defaultVariantMapping[firstVariant] || 'span';

  const classes = useUtilityClasses(ownerState);

  return (
    // @ts-expect-error tmp
    <TypographyRoot
      ref={ref}
      as={Component}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      {...props}
    />
  );
});
