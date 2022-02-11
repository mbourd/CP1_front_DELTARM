export const between = (
  x: string | number | null,
  min: string | number,
  max: string | number,
): boolean => {
  if (!x) {
    return false;
  }

  return x >= min && x < max;
};
