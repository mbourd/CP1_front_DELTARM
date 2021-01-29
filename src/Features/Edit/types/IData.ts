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

export interface IApiData {
  actions: IApiAction[];
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
  actions: IAction[];
  currentSection: ICurrentSection;
  sections: ISection[];
  state: IState;
  file: IFileItem[];
  number: string;
  contrepartie: string;
  productType: string;
  countComments: number;
  validationCount?: string;
  sectionHeader?: ISectionHeader;
  sectionFooter?: ISectionFooter;
}
