import { IApiControl, IControl } from './IControl';

export interface IApiChapter {
  chap_lib: string;
  chap_num: string;
  controls: IApiControl[];
}

export interface IChapter {
  label: string;
  id: string;
  controls: IControl[];
}
