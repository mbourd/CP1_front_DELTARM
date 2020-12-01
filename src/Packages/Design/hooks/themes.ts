import { useTheme as useThemeStyled } from 'styled-components/macro';
import { IBreakpoint, IColor, IFont, ILogo, ISizing, ISpacing } from '../types';
import { getThemeData } from '../helpers';

export const useTheme = (key?: string) => {
  const theme = useThemeStyled();

  // @ts-ignore
  return key ? theme[key] : theme;
};

export const useColor = (): IColor => {
  return useTheme('color');
};

export const useSizing = (): ISizing => {
  return useTheme('sizing');
};

export const useSpacing = (): ISpacing => {
  return useTheme('spacing');
};

export const useFont = (): IFont => {
  const { font } = useTheme('font');

  return font;
};

export const useBreakpoint = (): IBreakpoint => {
  return useTheme('breakpoint');
};

export const useLogo = (): ILogo => {
  return useTheme('logo');
};

export const useThemeData = <T>(key?: string): T => {
  return getThemeData<T>(key);
};
