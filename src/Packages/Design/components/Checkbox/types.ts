import React from 'react';
import { ISelectData } from '../Select';
import { IColor } from '../../types';

export interface ICheckboxWrapper {
  name: string;
  data: Record<string, ISelectData>;
  multiple?: boolean;
  selectedValues?: Record<string, true>;
  error?: boolean;
  choiceIsKo?: boolean;
  setChoiceIsKo?: React.Dispatch<React.SetStateAction<boolean>>;
  onChange?: (
    selectedValues: Record<string, true>,
    name?: string,
    data?: ISelectData | undefined,
  ) => void;
  onInit?: (
    selectedValues: Record<string, true>,
    name?: string,
    data?: ISelectData | undefined,
  ) => void;
  onOpen?: (
    selectedValues: Record<string, true>,
    name?: string,
    data?: ISelectData | undefined,
  ) => void;
  onClose?: (
    selectedValues: Record<string, true>,
    name?: string,
    data?: ISelectData | undefined,
  ) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  disabled?: boolean;
}

export interface ICheckboxContext {
  name: string;
  data: Record<string, ISelectData>;
  multiple?: boolean;
  selectedValues?: Record<string, true>;
  onChange?: (input: HTMLInputElement, value: ISelectData) => void;
  disabled?: boolean;
}

export interface ICheckboxLabel {
  color?: keyof IColor;
  bdc?: keyof IColor;
  bgc?: keyof IColor;
  bdr?: string;
  onClick?: () => void;
  isOpen?: boolean;
  isDisabled?: boolean;
  containerBdc?: keyof IColor;
}

export interface ICheckboxData {
  id: string;
  label?: NonNullable<React.ReactNode>;
  value?: string;
  order?: string;
  key?: string;
  isKo?: boolean;
}
