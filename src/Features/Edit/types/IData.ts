import { IAction, IApiAction } from './IAction';
import { IFileItem } from './IFile';
import { IApiFileInfo } from './IFileInfo';
import {
  IApiCurrentSection,
  IApiSection,
  IApiSectionHeader,
  ICurrentSection,
  ISection,
  ISectionHeader,
  IApiSectionFooter,
  ISectionFooter,
} from './ISection';
import { IApiState, IState } from './IState';
import { IButtons } from '../../DashboardDynamic/components/types';

export interface IApiData {
  route_front: string;
  target: 'main';
  data: IApiDataEdit;
}

export interface IApiDataEdit {
  actions?: IApiAction[];
  actions_contr_perm?: IButtons[];
  current_section: IApiCurrentSection;
  sections: IApiSection[];
  state: IApiState;
  file: IFileItem[];
  file_info: IApiFileInfo;
  nb_comment: number;
  valid_num?: string;
  section_header?: IApiSectionHeader;
  section_footer?: IApiSectionFooter;
}

export interface IData {
  actions?: IAction[];
  actions_contr_perm?: IButtons[];
  currentSection: ICurrentSection;
  sections: ISection[];
  state: IState;
  file: IFileItem[];
  number: string | null;
  contrepartie: string | null;
  productType: string;
  countComments: number;
  validationCount?: string;
  sectionHeader?: ISectionHeader;
  sectionFooter?: ISectionFooter;
  title: string | null;
}
