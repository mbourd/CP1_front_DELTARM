import { SvgIconComponent } from '@material-ui/icons';

interface IButtons {
  btn_color: string;
  btn_hover_color: string;
  btn_lib: string;
  route: string;
}
interface ICardCol {
  border_right: boolean;
  header: string;
}

export interface ICardValueItemParams {
  route: string;
  target: 'blank' | 'self' | 'modal';
}
interface ICardIcon {
  color: string;
  ref: SvgIconComponent;
  size: number;
}

interface ICardValueItem {
  action: ICardValueItemParams | null;
  content: string | null;
  hint: string;
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
  bar_bg_color: string;
  bar_color: string;
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
  route: string;
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
