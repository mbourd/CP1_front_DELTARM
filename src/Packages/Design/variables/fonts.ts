import { IFont, IFontPalette } from '../types';

const fontFallback = `arial, sans-serif`;

export const fontVariant: IFontPalette = {
  thin: {
    main: `'Montserrat Thin', ${fontFallback}`,
    italic: `'Montserrat Thin Italic', ${fontFallback}`,
  },
  extraLight: {
    main: `'Montserrat Extra Light', ${fontFallback}`,
    italic: `'Montserrat Extra Light Italic', ${fontFallback}`,
  },
  light: {
    main: `'Montserrat Light', ${fontFallback}`,
    italic: `'Montserrat Light Italic', ${fontFallback}`,
  },
  regular: {
    main: `'Montserrat Regular', ${fontFallback}`,
    italic: `'Montserrat Regular Italic', ${fontFallback}`,
  },
  medium: {
    main: `'Montserrat Medium', ${fontFallback}`,
    italic: `'Montserrat Medium Italic', ${fontFallback}`,
  },
  semiBold: {
    main: `'Montserrat Semi Bold', ${fontFallback}`,
    italic: `'Montserrat Semi Bold Italic', ${fontFallback}`,
  },
  bold: {
    main: `'Montserrat Bold', ${fontFallback}`,
    italic: `'Montserrat Bold Italic', ${fontFallback}`,
  },
  extraBold: {
    main: `'Montserrat Extra Bold', ${fontFallback}`,
    italic: `'Montserrat Extra Bold Italic', ${fontFallback}`,
  },
};

export const font: IFont = {
  bold: fontVariant.bold,
  extraBold: fontVariant.extraBold,
  extraLight: fontVariant.extraLight,
  light: fontVariant.light,
  medium: fontVariant.medium,
  regular: fontVariant.regular,
  semiBold: fontVariant.semiBold,
  thin: fontVariant.thin,
  primary: fontVariant.regular,
  secondary: fontVariant.regular,
  text: fontVariant.regular,
  heading: fontVariant.bold,
  formLabel: fontVariant.medium,
  formError: fontVariant.regular,
  success: fontVariant.light,
  warning: fontVariant.light,
  info: fontVariant.light,
  error: fontVariant.light,
};
