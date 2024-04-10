import React from 'react';
import { IColor, INotificationType } from 'Styles';

export interface IInputBase {
  /**
   * Border width.
   */
  border?: number;

  /**
   * Background color.
   */
  bgc?: string;

  /**
   * Color from theme.color like 'primary', 'secondary', 'text', ...
   */
  color?: Exclude<keyof IColor, keyof INotificationType>;
  /**
   * Set border radius value in pixel.
   */
  bdr?: string;

  /**
   * Input status like 'success', 'error', ...
   */
  status?: keyof INotificationType;

  /**
   * Left icon.
   */
  icon?: false | React.ReactNode | any;

  /**
   * Input name.
   */
  name?: string;

  /**
   * Input auto focus.
   */
  autoFocus?: boolean;
  multiline?: boolean;
  multilineRows?: number;

  /**
   * Input default value.
   */
  defaultValue?: string;

  /**
   * Disable input.
   */
  disabled?: boolean;

  /**
   * Id of input.
   */
  id?: string;

  /**
   * Input change value callback.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;

  /**
   * Input placeholder.
   */
  placeholder?: string;

  /**
   * Set true value to get read only input.
   */
  readOnly?: boolean;

  /**
   * Set true value to make input value required.
   */
  required?: boolean;

  /**
   * Type of input, like 'text' 'password', 'email' ...
   */
  type?: string;

  /**
   * Input value.
   */
  value?: string;

  /**
   * Additional classes.
   */
  className?: string;

  /**
   * Additional classes.
   */
  unit?: string | null;

  /**
   * Input ref.
   */
  inputRef?: any;

  InputProps?: any;
  fullWidth?: boolean;
  selectAllOnClick?: boolean;
  onClick?: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  fontFamily?: string;
  fontSize?: string;
  style?: React.CSSProperties;
}
