import { SvgIconComponent } from '@mui/icons-material';

export interface IButtons {
  bg_color: string;
  font_color: string;
  hover_color: string;
  btn_lib: string;
  action: IActionButton;
}
interface ICardCol {
  border_right: boolean;
  header: string;
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

interface ICardValueItem {
  action: IActionButton | null;
  content: string | null;
  hint: string | null;
  icon: ICardIcon | null;
  border_right?: boolean;
}

interface ICardRow {
  id: number;
  item: ICardValueItem[];
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
    cards: {
      card: ICard[];
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
