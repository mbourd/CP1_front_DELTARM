import { ISelectData } from 'Shared/components';
import { IColor } from '../../../Packages/Design';
import { RawDraftContentState } from 'draft-js';
import { IApiFileComment, IFileComment } from '../../Comments';
import { AgGridRow } from '../../DashboardDynamic/components/types';
import { CellStyle, CellStyleFunc, IFilterParams } from 'ag-grid-community';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type ControlTypeType =
  | 'text'
  | 'integer'
  | 'decimal'
  | 'financial'
  | 'percent'
  | 'date'
  | 'timestamp'
  | 'select_list'
  | 'comment'
  | 'file_upload'
  | 'radio'
  | 'checkbox'
  | 'multiple_list'
  | 'email'
  | 'auth_num'
  | 'info_block'
  | 'formula'
  | 'long_text'
  | 'time'
  | 'rich_text'
  | 'boolean'
  | 'line_break'
  | 'data_grid'
  | 'ag_data_grid'
  | 'jodit_rich_text'
  | 'slider';

export type ControlFontSize = 'standard' | 'bold';

export interface IApiAnswerChoice {
  choice_id: number;
  choice_lib: string;
  choice_is_ko?: boolean;
  choice_value: number | null;
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

export interface IApiConditional {
  conditional_by_field_id: number;
  conditional_formula: string;
}
export interface IApiComplianceFields {
  compliance_elm_desc_1: string | null;
  compliance_elm_desc_2: string | null;
  compliance_elm_family: string;
  compliance_elm_lib: string;
  compliance_elm_regex: RegExp;
  compliance_elm_regex_msg: string | null;
  compliance_elm_type: ControlTypeType;
  compliance_elm_value: string;
  compliance_id: string;
  compliance_answer_choices?: Record<string, ISelectData>;
  compliance_file_detail: IUploadDetail[] | null;
}

export interface IApiComplianceData {
  compliance_fields: IApiComplianceFields[];
  compliance_modal_title: string | null;
}

export interface ICompliance {
  resolved: boolean | null;
  complianceUncheckColor: keyof IColor;
  complianceCheckColor: keyof IColor;
  complianceLib: string;
  complianceCheckboxResolved: boolean;
  modaleTitle: string;
}

export interface IConditional {
  byField: string;
  formula: string;
  conditionalInitState: boolean;
}

export interface IFormula {
  map: ITranslationFormula[] | null;
  formula: string;
}

export interface ISliderOptions {
  min: number | null;
  max: number | null;
  step: number | null;
  marks: boolean | null;
  color?: string | null;
  disabled?: boolean | null;
  boundaries:
    | {
        value: number;
        label: string;
      }[]
    | null;
}

export interface IDateTimestampOptions {
  min: number | null;
  max: number | null;
}

export interface IPercentOptions {
  min: number | null;
  max: number | null;
  precision: number | null;
}

export interface IDecimalOptions {
  min: number | null;
  max: number | null;
  precision: number | null;
  unit: string | null;
}

export interface IFinancialOptions {
  min: number | null;
  max: number | null;
  precision: number | null;
  unit: string | null;
}

export interface IIntegerOptions {
  min: number | null;
  max: number | null;
  unit: string | null;
}

export interface ITranslationFormula {
  min: number;
  max: number;
  color: string | null;
  lib: string;
}

export interface IControlOptions
  extends IFinancialOptions,
    IIntegerOptions,
    IDateTimestampOptions,
    ISliderOptions,
    IDecimalOptions,
    IPercentOptions {}

export interface IUploadDetail {
  file_id: string | any;
  file_name: string | any;
}

export interface IAPIControlRejectable {
  is_rejected: boolean | null;
  control_reject_comment: IApiFileComment[] | null;
}

export interface ControlRejectable {
  isRejected: boolean | null;
  rejectComments: IFileComment[];
}

export interface DataGridDetail {
  columns: {
    key: string;
    name: string;
    width?: string | number;
    resizable: boolean;
  }[];
  rows: DataGridDetailsRows[];
}

export interface IDataGridAgGridCol {
  border_right: boolean;
  field: string;
  headerName: string;
  width: number;
  cellStyle: CellStyle | CellStyleFunc | undefined;
  comparator:
    | 'StringComparator'
    | ((
        valueA: any,
        valueB: any,
        nodeA: any,
        nodeB: any,
        isInverted: boolean,
      ) => 0 | 1 | -1);
  filter:
    | 'StringFilter'
    | ForwardRefExoticComponent<IFilterParams & RefAttributes<unknown>>;
}

export interface DataGridDetailAgGrid {
  cols: {
    values: IDataGridAgGridCol[];
    header_visible: boolean;
  };
  lines: AgGridRow[];
}

export interface DataGridDetailsRows {
  [key: string]: {
    component: DataGridComponent;
    value: string;
    upload_detail: IUploadDetail[] | null;
    col_elm_id: number;
    row_num: number;
    control_editable: boolean;
    control_mandatory: boolean;
    control_regex: RegExp | null;
    control_regex_msg: string | null;
    answer_choices: Record<string, ISelectData> | null;
  };
}

export type DataGridComponent =
  | 'integer'
  | 'select_list'
  | 'file_upload'
  | 'boolean'
  | 'text'
  | 'delete'
  | 'financial'
  | 'decimal'
  | 'long_text'
  | 'percent';

export interface IApiControl {
  control_desc_1: string | null;
  control_desc_2: string | null;
  control_editable: boolean;
  editable?: boolean;
  control_conditional: boolean;
  control_id: string;
  control_mandatory: boolean;
  mandatory: boolean;
  control_previous_value: string | null;
  control_title: string;
  control_type: ControlTypeType;
  control_value: string | null;
  control_answer_choices?: IApiAnswerChoice[];
  answerChoices?: Record<string, ISelectData>;
  control_font_color?: string;
  control_font_size?: ControlFontSize;
  control_family: string;
  control_regex: RegExp | null;
  control_regex_msg: string | null;
  control_manage_compliance: boolean;
  control_pg_base_type?: string | null;
  conditional?: IApiConditional | any;
  compliance?: IApiCompliance;
  formula?: IFormula;
  useCompliance?: ICompliance;
  control_options: IControlOptions | null;
  upload_detail: IUploadDetail[] | null;
  calculatedValue?: string;
  rich_text_detail: RawDraftContentState | null;
  jodit_rich_text_detail?: string | null;
  control_rejectable: IAPIControlRejectable | null;
  useRejection?: ControlRejectable;
  data_grid_detail_ag_grid?: DataGridDetailAgGrid | null;
  data_grid_detail?: DataGridDetail | null;
}
