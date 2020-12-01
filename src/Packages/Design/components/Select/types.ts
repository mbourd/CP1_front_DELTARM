import React from 'react';
import { IColor } from '../../types';

// export interface ISelectHeader {}

// export interface ISelectFooter {}

export interface ISelectData {
  id: string;
  label: NonNullable<React.ReactNode>;
  value?: string;
}

// export interface ISelectBody {
//   color?: keyof IColor;
//   selectedColor?: keyof IColor;
//   data: ISelectData[];
// }

export interface ISelectLabel {
  color?: keyof IColor;
  bdc?: keyof IColor;
  bgc?: keyof IColor;
  bdr?: string;
  onClick?: () => void;
  isOpen?: boolean;
  containerBdc?: keyof IColor;
}

export interface ISelect {
  name: string;
  data: Record<string, ISelectData>;
  multiple?: boolean;
  selectedValues?: Record<string, true>;

  labelColor?: keyof IColor;
  /**
   * Label border color
   */
  labelBdc?: keyof IColor;
  /**
   * Label background color
   */
  labelBgc?: keyof IColor;
  /**
   * Label border radius
   */
  labelBdr?: string;
  label?: NonNullable<React.ReactNode>;

  /**
   * Item color
   */
  // color?: keyof IColor;
  /**
   * Item selected color
   */
  // selectedColor?: keyof IColor;
  /**
   * Item background color
   */
  // itemBgc?: keyof IColor;
  /**
   * Item border color
   */
  // itemBdc?: keyof IColor;

  open?: boolean;
  /**
   * Border color
   */
  bdc?: keyof IColor;
  /**
   * Border radius
   */
  bdr?: string;

  onInit?: (selectedValues: Record<string, true>) => void;
  onOpen?: (selectedValues: Record<string, true>) => void;
  onClose?: (selectedValues: Record<string, true>) => void;
}

export interface ISelectContext {
  name: string;
  data: Record<string, ISelectData>;
  multiple?: boolean;
  selectedValues?: Record<string, true>;
  onChange?: (input: HTMLInputElement, value: ISelectData) => void;
}
