import { IAction, IApiAction } from './IAction';
import { IApiCurrentSection, IApiSection, ICurrentSection, ISection } from './ISection';
import { IApiState, IState } from './IState';

export interface IApiData {
  actions: IApiAction[];
  current_section: IApiCurrentSection;
  sections: IApiSection[];
  state: IApiState;
}

export interface IData {
  actions: IAction[];
  currentSection: ICurrentSection;
  sections: ISection[];
  state: IState;
}
