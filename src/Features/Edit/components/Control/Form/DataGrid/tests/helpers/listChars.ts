import { _getRandomNumberBetween } from '../../../../../../../../../cypress/utils';

export function listChars(c?: string | number): (length: number) => string {
  let result = '';
  const chars =
    typeof c === 'string' || c === undefined
      ? c === undefined
        ? ''
        : c
      : Array.from({ length: c + 1 }, (_, i) =>
          String.fromCodePoint(i + 14),
        ).join('');
  const characters =
    chars === ''
      ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-+*/.=)àçç_è-(\'"é&]@^\\`|[{#~¨$£¤ù%*µ!§/:;,?<²>'
      : chars;
  // const charactersSplit = characters.match(/.{1}/gu);
  const charactersSplit = [...characters];

  return (length: number): string => {
    let counter = 0;
    while (counter < length) {
      result +=
        charactersSplit[_getRandomNumberBetween(0, charactersSplit.length - 1)];
      counter += 1;
    }

    return result;
  };
}
