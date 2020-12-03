import { IChapter, IApiChapter } from './IChapter';

export interface IApiSection {
  section_id: string;
  section_lib: string;
  section_locked: boolean;
  stage_code: string;
}

export interface ISection {
  id: string;
  code: string;
  label: string;
  locked: boolean;
}

export interface IApiCurrentSection {
  section_id: string;
  chapters: IApiChapter[];
}

export interface ICurrentSection {
  id: string;
  chapters: IChapter[];
}
