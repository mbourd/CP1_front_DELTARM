export const checkIfSameValues = (value: any, currentValue: any): boolean => {
  if (!value && !currentValue) {
    return false;
  }

  if (value === currentValue) {
    return false;
  }

  return true;
};
