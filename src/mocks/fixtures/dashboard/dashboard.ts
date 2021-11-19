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
          header_visible: true,
          values: [
            {
              border_right: true,
              header: 'Contrôle',
            },
            {
              border_right: false,
              header: 'Etat',
            },
            {
              border_right: false,
              header: '+',
            },
            {
              border_right: true,
              header: 'BI',
            },
            {
              border_right: false,
              header: 'Fini',
            },
          ],
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
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site A - M1</p>',
                  hint: 'none',
                  icon: '',
                },
                {
                  action: null,
                  content: null,
                  hint: 'Smiley 1',
                  icon: {
                    color: 'red',
                    ref: 'SentimentVeryDissatisfied',
                    size: 12,
                  },
                },
                {
                  action: {
                    route: '/file/add_new_fil?&control_id=1&period_id=M1',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Ajouter un dossier contrôlé',
                  icon: {
                    color: '#3248a8',
                    ref: 'CreateNewFolder',
                    size: 12,
                  },
                },
                {
                  action: {
                    route: '/file/aiv-v5/url_aiv?control_id=1&period_id=M1',
                    target: 'blank',
                  },
                  content: null,
                  hint: 'Ouvrir Reporting',
                  icon: {
                    color: '#333333',
                    ref: 'Assessment',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=1&period_id=M1',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
                },
              ],
            },
            {
              id: 2,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - M1</p>',
                  hint: 'none',
                  icon: null,
                },
                {
                  action: null,
                  content: null,
                  hint: 'Smiley 2',
                  icon: {
                    color: 'orange',
                    ref: 'SentimentDissatisfied',
                    size: 12,
                  },
                },
                {
                  action: {
                    route: '/file/add_new_file?control_id=2&period_id=M1',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Ajouter un dossier contrôlé',
                  icon: {
                    color: '#3248a8',
                    ref: 'CreateNewFolder',
                    size: 12,
                  },
                },
                {
                  action: {
                    route: '/file/aiv-v5/url_aiv?control_id=2&period_id=M1',
                    target: 'blank',
                  },
                  content: null,
                  hint: 'Ouvrir Reporting',
                  icon: {
                    color: '#333333',
                    ref: 'Assessment',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=2&period_id=M1',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
                },
              ],
            },
            {
              id: 3,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site A - T3</p>',
                  hint: 'none',
                  icon: null,
                },
                {
                  action: null,
                  content: null,
                  hint: 'Smiley 3',
                  icon: {
                    color: 'green',
                    ref: 'Mood',
                    size: 12,
                  },
                },
                {
                  action: {
                    route: '/file/add_new_file?control_id=3&period_id=T3',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Ajouter un dossier contrôlé',
                  icon: {
                    color: '#3248a8',
                    ref: 'CreateNewFolder',
                    size: 12,
                  },
                },
                {
                  action: {
                    route: '/file/aiv-v5/url_aiv?control_id=3&period_id=T3',
                    target: 'blank',
                  },
                  content: null,
                  hint: 'Ouvrir Reporting',
                  icon: {
                    color: '#333333',
                    ref: 'Assessment',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=3&period_id=T3',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
                },
              ],
            },
            {
              id: 4,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
                  hint: 'none',
                  icon: null,
                },
                {
                  action: null,
                  content: null,
                  hint: 'Smiley 4',
                  icon: {
                    color: 'orange',
                    ref: 'SentimentDissatisfied',
                    size: 12,
                  },
                },
                {
                  action: {
                    route: '/file/add_new_file?control_id=4&period_id=T4',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Ajouter un dossier contrôlé',
                  icon: {
                    color: '#3248a8',
                    ref: 'CreateNewFolder',
                    size: 12,
                  },
                },
                {
                  action: {
                    route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
                    target: 'blank',
                  },
                  content: null,
                  hint: 'Ouvrir Reporting',
                  icon: {
                    color: '#333333',
                    ref: 'Assessment',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=4&period_id=T4',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
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
          header_visible: false,
          values: [
            {
              border_right: false,
              header: 'Contrôle',
            },
            {
              border_right: true,
              header: 'Liste',
            },
            {
              border_right: false,
              header: 'Fini',
            },
          ],
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
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site A - M1</p>',
                  hint: 'none',
                  icon: null,
                },
                {
                  action: {
                    route:
                      '/control/display_file_ko?control_id=10&period_id=M1',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Affiche la liste des dossiers avec Contrôles KO',
                  icon: {
                    color: '#bf6f8a',
                    ref: 'Toc',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=10&period_id=M1',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
                },
              ],
            },
            {
              id: 11,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site A - M2</p>',
                  hint: 'none',
                  icon: null,
                },
                {
                  action: {
                    route:
                      '/control/display_file_ko?control_id=11&period_id=M2',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Affiche la liste des dossiers avec Contrôles KO',
                  icon: {
                    color: '#bf6f8a',
                    ref: 'Toc',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=11&period_id=M2',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
                },
              ],
            },
            {
              id: 12,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site A - M3</p>',
                  hint: 'none',
                  icon: null,
                },
                {
                  action: {
                    route:
                      '/control/display_file_ko?control_id=12&period_id=M3',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Affiche la liste des dossiers avec Contrôles KO',
                  icon: {
                    color: '#bf6f8a',
                    ref: 'Toc',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=12&period_id=M3',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
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
          header_visible: false,
          values: [
            {
              border_right: false,
              header: 'Contrôle',
            },
            {
              border_right: true,
              header: 'Liste',
            },
            {
              border_right: false,
              header: 'Fini',
            },
          ],
        },
        lines: {
          border_bottom: false,
          values: [
            {
              id: 20,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire - <p style="color:red; font-weight:bold;">Site V1 - M6</p>',
                  hint: 'none',
                  icon: null,
                },
                {
                  action: {
                    route:
                      '/control/validate_control?control_id=20&period_id=M6',
                    target: 'modal',
                  },
                  content: null,
                  hint:
                    'Affiche la liste des dossiers avec Contrôles à Valider',
                  icon: {
                    color: '#94c26e',
                    ref: 'PlaylistAddCheck',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=20&period_id=M6',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
                },
              ],
            },
            {
              id: 21,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire - <p style="color:red; font-weight:bold;">Site V2 - M12</p>',
                  hint: 'none',
                  icon: null,
                },
                {
                  action: {
                    route:
                      '/control/validate_control?control_id=21&period_id=M12',
                    target: 'modal',
                  },
                  content: null,
                  hint:
                    'Affiche la liste des dossiers avec Contrôles à Valider',
                  icon: {
                    color: '#94c26e',
                    ref: 'PlaylistAddCheck',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=21&period_id=M12',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
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
      {
        cols: {
          header_visible: false,
          values: [
            {
              border_right: false,
              header: 'Contrôle',
            },
            {
              border_right: true,
              header: 'Liste',
            },
            {
              border_right: false,
              header: 'Fini',
            },
          ],
        },
        lines: {
          border_bottom: false,
          values: [
            {
              id: 30,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire - <p style="color:red; font-weight:bold;">Site Rej1 - M4</p>',
                  hint: 'none',
                  icon: null,
                },
                {
                  action: {
                    route:
                      '/control/validate_control?control_id=30&period_id=M4',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Affiche la liste des dossiers avec Contrôles Rejetés',
                  icon: {
                    color: '#bfa06d',
                    ref: 'ListAlt',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=30&period_id=M4',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
                },
              ],
            },
          ],
        },
        title: {
          bg_color: '#FF0000',
          font_color: '#FFFFFFF',
          lib: '1 Contrôle Rejetés',
        },
      },
      {
        cols: {
          header_visible: false,
          values: [
            {
              border_right: false,
              header: 'Contrôle',
            },
            {
              border_right: true,
              header: 'Liste',
            },
            {
              border_right: false,
              header: 'Fini',
            },
          ],
        },
        lines: {
          border_bottom: false,
          values: [
            {
              id: 20,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire - <p style="color:red; font-weight:bold;">Site V1 - M6</p>',
                  hint: 'none',
                  icon: null,
                },
                {
                  action: {
                    route:
                      '/control/validate_control?control_id=20&period_id=M6',
                    target: 'modal',
                  },
                  content: null,
                  hint:
                    'Affiche la liste des dossiers avec Contrôles à Valider',
                  icon: {
                    color: '#94c26e',
                    ref: 'PlaylistAddCheck',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=20&period_id=M6',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
                },
              ],
            },
            {
              id: 21,
              item: [
                {
                  action: null,
                  content:
                    'Contrôler la conformité statutaire - <p style="color:red; font-weight:bold;">Site V2 - M12</p>',
                  hint: 'none',
                  icon: null,
                },
                {
                  action: {
                    route:
                      '/control/validate_control?control_id=21&period_id=M12',
                    target: 'modal',
                  },
                  content: null,
                  hint:
                    'Affiche la liste des dossiers avec Contrôles à Valider',
                  icon: {
                    color: '#94c26e',
                    ref: 'PlaylistAddCheck',
                    size: 12,
                  },
                },
                {
                  action: {
                    route:
                      '/control/end_period_control?control_id=21&period_id=M12',
                    target: 'modal',
                  },
                  content: null,
                  hint: 'Clôturer la période de déclaration de ce contrôle',
                  icon: {
                    color: '#f5c0b5',
                    ref: 'HighlightOff',
                    size: 12,
                  },
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
        bg_color: '#F1CBF7',
        color: '#5B0E69',
        hint: 'Taux de Complétude : 65 dossiers contrôlés / 89 prévus = 73%',
        info:
          'Le taux de complétude est calculé selon les élément bla bla bla...',
        lib: 'Taux de Complétude',
        style: 'linear',
        value: 73,
      },
      {
        bg_color: null,
        color: '#5B0E69',
        hint:
          'Taux de Conformité : 65 dossiers conformes / 125 contrôles = 52%',
        info:
          'Le taux de conformité est calculé selon les élément bla bla bla...',
        lib: 'Taux de Conformité',
        style: 'linear',
        value: 52,
      },
      {
        bg_color: '#F1CBF7',
        color: '#5B0E69',
        hint:
          'Taux de Correction : 10 dossiers corrigés / 85 non-conformes = 12%',
        info:
          'Le taux de correction est calculé selon les élément bla bla bla...',
        lib: 'Taux de Correction',
        style: 'linear',
        value: 12,
      },
    ],
    visible: true,
  },
  search_bar: {
    btn_lib: 'Lancer la recherche',
    options: [
      {
        lib: 'Rechercher un Dossier Klesia',
        placeholder: 'Numéro de Dossier / Avenant - Klesia',
        regex: '[0-9A-Za-z]\\/[0-9A-Za-z]',
        regex_msg:
          'La recherche doit respecter le format : N° de Dossier / Avenant',
        route: '/file/search_dossier',
      },
      {
        lib: 'Rechercher un Utilisateur Klesia',
        placeholder: "Nom de l'utilisateur - Klesia",
        regex: null,
        regex_msg: null,
        route: '/file/search_user',
      },
    ],
    search_bar: true,
  },
  subtitle: {
    font_color: '#ED9532',
    font_size: '24px',
    lib: "Assureur d'Intérêt Général",
    visible: true,
  },
  title: {
    font_color: '#4E3F43',
    font_size: '48px',
    lib: 'Klesia',
    visible: true,
  },
};
