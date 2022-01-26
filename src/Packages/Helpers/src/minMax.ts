export const minMax = (
  x: string | number | null,
  min: string | number | null,
  max: string | number | null,
): boolean => {
  if (!x) {
    return false;
  }

  if (min && !max) {
    return x >= min;
  }

  if (!min && max) {
    return x <= max;
  }

  if (min && max) {
    return x >= min && x <= max;
  }

  return false;
};
