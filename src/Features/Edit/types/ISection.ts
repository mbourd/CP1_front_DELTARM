import { IChapter, IApiChapter } from './IChapter';

export interface IApiSection {
  section_id: string;
  section_lib: string;
  section_locked: boolean;
  section_num: string;
}

export interface ISection {
  id: string;
  label: string;
  locked: boolean;
}

export interface IApiCurrentSection {
  section_num: string;
  chapters: IApiChapter[];
}

export interface ICurrentSection {
  id: string;
  chapters: IChapter[];
}
