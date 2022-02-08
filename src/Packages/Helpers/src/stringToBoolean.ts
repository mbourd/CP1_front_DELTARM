export const stringToBoolean = (value: string | null): boolean => {
  if (value !== ('true' || 'false')) {
    return false;
  }

  return value
    ? JSON.parse(value?.toLowerCase())
      ? JSON.parse(value?.toLowerCase())
      : false
    : false;
};
