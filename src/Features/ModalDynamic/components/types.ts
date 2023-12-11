import {
  IActionButton,
  IButtons,
} from '../../DashboardDynamic/components/types';
import { ISelectData } from '../../../Packages/Design/components';
import React, { SetStateAction } from 'react';

export interface IDataModalProps {
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
  data?: IDataModal;
}

export interface IDataModal {
  target: 'modal';
  title: string;
  subtitle: string | null;
  img: string | null;
  content: IElementModal[] | IElementPModal[] | IElementTableModal[];
  btn: IButtons[];
}

export interface IElementPModal {
  element: 'p';
  attribute: {
    type: string;
    id: string;
    placeholder: string;
    mandatory: boolean;
    multiline: boolean;
    multilineRows: number | null;
    option?: ISelectData[];
  } | null;
  value: string | null;
}

export interface IElementModal {
  element: 'input' | 'select' | 'p' | 'table';
  attribute: {
    type: string;
    id: string;
    placeholder: string;
    mandatory: boolean;
    multiline: boolean;
    multilineRows: number | null;
    option?: ISelectData[];
  };
  value: ElementTableModalValueType | string | null;
}

export type ElementTableModalValueType = {
  row: ElementTableModalRowType;
};
type ElementTableModalRowType = {
  value: {
    cell: {
      value: ElementTableModalCellType[];
    };
  }[];
};
type ElementTableModalCellType = {
  action: IActionButton | null;
  type: 'text' | 'btn';
  value: string;
  bg_color: string;
  font_color: string;
};

interface IElementTextValueModal {
  cell: {
    value: [ElementTableModalCellType];
  };
}

interface IElementButtonValueModal {
  cell: {
    value: [ElementTableModalCellType];
  };
}

export interface IElementTableModal {
  element: 'table';
  attribute: null;
  value: {
    row: {
      value: IElementButtonValueModal[] | IElementTextValueModal[];
    };
  };
}
