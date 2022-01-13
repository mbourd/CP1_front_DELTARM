export const between = (
  x: string | number | null,
  min: string | number,
  max: string | number,
) => {
  if (!x) {
    x = 0;
  }

  return x >= min && x <= max;
};
