import { IButtons } from '../../DashboardDynamic/components/types';
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
  content: IElementModal[] | IElementPModal[];
  btn: IButtons[];
}

interface IElementPModal {
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

interface IElementModal {
  element: 'input' | 'select';
  attribute: {
    type: string;
    id: string;
    placeholder: string;
    mandatory: boolean;
    multiline: boolean;
    multilineRows: number | null;
    option?: ISelectData[];
  };
  value: string | null;
}
interface ITableModale {}
