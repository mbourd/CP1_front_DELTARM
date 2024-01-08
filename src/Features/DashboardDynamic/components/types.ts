import { SvgIconComponent } from '@mui/icons-material';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { CellStyle, CellStyleFunc, IFilterParams } from 'ag-grid-community';
import {
  DataGridDetailsColumnType,
  DataGridDetailsRowsCell,
} from 'Features/Edit/types';

export interface IButtons {
  bg_color: string;
  font_color: string;
  hover_color: string;
  btn_lib: string;
  action: IActionButton;
}
export interface IAgGridCol {
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

export interface IActionButton {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'CANCEL';
  endpoint: string;
  params: Record<string, string> | null;
}
interface ICardIcon {
  color: string;
  ref: SvgIconComponent;
  size: number;
}

interface ICardValueItem extends DataGridDetailsRowsCell {
  action: IActionButton | null;
  content: string | null;
  hint: string | null;
  icon: ICardIcon | null;
  border_right?: boolean;
}

interface AgGridRowType {
  id: number;
  border_bottom: boolean;
}

export interface ICardRow {
  id: number;
  item: ICardValueItem[];
}

export interface AgGridRowValue {
  [key: string]: ICardValueItem[];
}

export type AgGridRow = AgGridRowValue & AgGridRowType;

export interface ICardAgGrid {
  cols: {
    values: IAgGridCol[];
    header_visible: boolean;
  };
  lines: AgGridRow[];
  title: {
    bg_color: string;
    font_color: string;
    lib: string;
  };
}

interface ICardCol extends Omit<DataGridDetailsColumnType, 'key'> {
  border_right: boolean;
  label: string;
  width: number;
  field: string;
  dataKey: string;
  align: string;
}

export interface ICard {
  cols: {
    values: ICardCol[];
    header_visible: boolean;
  };
  lines: {
    values: ICardRow[];
    border_bottom: boolean;
  };
  title: {
    bg_color: string;
    font_color: string;
    lib: string;
  };
}

export interface IIndicator {
  bg_color: string;
  color: string;
  hint: string;
  info: string;
  lib: string;
  value: number;
  style: 'linear' | 'circular';
}

export interface ISearchBarOptions {
  lib: string;
  placeholder: string;
  regex: string | null;
  regex_msg: string | null;
  action: IActionButton;
}

interface ISubtitle {
  font_color: string;
  font_size: string;
  lib: string;
  visible: boolean;
}

interface ITitle {
  font_color: string;
  font_size: string;
  lib: string;
  visible: boolean;
}

export interface IDashboard {
  target: string;
  route_front: string;
  data: {
    btns: IButtons[];
    cards?: {
      card: ICard[];
      visible: boolean;
    };
    ag_cards?: {
      card: ICardAgGrid[];
      visible: boolean;
    };
    metrics: {
      indicator: IIndicator[];
      visible: boolean;
    };
    search_bar: {
      btn_lib: string;
      options: ISearchBarOptions[];
      search_bar: boolean;
    };
    subtitle: ISubtitle;
    title: ITitle;
  };
}
