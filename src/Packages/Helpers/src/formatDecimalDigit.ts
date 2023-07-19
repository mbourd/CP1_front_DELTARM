export const formatDecimalDigit = (num: any, decimal_digit: any): string => {
  return (Math.round(num * 100) / 100).toFixed(parseInt(decimal_digit));
};
