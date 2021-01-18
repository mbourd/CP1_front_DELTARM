import { ISelectData } from 'Shared/components';

export type ControlTypeType =
  | 'text'
  | 'integer'
  | 'decimal'
  | 'financial'
  | 'percent'
  | 'date'
  | 'timestamp'
  | 'selectlist'
  | 'comment'
  | 'radio'
  | 'checkbox'
  | 'auth_num';

export type ControlFontSize = 'standard' | 'bold';

export interface IApiAnswerChoice {
  choice_id: string;
  choice_lib: string;
}

export interface IApiControl {
  control_desc_1: string | null;
  control_desc_2: string | null;
  control_editable: boolean;
  control_id: string;
  control_mandatory: boolean;
  control_previous_value: string | null;
  control_title: string;
  control_type: ControlTypeType;
  control_value: string;
  control_answer_choices?: IApiAnswerChoice[];
  control_font_color?: string;
  control_font_size?: ControlFontSize;
}

export interface IControl {
  desc1: string | null;
  desc2: string | null;
  editable: boolean;
  id: string;
  mandatory: boolean;
  previousValue: string | null;
  title: string;
  type: ControlTypeType;
  value: string;
  answerChoices?: Record<string, ISelectData>;
  fontColor?: string;
  fontSize?: ControlFontSize;
}
