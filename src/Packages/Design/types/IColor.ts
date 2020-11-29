import { INotificationType } from './IMisc';

export interface IColorVariant {
  readonly light: string;
  readonly main: string;
  readonly dark: string;
}

export interface IColor extends Record<keyof INotificationType, IColorVariant> {
  readonly primary: IColorVariant;
  readonly secondary: IColorVariant;
  readonly text: IColorVariant;
  readonly background: IColorVariant;
  readonly white: IColorVariant;
  readonly disabled: IColorVariant;
  readonly icon: IColorVariant;
  readonly hover: IColorVariant;
  readonly active: IColorVariant;
  readonly heading: IColorVariant;
}
