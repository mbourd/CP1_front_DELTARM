export const toCamelCase = (text: string): string =>
  text
    .replace(/\./g, ' ')
    .replace(/\s(.)/g, ($1) => $1.toUpperCase())
    .replace(/-(.)/g, ($1) => $1.toUpperCase())
    .replace(/\s/g, '')
    .replace(/-/g, '')
    .replace(/^(.)/, ($1) => $1.toLowerCase());
