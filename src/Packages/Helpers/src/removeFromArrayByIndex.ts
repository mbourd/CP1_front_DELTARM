export const removeFromArrayByIndex = (values: unknown[], index: number): unknown[] => {
  if (-1 < index) {
    values.splice(index, 1);
  }

  return values;
};
