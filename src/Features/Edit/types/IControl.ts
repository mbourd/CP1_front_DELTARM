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
  | 'file_upload'
  | 'radio'
  | 'checkbox'
  | 'auth_num';

export type ControlFontSize = 'standard' | 'bold';

export interface IApiAnswerChoice {
  choice_id: string;
  choice_lib: string;
  choice_is_ko?: boolean;
}

export interface IComplianceData {
  compliance_elm_desc_1: string | null;
  compliance_elm_desc_2: string | null;
  compliance_elm_family: string | null;
  compliance_elm_lib: string | null;
  compliance_elm_regex: RegExp | null;
  compliance_elm_regex_msg: string | null;
  compliance_elm_type: string | null;
  compliance_elm_value: string | null;
  compliance_id: number;
}

export interface ICompliance {
  compliance_elms: IComplianceData[];
  resolved: boolean | null;
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
  control_family: string;
  control_regex: RegExp;
  control_manage_compliance: boolean;
  control_manage_compliance_lib: string | null;
  compliance: ICompliance;
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
  family: string;
  regex: RegExp;
  manageCompliance: boolean;
  manageComplianceLib: string | null;
  compliance?: ICompliance;
}
