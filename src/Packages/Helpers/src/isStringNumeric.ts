export const isStringNumeric = (input: string): boolean => {
  // Use a regular expression to check if the string is numeric
  return /^-?\d+(\.\d+)?$/.test(input);
};
