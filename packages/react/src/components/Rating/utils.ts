export function getDecimalPrecision(num: number) {
  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

export function roundValueToPrecision(value: number | null, precision: number) {
  if (value === null) {
    return value;
  }

  const nearest = Math.round(value / precision) * precision;
  return Number(nearest.toFixed(getDecimalPrecision(precision)));
}

export function clamp(
  val: number,
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER
): number {
  return Math.max(min, Math.min(val, max));
}
