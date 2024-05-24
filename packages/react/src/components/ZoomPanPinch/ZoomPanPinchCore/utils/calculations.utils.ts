export const roundNumber = (num: number, decimal: number) => {
  return Number(num.toFixed(decimal));
};

export const checkIsNumber = (num: any, defaultValue: number) => {
  return typeof num === 'number' ? num : defaultValue;
};
