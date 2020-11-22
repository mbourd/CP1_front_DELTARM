export const ellipsis = (text: string, count = 12): string =>
  text.length > count ? `${text.substring(0, count)}...` : text;
