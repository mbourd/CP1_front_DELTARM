import { IColor } from './IColor';
import { ISpacing } from './ISpacing';
import { IFont } from './IFont';
import { IBreakpoint } from './IBreakpoint';
import { IData } from './IData';
import { ISizing } from './ISizing';
import { ITransition } from './ITransition';

export interface ITheme {
  readonly color: IColor;
  readonly sizing: ISizing;
  readonly spacing: ISpacing;
  readonly font: IFont;
  readonly breakpoint: IBreakpoint;
  readonly transition: ITransition;
  data: IData;
}
