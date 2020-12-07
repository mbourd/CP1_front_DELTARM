export const randomColor = (): string =>
  `#${'0123456789abcdef'
    .split('')
    .map((v, i, a) => (5 < i ? null : a[Math.floor(Math.random() * 16)]))
    .join('')
    .toLowerCase()}`;
