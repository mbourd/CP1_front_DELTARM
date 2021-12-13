import { IButtons } from '../../DashboardDynamic/components/types';
import { ISelectData } from '../../../Packages/Design/components';
import React, { SetStateAction } from 'react';

export interface IDataModalProps {
  setOpenCloseModal: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
  data?: IDataModal;
}

export interface IDataModal {
  target: 'modal';
  title: string;
  subtitle: string | null;
  img: string | null;
  content: IElementModal[];
  btn: IButtons[];
}

interface IElementModal {
  element: 'p' | 'input' | 'select';
  attribute: {
    type: string;
    id: string;
    placeholder: string;
    mandatory: boolean;
    multiline: boolean;
    multilineRows: number | null;
    option?: Record<string, ISelectData>;
  } | null;
  value: string | null;
}
interface ITableModale {}
