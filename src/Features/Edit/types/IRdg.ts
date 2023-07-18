export interface IRdg {
  choice_options?: Array<any>;
  col_elm_id: number;
  component: string;
  control_editable: boolean;
  control_mandatory: boolean;
  control_options?: Array<any>;
  control_regex: string;
  control_regex_msg: string;
  reference_value?: any;
  row_num: number;
  value: string;
}
