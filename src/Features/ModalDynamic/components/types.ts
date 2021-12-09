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
  element: 'string';
  attribute: {
    type: string | null;
    id: string;
    placeholder: string;
  } | null;
  value: string | null;
}
interface ISelectModal {}
interface ITableModale {}
