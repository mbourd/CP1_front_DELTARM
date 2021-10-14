import { ISelectData } from 'Shared/components';
import { IColor } from "../../../Packages/Design";

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
  | 'multiple_list'
  | 'radio'
  | 'checkbox'
  | 'email'
  | 'auth_num'
  | 'info_block';

export type ControlFontSize = 'standard' | 'bold';

export interface IApiAnswerChoice {
  choice_id: string;
  choice_lib: string;
  choice_is_ko?: boolean;
}

export interface IApiCompliance {
  compliance_elms: IApiComplianceData[];
  compliance_resolved: boolean | null;
  compliance_uncheck_color: keyof IColor;
  compliance_check_color: keyof IColor;
  compliance_lib: string;
  compliance_checkbox_resolved: boolean;
  compliance_modale_title: string;
}

export interface IApiComplianceData {
  compliance_elm_desc_1: string | null;
  compliance_elm_desc_2: string | null;
  compliance_elm_family: string;
  compliance_elm_lib: string;
  compliance_elm_regex: RegExp;
  compliance_elm_regex_msg: string | null;
  compliance_elm_type: ControlTypeType;
  compliance_elm_value: string;
  compliance_id: string;
}

export interface IComplianceData {
  desc1: string | null;
  desc2: string | null;
  family: string;
  id: string;
  lib: string;
  regex: RegExp;
  regexMsg: string | null;
  type: ControlTypeType;
  value: string;
  answerChoices?: Record<string, ISelectData>;
}

export interface ICompliance {
  resolved: boolean | null;
  complianceUncheckColor: keyof IColor;
  complianceCheckColor: keyof IColor;
  complianceLib: string;
  complianceCheckboxResolved: boolean;
  modaleTitle: string;
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
  control_regex_msg: string;
  control_manage_compliance: boolean;
  compliance: IApiCompliance;
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
  regexMsg: string;
  manageCompliance: boolean;
  compliance?: ICompliance;
}
