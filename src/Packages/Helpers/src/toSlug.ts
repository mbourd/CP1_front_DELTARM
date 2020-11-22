export const toSlug = (text: string): string =>
  text
    .replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
    .toLowerCase()
    .trim()
    .replace(/[\u00C0-\u00C5]/gi, 'a')
    .replace(/[\u00C8-\u00CB]/gi, 'e')
    .replace(/[\u00CC-\u00CF]/gi, 'i')
    .replace(/[\u00D2-\u00D6]/gi, 'o')
    .replace(/[\u00D9-\u00DC]/gi, 'u')
    .replace(/[\u00D1]/gi, 'n')
    .replace(/[ .]+/g, '-')
    .replace(/[^a-z0-9-]+/gi, '')
    .replace(/[-]{2,}/g, '-')
    .replace(/^-|-$/, '');
