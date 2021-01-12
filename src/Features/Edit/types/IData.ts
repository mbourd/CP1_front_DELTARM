import { IAction, IApiAction } from './IAction';
import { IFileItem } from './IFile';
import { IApiCurrentSection, IApiSection, ICurrentSection, ISection } from './ISection';
import { IApiState, IState } from './IState';

export interface IApiData {
  actions: IApiAction[];
  current_section: IApiCurrentSection;
  sections: IApiSection[];
  state: IApiState;
  file: IFileItem[];
  nb_comment: number;
  valid_num?: string;
}

export interface IData {
  actions: IAction[];
  currentSection: ICurrentSection;
  sections: ISection[];
  state: IState;
  file: IFileItem[];
  number: string;
  counterparty: string;
  countComments: number;
  validationCount?: string;
}
