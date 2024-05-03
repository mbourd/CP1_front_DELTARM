import { BigNumber } from 'bignumber.js';

export function formatDecimalDigit(number, decimalDigits: number) {
  const bigNumber = new BigNumber(number);
  const formattedNumber = bigNumber.toFixed(decimalDigits);

  return formattedNumber;
}
