export const kFormatter: any = (num: any) => {
  if (num !== null || undefined) {
    return num?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return '';
  }
};
