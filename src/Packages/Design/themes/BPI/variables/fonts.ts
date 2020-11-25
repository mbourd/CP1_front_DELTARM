import { IFont, IFontPalette } from '../../../types';

const fontFallback = `arial, sans-serif`;

export const BPIFontPalette: IFontPalette = {
  thin: {
    main: `'HelveticaNeue Thin', ${fontFallback}`,
    italic: `'HelveticaNeue Thin Italic', ${fontFallback}`,
  },
  extraLight: {
    main: `'HelveticaNeue Extra Light', ${fontFallback}`,
    italic: `'HelveticaNeue Extra Light Italic', ${fontFallback}`,
  },
  light: {
    main: `'HelveticaNeue Light', ${fontFallback}`,
    italic: `'HelveticaNeue Light Italic', ${fontFallback}`,
  },
  regular: {
    main: `'HelveticaNeue Regular', ${fontFallback}`,
    italic: `'HelveticaNeue Regular Italic', ${fontFallback}`,
  },
  medium: {
    main: `'HelveticaNeue Medium', ${fontFallback}`,
    italic: `'HelveticaNeue Medium Italic', ${fontFallback}`,
  },
  semiBold: {
    main: `'HelveticaNeue Semi Bold', ${fontFallback}`,
    italic: `'HelveticaNeue Semi Bold Italic', ${fontFallback}`,
  },
  bold: {
    main: `'HelveticaNeue Bold', ${fontFallback}`,
    italic: `'HelveticaNeue Bold Italic', ${fontFallback}`,
  },
  extraBold: {
    main: `'HelveticaNeue Extra Bold', ${fontFallback}`,
    italic: `'HelveticaNeue Extra Bold Italic', ${fontFallback}`,
  },
};

export const BPIFont: IFont = {
  bold: BPIFontPalette.bold,
  extraBold: BPIFontPalette.extraBold,
  extraLight: BPIFontPalette.extraLight,
  light: BPIFontPalette.light,
  medium: BPIFontPalette.medium,
  regular: BPIFontPalette.regular,
  semiBold: BPIFontPalette.semiBold,
  thin: BPIFontPalette.thin,
  primary: BPIFontPalette.regular,
  secondary: BPIFontPalette.regular,
  text: BPIFontPalette.regular,
  heading: BPIFontPalette.bold,
  formLabel: BPIFontPalette.medium,
  success: BPIFontPalette.light,
  warning: BPIFontPalette.light,
  info: BPIFontPalette.light,
  error: BPIFontPalette.light,
};
