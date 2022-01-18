export const between = (
  x: string | number | null,
  min: string | number,
  max: string | number,
) => {
  if (!x) {
    return false;
  }

  return x >= min && x < max;
};
