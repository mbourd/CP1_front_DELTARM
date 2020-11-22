import { ITheme } from '../types';
import { breakpoint, color, logo, sizing, spacing, font } from '../variables';
import { getThemeData, getFromTheme } from '../helpers';

export const theme: ITheme = {
  color,
  sizing,
  spacing,
  font,
  breakpoint,
  logo,
  transition: {
    time: '0.3s',
  },
  data: {},
  getData: getThemeData,
  get: getFromTheme,
};
