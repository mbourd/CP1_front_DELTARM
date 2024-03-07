export function kFormatter(num: string): string {
  if (num) return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return '';
}
