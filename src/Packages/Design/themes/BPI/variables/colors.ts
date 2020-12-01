import { IColor } from '../../../types';
import { color } from '../../../variables';

export const BPIColor: IColor = {
  ...color,
  primary: {
    light: '#faaf0b',
    main: '#FFCD00',
    dark: '#e7ab00',
  },
  secondary: {
    light: '#5E514D',
    main: '#5E514D',
    dark: '#5E514D',
  },
  text: {
    light: '#ffffff',
    main: '#333333',
    dark: '#000000',
  },
  background: {
    light: '#F4F7F6',
    main: '#F0F8F7',
    dark: '#F4F7F6',
  },
  icon: {
    light: '#5E514D',
    main: '#5E514D',
    dark: '#5E514D',
  },
  active: {
    light: '#faaf0b',
    main: '#faaf0b',
    dark: '#faaf0b',
  },
  hover: {
    light: 'rgba(255, 205, 0, 0.1)',
    main: '#FFCD00',
    dark: '#FFCD00',
  },
  heading: {
    light: '#ffffff',
    main: '#333333',
    dark: '#000000',
  },
};
