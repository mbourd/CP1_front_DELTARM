import { IButtons } from '../../DashboardDynamic/components/types';

export interface IDataModalProps {
  onClose: () => void;
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
  element: 'p' | 'input';
  attribute: {
    type: string;
    id: string;
    placeholder: string;
    mandatory: boolean;
    value: string;
  } | null;
  value: string | null;
}
interface ISelectModal {}
interface ITableModale {}
