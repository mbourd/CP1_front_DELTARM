interface IButtons {
  btn_color: string;
  btn_hover_color: string;
  btn_lib: string;
  route: string;
}
interface ICardDefinition {
  border_right: boolean;
  header: string;
  type: string;
}
interface ICard {
  cols: {
    definition: ICardDefinition[];
    header_visible: boolean;
  };
  lines: {
    border_bottom: boolean;
    values: [
      {
        id: number;
        item: [
          {
            action: null;
            content: 'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - Site A - M1';
            hint: 'none';
          },
          {
            action: null;
            content: 'https://path_to_smiley';
            hint: 'Smiley 1';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 1;
                },
                {
                  key: 'period_id';
                  value: 'M1';
                },
              ];
              route: '/file/add_new_file';
            };
            content: 'https://path_to_icon';
            hint: 'Ajouter un dossier contrôlé';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 1;
                },
                {
                  key: 'period_id';
                  value: 'M1';
                },
              ];
              route: '/file/aiv-v5/url_aiv';
            };
            content: 'https://path_to_icon_aiv';
            hint: 'Ouvrir Reporting';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 1;
                },
                {
                  key: 'period_id';
                  value: 'M1';
                },
              ];
              route: '/control/end_period_control';
            };
            content: 'https://path_to_img_cloture';
            hint: 'Clôturer la période de déclaration de ce contrôle';
          },
        ];
      },
      {
        id: 2;
        item: [
          {
            action: null;
            content: 'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - Site B - M1';
            hint: 'none';
          },
          {
            action: null;
            content: 'https://path_to_smiley';
            hint: 'Smiley 2';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 2;
                },
                {
                  key: 'period_id';
                  value: 'M1';
                },
              ];
              route: '/file/add_new_file';
            };
            content: 'https://path_to_icon';
            hint: 'Ajouter un dossier contrôlé';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 2;
                },
                {
                  key: 'period_id';
                  value: 'M1';
                },
              ];
              route: '/file/aiv-v5/url_aiv';
            };
            content: 'https://path_to_icon_aiv';
            hint: 'Ouvrir Reporting';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 2;
                },
                {
                  key: 'period_id';
                  value: 'M1';
                },
              ];
              route: '/control/end_period_control';
            };
            content: 'https://path_to_img_cloture';
            hint: 'Clôturer la période de déclaration de ce contrôle';
          },
        ];
      },
      {
        id: 3;
        item: [
          {
            action: null;
            content: 'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - Site A - T3';
            hint: 'none';
          },
          {
            action: null;
            content: 'https://path_to_smiley';
            hint: 'Smiley 3';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 3;
                },
                {
                  key: 'period_id';
                  value: 'T3';
                },
              ];
              route: '/file/add_new_file';
            };
            content: 'https://path_to_icon';
            hint: 'Ajouter un dossier contrôlé';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 3;
                },
                {
                  key: 'period_id';
                  value: 'T3';
                },
              ];
              route: '/file/aiv-v5/url_aiv';
            };
            content: 'https://path_to_icon_aiv';
            hint: 'Ouvrir Reporting';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 3;
                },
                {
                  key: 'period_id';
                  value: 'T3';
                },
              ];
              route: '/control/end_period_control';
            };
            content: 'https://path_to_img_cloture';
            hint: 'Clôturer la période de déclaration de ce contrôle';
          },
        ];
      },
      {
        id: 4;
        item: [
          {
            action: null;
            content: 'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - Site B - T4';
            hint: 'none';
          },
          {
            action: null;
            content: 'https://path_to_smiley';
            hint: 'Smiley 4';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 4;
                },
                {
                  key: 'period_id';
                  value: 'T4';
                },
              ];
              route: '/file/add_new_file';
            };
            content: 'https://path_to_icon';
            hint: 'Ajouter un dossier contrôlé';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 4;
                },
                {
                  key: 'period_id';
                  value: 'T4';
                },
              ];
              route: '/file/aiv-v5/url_aiv';
            };
            content: 'https://path_to_icon_aiv';
            hint: 'Ouvrir Reporting';
          },
          {
            action: {
              params: [
                {
                  key: 'control_id';
                  value: 4;
                },
                {
                  key: 'period_id';
                  value: 'T4';
                },
              ];
              route: '/control/end_period_control';
            };
            content: 'https://path_to_img_cloture';
            hint: 'Clôturer la période de déclaration de ce contrôle';
          },
        ];
      },
    ];
  };
  title: {
    bg_color: string;
    font_color: string;
    lib: string;
  };
}

interface IBar {
  bar_bg_color: string;
  bar_color: string;
  hint: string;
  info: string;
  lib: string;
  value: number;
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
      bars: IBar[];
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
