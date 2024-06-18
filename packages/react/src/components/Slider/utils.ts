import { isHostComponent } from '@mui/base/utils';

export const shouldSpreadAdditionalProps = (Slot: React.ElementType<any, keyof React.JSX.IntrinsicElements>) => {
  return !Slot || !isHostComponent(Slot);
};

export function slotShouldForwardProp(prop: string) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}

type ItemComparer<Item> = (a: Item, b: Item) => boolean;

export function areArraysEqual<Item>(
  array1: ReadonlyArray<Item>,
  array2: ReadonlyArray<Item>,
  itemComparer: ItemComparer<Item> = (a, b) => a === b
) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

export type EventHandlers = Record<string, React.EventHandler<any>>;

export function extractEventHandlers(
  object: Record<string, any> | undefined,
  excludeKeys: string[] = []
): EventHandlers {
  if (object === undefined) {
    return {};
  }

  const result: EventHandlers = {};

  Object.keys(object)
    .filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop))
    .forEach((prop) => {
      result[prop] = object[prop];
    });

  return result;
}
