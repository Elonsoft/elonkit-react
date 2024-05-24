/* eslint-disable @typescript-eslint/ban-types */

export type DeepNonNullableObject<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};

export type DeepNonNullable<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
    ? Array<T[number]>
    : T extends object
      ? DeepNonNullableObject<T>
      : T;
