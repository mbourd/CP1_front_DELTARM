import { IColor } from './IColor';
import { ISpacing } from './ISpacing';
import { IFont } from './IFont';
import { IBreakpoint } from './IBreakpoint';
import { ILogo } from './ILogo';
import { IData } from './IData';
import { ISizing } from './ISizing';
import { ITransition } from './ITransition';

export interface ITheme {
  readonly color: IColor;
  readonly sizing: ISizing;
  readonly spacing: ISpacing;
  readonly font: IFont;
  readonly breakpoint: IBreakpoint;
  readonly logo: ILogo;
  readonly transition: ITransition;
  data: IData;
  readonly getData: <T>(key?: string) => T;
  readonly get: <T>(key?: string) => T;
}
