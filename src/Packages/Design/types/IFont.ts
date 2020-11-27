import { INotificationType } from './IMisc';

export interface IFontVariant {
  readonly main: string;
  readonly italic: string;
}

export interface IFontPalette {
  readonly thin: IFontVariant;
  readonly extraLight: IFontVariant;
  readonly light: IFontVariant;
  readonly regular: IFontVariant;
  readonly medium: IFontVariant;
  readonly semiBold: IFontVariant;
  readonly bold: IFontVariant;
  readonly extraBold: IFontVariant;
}

export interface IFont extends Record<keyof INotificationType, IFontVariant> {
  readonly thin: IFontVariant;
  readonly extraLight: IFontVariant;
  readonly light: IFontVariant;
  readonly regular: IFontVariant;
  readonly medium: IFontVariant;
  readonly semiBold: IFontVariant;
  readonly bold: IFontVariant;
  readonly extraBold: IFontVariant;
  readonly primary: IFontVariant;
  readonly secondary: IFontVariant;
  readonly formLabel: IFontVariant;
  readonly formError: IFontVariant;
  readonly text: IFontVariant;
  readonly heading: IFontVariant;
}
