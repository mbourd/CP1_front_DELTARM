import { ITheme } from '../../types';
import {
  BPIBreakpoint,
  BPIColor,
  BPISpacing,
  BPIFont,
  BPIData,
  BPISizing,
} from './variables';

export const BPITheme: ITheme = {
  color: BPIColor,
  sizing: BPISizing,
  spacing: BPISpacing,
  font: BPIFont,
  breakpoint: BPIBreakpoint,
  transition: {
    time: '0.3s',
  },
  data: BPIData,
};
