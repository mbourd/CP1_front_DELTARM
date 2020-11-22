import { ITheme } from '../../types';
import { BPIBreakpoint, BPIColor, BPILogo, BPISpacing, BPIFont, BPIData, BPISizing } from './variables';
import { getThemeData, getFromTheme } from '../../helpers';

export const BPITheme: ITheme = {
  color: BPIColor,
  sizing: BPISizing,
  spacing: BPISpacing,
  font: BPIFont,
  breakpoint: BPIBreakpoint,
  logo: BPILogo,
  transition: {
    time: '0.3s',
  },
  data: BPIData,
  getData: getThemeData,
  get: getFromTheme,
};
