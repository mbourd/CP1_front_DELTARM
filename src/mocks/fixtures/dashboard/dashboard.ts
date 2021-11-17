export default {
  btns: [
    {
      btn_color: '#23cf84',
      btn_hover_color: '#065e3b',
      btn_lib: 'Nouveau Dossier',
      route: '/file/new_file',
    },
    {
      btn_color: '#ad6910',
      btn_hover_color: '#3d3117',
      btn_lib: 'Bouton Bidon',
      route: '/btn/bidon',
    },
  ],
  cards: {
    card: [
      {
        cols: {
          definition: [
            {
              border_right: true,
              header: 'Contrôle',
              type: 'text',
            },
            {
              border_right: false,
              header: 'Etat',
              type: 'icon',
            },
            {
              border_right: false,
              header: '+',
              type: 'icon',
            },
            {
              border_right: true,
              header: 'BI',
              type: 'icon',
            },
            {
              border_right: false,
              header: 'Fini',
              type: 'icon',
            },
          ],
          header_visible: true,
        },
        lines: {
          border_bottom: true,
          values: [
            {
              id: 1,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - Site A - M1',
                  hint: 'none',
                },
                {
                  action: null,
                  content: 'https://path_to_smiley',
                  hint: 'Smiley 1',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 1,
                      },
                      {
                        key: 'period_id',
                        value: 'M1',
                      },
                    ],
                    route: '/file/add_new_file',
                  },
                  content: 'https://path_to_icon',
                  hint: 'Ajouter un dossier contrôlé',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 1,
                      },
                      {
                        key: 'period_id',
                        value: 'M1',
                      },
                    ],
                    route: '/file/aiv-v5/url_aiv',
                  },
                  content: 'https://path_to_icon_aiv',
                  hint: 'Ouvrir Reporting',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 1,
                      },
                      {
                        key: 'period_id',
                        value: 'M1',
                      },
                    ],
                    route: '/control/end_period_control',
                  },
                  content: 'https://path_to_img_cloture',
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                },
              ],
            },
            {
              id: 2,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - Site B - M1',
                  hint: 'none',
                },
                {
                  action: null,
                  content: 'https://path_to_smiley',
                  hint: 'Smiley 2',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 2,
                      },
                      {
                        key: 'period_id',
                        value: 'M1',
                      },
                    ],
                    route: '/file/add_new_file',
                  },
                  content: 'https://path_to_icon',
                  hint: 'Ajouter un dossier contrôlé',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 2,
                      },
                      {
                        key: 'period_id',
                        value: 'M1',
                      },
                    ],
                    route: '/file/aiv-v5/url_aiv',
                  },
                  content: 'https://path_to_icon_aiv',
                  hint: 'Ouvrir Reporting',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 2,
                      },
                      {
                        key: 'period_id',
                        value: 'M1',
                      },
                    ],
                    route: '/control/end_period_control',
                  },
                  content: 'https://path_to_img_cloture',
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                },
              ],
            },
            {
              id: 3,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - Site A - T3',
                  hint: 'none',
                },
                {
                  action: null,
                  content: 'https://path_to_smiley',
                  hint: 'Smiley 3',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 3,
                      },
                      {
                        key: 'period_id',
                        value: 'T3',
                      },
                    ],
                    route: '/file/add_new_file',
                  },
                  content: 'https://path_to_icon',
                  hint: 'Ajouter un dossier contrôlé',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 3,
                      },
                      {
                        key: 'period_id',
                        value: 'T3',
                      },
                    ],
                    route: '/file/aiv-v5/url_aiv',
                  },
                  content: 'https://path_to_icon_aiv',
                  hint: 'Ouvrir Reporting',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 3,
                      },
                      {
                        key: 'period_id',
                        value: 'T3',
                      },
                    ],
                    route: '/control/end_period_control',
                  },
                  content: 'https://path_to_img_cloture',
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                },
              ],
            },
            {
              id: 4,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - Site B - T4',
                  hint: 'none',
                },
                {
                  action: null,
                  content: 'https://path_to_smiley',
                  hint: 'Smiley 4',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 4,
                      },
                      {
                        key: 'period_id',
                        value: 'T4',
                      },
                    ],
                    route: '/file/add_new_file',
                  },
                  content: 'https://path_to_icon',
                  hint: 'Ajouter un dossier contrôlé',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 4,
                      },
                      {
                        key: 'period_id',
                        value: 'T4',
                      },
                    ],
                    route: '/file/aiv-v5/url_aiv',
                  },
                  content: 'https://path_to_icon_aiv',
                  hint: 'Ouvrir Reporting',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 4,
                      },
                      {
                        key: 'period_id',
                        value: 'T4',
                      },
                    ],
                    route: '/control/end_period_control',
                  },
                  content: 'https://path_to_img_cloture',
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                },
              ],
            },
          ],
        },
        title: {
          bg_color: '#ABCDEF',
          font_color: '#FFFFFFF',
          lib: '4 Contrôles à réaliser',
        },
      },
      {
        cols: {
          definition: [
            {
              border_right: false,
              header: 'Contrôle',
              type: 'text',
            },
            {
              border_right: true,
              header: 'Liste',
              type: 'icon',
            },
            {
              border_right: false,
              header: 'Fini',
              type: 'icon',
            },
          ],
          header_visible: false,
        },
        lines: {
          border_bottom: false,
          values: [
            {
              id: 10,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - Site A - M1',
                  hint: 'none',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 10,
                      },
                      {
                        key: 'period_id',
                        value: 'M1',
                      },
                    ],
                    route: '/control/display_file_ko',
                  },
                  content: 'https://path_to_img_list',
                  hint: 'Affiche la liste des dossiers avec Contrôles KO',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 10,
                      },
                      {
                        key: 'period_id',
                        value: 'M1',
                      },
                    ],
                    route: '/control/end_period_control',
                  },
                  content: 'https://path_to_img_cloture',
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                },
              ],
            },
            {
              id: 11,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - Site A - M2',
                  hint: 'none',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 10,
                      },
                      {
                        key: 'period_id',
                        value: 'M2',
                      },
                    ],
                    route: '/control/display_file_ko',
                  },
                  content: 'https://path_to_img_list',
                  hint: 'Affiche la liste des dossiers avec Contrôles KO',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 10,
                      },
                      {
                        key: 'period_id',
                        value: 'M2',
                      },
                    ],
                    route: '/control/end_period_control',
                  },
                  content: 'https://path_to_img_cloture',
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                },
              ],
            },
            {
              id: 12,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - Site A - M3',
                  hint: 'none',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 10,
                      },
                      {
                        key: 'period_id',
                        value: 'M3',
                      },
                    ],
                    route: '/control/display_file_ko',
                  },
                  content: 'https://path_to_img_list',
                  hint: 'Affiche la liste des dossiers avec Contrôles KO',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 10,
                      },
                      {
                        key: 'period_id',
                        value: 'M3',
                      },
                    ],
                    route: '/control/end_period_control',
                  },
                  content: 'https://path_to_img_cloture',
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                },
              ],
            },
          ],
        },
        title: {
          bg_color: '#FF0000',
          font_color: '#FFFFFFF',
          lib: '3 Contrôles KO',
        },
      },
      {
        cols: {
          definition: [
            {
              border_right: false,
              header: 'Contrôle',
              type: 'text',
            },
            {
              border_right: true,
              header: 'Liste',
              type: 'icon',
            },
            {
              border_right: false,
              header: 'Fini',
              type: 'icon',
            },
          ],
          header_visible: false,
        },
        lines: {
          border_bottom: false,
          values: [
            {
              id: 20,
              item: [
                {
                  action: null,
                  content: 'Contrôler la conformité statutaire - Site V1 - M6',
                  hint: 'none',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 20,
                      },
                      {
                        key: 'period_id',
                        value: 'M6',
                      },
                    ],
                    route: '/control/validate_control',
                  },
                  content: 'https://path_to_img_list',
                  hint:
                    'Affiche la liste des dossiers avec Contrôles à Valider',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 20,
                      },
                      {
                        key: 'period_id',
                        value: 'M6',
                      },
                    ],
                    route: '/control/end_period_control',
                  },
                  content: 'https://path_to_img_cloture',
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                },
              ],
            },
            {
              id: 21,
              item: [
                {
                  action: null,
                  content: 'Contrôler la conformité statutaire - Site V2 - M12',
                  hint: 'none',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 21,
                      },
                      {
                        key: 'period_id',
                        value: 'M12',
                      },
                    ],
                    route: '/control/validate_control',
                  },
                  content: 'https://path_to_img_list',
                  hint: 'Affiche la liste des dossiers avec Contrôles KO',
                },
                {
                  action: {
                    params: [
                      {
                        key: 'control_id',
                        value: 21,
                      },
                      {
                        key: 'period_id',
                        value: 'M12',
                      },
                    ],
                    route: '/control/end_period_control',
                  },
                  content: 'https://path_to_img_cloture',
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                },
              ],
            },
          ],
        },
        title: {
          bg_color: '#FF0000',
          font_color: '#FFFFFFF',
          lib: '2 Contrôles à Valider',
        },
      },
    ],
    visible: true,
  },
  metrics: {
    indicator: [
      {
        bar_bg_color: '#012345',
        bar_color: '#ABCDEF',
        hint: 'Taux de Complétude : 54 dossiers / 100 prévus au plan = 54%',
        info:
          'Le taux de Complétude est calculé selon les éléments bla bla bla',
        lib: 'Taux de Complétude',
        value: 54,
        style: 'linear',
      },
      {
        bar_bg_color: '#ABCDEF',
        bar_color: '#012345',
        hint:
          'Taux de Conformité : 95 dossiers conformes / 100 contrôlés = 95%',
        info:
          'Le taux de Conformité est calculé selon les éléments bla bla bla',
        lib: 'Taux de Conformité',
        value: 95,
        style: 'linear',
      },
      {
        bar_bg_color: '#FEDCBA',
        bar_color: '#543210',
        hint:
          'Taux de Correction : 4 dossiers corrigés / 18 non-conformes = 32%',
        info:
          'Le taux de Correction est calculé selon les éléments bla bla bla',
        lib: 'Taux de Correction',
        value: 32,
        style: 'linear',
      },
      {
        bar_bg_color: '#FEDCBA',
        bar_color: '#543210',
        hint:
          'Taux de Correction : 4 dossiers corrigés / 18 non-conformes = 32%',
        info:
          'Le taux de Correction est calculé selon les éléments bla bla bla',
        lib: 'Taux de Correction',
        value: 32,
        style: 'circular',
      },
      {
        bar_bg_color: '#FEDCBA',
        bar_color: '#543210',
        hint:
          'Taux de Correction : 4 dossiers corrigés / 18 non-conformes = 32%',
        info:
          'Le taux de Correction est calculé selon les éléments bla bla bla',
        lib: 'Taux de Correction',
        value: 32,
        style: 'linear',
      },
      {
        bar_bg_color: '#FEDCBA',
        bar_color: '#543210',
        hint:
          'Taux de Correction : 4 dossiers corrigés / 18 non-conformes = 32%',
        info:
          'Le taux de Correction est calculé selon les éléments bla bla bla',
        lib: 'Taux de Correction',
        value: 32,
        style: 'circular',
      },
    ],
    visible: true,
  },
  search_bar: {
    btn_lib: 'Lancer la recherche',
    options: [
      {
        lib: 'Rechercher par numéro',
        placeholder: 'Numéro de Dossier / Avenant',
        regex: '[0-9A-Za-z]\\/[0-9A-Za-z]',
        regex_msg:
          'La recherche doit respecter le format : N° de Dossier / Avenant',
        route: '/file/search',
      },
      {
        lib: "Rechercher par nom d'utilisateur",
        placeholder: "Nom de l'utilisateur",
        regex: null,
        regex_msg: null,
        route: '/file/search_name',
      },
      {
        lib: 'Recherche Globale',
        placeholder: 'Chaîne de caractère à rechercher',
        regex: null,
        regex_msg: null,
        route: '/file/search_global',
      },
    ],
    search_bar: true,
  },
  subtitle: {
    font_color: '#3018a8',
    font_size: '20px',
    lib: 'Sous-Titre du Dashboard',
    visible: true,
  },
  title: {
    font_color: '#a232a8',
    font_size: '26px',
    lib: 'Titre du Dashboard',
    visible: true,
  },
};
