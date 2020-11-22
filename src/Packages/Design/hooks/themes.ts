import { useTheme as useThemeStyled } from 'styled-components/macro';
import { IBreakpoint, IColor, IFont, IFontPalette, ILogo, ISpacing } from '../types';
import { getThemeData } from '../helpers';

export const useTheme = (key?: string) => {
  const theme = useThemeStyled();

  // @ts-ignore
  return key ? theme[key] : theme;
};

export const useThemeData = <T>(key?: string): T => {
  return getThemeData<T>(key);
};

export const useColor = (): IColor => {
  return useTheme('color');
};

export const useBreakpoint = (): IBreakpoint => {
  return useTheme('breakpoint');
};

export const useLogo = (): ILogo => {
  return useTheme('logo');
};

export const useIcon = (): ILogo => {
  return useTheme('icon');
};

export const useSpacing = (): ISpacing => {
  return useTheme('spacing');
};

export const useFont = (): IFont => {
  const { font } = useTheme('typography');

  return font;
};

export const useFontPalette = (): IFontPalette => {
  const { palette } = useTheme('typography');

  return palette;
};

export const useFontSize = (): IFontPalette => {
  const { size } = useTheme('typography');

  return size;
};
