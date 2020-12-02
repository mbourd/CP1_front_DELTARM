import { IAction, IApiAction } from './IAction';
import { IApiCurrentSection, IApiSection, ICurrentSection, ISection } from './ISection';

export interface IApiData {
  actions: IApiAction[];
  current_section: IApiCurrentSection;
  sections: IApiSection[];
}

export interface IData {
  actions: IAction[];
  currentSection: ICurrentSection;
  sections: ISection[];
}
