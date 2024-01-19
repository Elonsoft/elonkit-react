export default function isValueSelected(value: string, candidate: string | string[] | undefined) {
  if (Array.isArray(candidate)) {
    return candidate.indexOf(value) >= 0;
  }

  return value === candidate;
}
