import RandExp from 'randexp';

export function generateRandExp<T = string>(regex: RegExp, max?: number): T {
  const reg = new RandExp(regex);

  if (max) reg.max = max;

  let randExp = reg.gen();
  while (randExp === '' || !regex.test(randExp)) randExp = reg.gen();

  return randExp as T;
}
