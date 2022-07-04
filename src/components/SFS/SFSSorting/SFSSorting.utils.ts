import { IDirection } from './SFSSorting.types';

export const nextSortDirection = new Map<IDirection, 'asc' | 'desc'>([
  [null, 'asc'],
  ['asc', 'desc'],
  ['desc', 'asc']
]);

export const vibrateDevice = () => window.navigator?.vibrate(200);
