import { IChapter, IApiChapter } from './IChapter';

export interface IApiSection {
  section_id: string;
  section_lib: string;
  section_locked: boolean;
  section_hint?: string | null;
  stage_code: string;
}

export interface ISection {
  id: string;
  code: string;
  label: string;
  locked: boolean;
  tooltip?: string;
}

export interface IApiCurrentSection {
  section_id: string;
  chapters: IApiChapter[];
}

export interface ICurrentSection {
  id: string;
  chapters: IChapter[];
}

export type ISectionHeaderType = 'alert' | 'info';

export interface IApiSectionHeader {
  header_message: string | null;
  header_type: ISectionHeaderType | null;
}

export interface ISectionHeader {
  message: string;
  type: ISectionHeaderType;
}

export interface IApiSectionFooter {
  footer_message?: string | null;
}

export interface ISectionFooter {
  message: string;
}
