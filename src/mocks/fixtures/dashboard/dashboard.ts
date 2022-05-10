export const DASHBOARD_BPI = {
  data: {
    btns: [],
    cards: {
      card: [
        {
          cols: {
            header_visible: true,
            values: [
              {
                border_right: true,
                dataKey: 'Contrôle',
                label: 'Contrôle',
                width: 450,
              },
              {
                border_right: false,
                dataKey: 'Période',
                label: 'Période',
                width: 120,
              },
              {
                border_right: true,
                dataKey: 'Dernier',
                label: 'Dernier',
                width: 85,
              },
              {
                border_right: false,
                dataKey: 'Nouveau',
                label: 'Nouveau',
                width: 85,
              },
              {
                border_right: false,
                dataKey: 'Liste',
                label: 'Liste',
                width: 60,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: 'cca956fc-82da-48f1-9bfe-26af20672888',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
                    hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
                    icon: null,
                  },
                  {
                    action: null,
                    content: '09/05/22',
                    hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/contr_perm/get_search_ctrl_done',
                      method: 'GET',
                      params: {
                        value: 'cca956fc-82da-48f1-9bfe-26af20672888',
                      },
                    },
                    content: null,
                    hint: 'Liste des contrôles',
                    icon: {
                      color: '#66499c',
                      ref: 'Assessment',
                      size: 12,
                    },
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#3498DB',
            font_color: '#FFFFFF',
            lib: 'Contrôle à la demande',
          },
        },
        {
          cols: {
            header_visible: true,
            values: [
              {
                border_right: true,
                dataKey: 'Contrôle',
                header: 'Contrôle',
                label: 'Contrôle',
                width: 400,
              },
              {
                border_right: true,
                dataKey: 'Période',
                header: 'Période',
                label: 'Période',
                width: 120,
              },
              {
                border_right: true,
                dataKey: 'Date début',
                header: 'Date début',
                label: 'Date début',
                width: 120,
              },
              {
                border_right: true,
                dataKey: 'Date Limite',
                header: 'Date Limite',
                label: 'Date Limite',
                width: 80,
              },
              {
                border_right: false,
                dataKey: '+',
                header: '+',
                label: '+',
                width: 80,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: '9d999cb9-4bb1-45c0-936f-c916e73b172f',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0005-Test pour les controles non realise (M)',
                    hint: 'Test pour les controles non realise',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M12 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '05/12/22',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '03/01/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '9d999cb9-4bb1-45c0-936f-c916e73b172f',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '3e17db5d-600c-4bbe-98e4-ce5feac496b8',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0005-Test pour les controles non realise (M)',
                    hint: 'Test pour les controles non realise',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M1 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '04/01/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '03/02/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '3e17db5d-600c-4bbe-98e4-ce5feac496b8',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '8b3f3268-fe39-4f13-8454-547fe6fd0c31',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des récl... (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M1 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '02/01/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '07/02/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '8b3f3268-fe39-4f13-8454-547fe6fd0c31',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'b33fc29c-765c-40ee-88b6-94ed3d7e84f5',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0005-Test pour les controles non realise (M)',
                    hint: 'Test pour les controles non realise',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M2 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/02/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '03/03/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: 'b33fc29c-765c-40ee-88b6-94ed3d7e84f5',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '26e7d644-befd-4858-a8aa-8a3e0494348d',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des récl... (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M2 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '02/02/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '07/03/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '26e7d644-befd-4858-a8aa-8a3e0494348d',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '8370335a-884b-4a42-9793-5d6a0efce500',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligi... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M2 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '02/02/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '07/03/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '8370335a-884b-4a42-9793-5d6a0efce500',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'e9f944df-0c03-49c5-903b-627d11418027',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des récl... (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M3 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '02/03/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '07/04/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: 'e9f944df-0c03-49c5-903b-627d11418027',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '5e577e32-8706-44bd-8eb5-b016b0e0c57c',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligi... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M3 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '02/03/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '07/04/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '5e577e32-8706-44bd-8eb5-b016b0e0c57c',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '8a138624-dcb7-49c6-a887-96cd2962a1c9',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligi... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M4 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '03/04/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '09/05/23',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '8a138624-dcb7-49c6-a887-96cd2962a1c9',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '3c58ec52-907b-476d-852f-dbefcf5d8586',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0004-Contrôle de la communication du rapport ... (A)',
                    hint: "Contrôle de la communication du rapport annuel, concernant la représentation d'intérêt, à la haute autorité pour la transparence de la vie publique (HATVP)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2024',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '25/04/24',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '26/05/25',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '3c58ec52-907b-476d-852f-dbefcf5d8586',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '79aab883-ac49-48cf-936f-1cc7af3de723',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0004-Contrôle de la communication du rapport ... (A)',
                    hint: "Contrôle de la communication du rapport annuel, concernant la représentation d'intérêt, à la haute autorité pour la transparence de la vie publique (HATVP)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2025',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '28/04/25',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '26/05/26',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '79aab883-ac49-48cf-936f-1cc7af3de723',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '4f24e32a-1e75-4af9-af08-382bcca700e3',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T3 - 2026',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '01/07/26',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '15/10/26',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '4f24e32a-1e75-4af9-af08-382bcca700e3',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'ac7de04c-a32e-4939-8aa2-36afb59a0e64',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T1 - 2027',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '04/01/27',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '15/04/27',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: 'ac7de04c-a32e-4939-8aa2-36afb59a0e64',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'afced159-bf1c-467c-b7e6-1ffbeee3ebc0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T2 - 2027',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '01/04/27',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '15/07/27',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: 'afced159-bf1c-467c-b7e6-1ffbeee3ebc0',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '0048ee6c-bdb4-4da4-bd96-e9c2f3ab4e04',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0004-Contrôle de la communication du rapport ... (A)',
                    hint: "Contrôle de la communication du rapport annuel, concernant la représentation d'intérêt, à la haute autorité pour la transparence de la vie publique (HATVP)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2027',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '26/04/27',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '24/05/28',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '0048ee6c-bdb4-4da4-bd96-e9c2f3ab4e04',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '29cd1350-f213-409a-ac32-8fb39f2c680b',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0002-Contrôle de la mise en œuvre du disposit... (A)',
                    hint: 'Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A)',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2031',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '02/01/31',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '31/12/31',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '29cd1350-f213-409a-ac32-8fb39f2c680b',
                      },
                    },
                    content: null,
                    hint: 'Nouvelle Saisie',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#3498DB',
            font_color: '#FFFFFF',
            lib: 'Contrôles planifiés',
          },
        },
        {
          cols: {
            header_visible: true,
            values: [
              {
                border_right: true,
                dataKey: 'Contrôle',
                header: 'Contrôle',
                label: 'Contrôle',
                width: 450,
              },
              {
                border_right: true,
                dataKey: 'Période',
                header: 'Période',
                label: 'Période',
                width: 150,
              },
              {
                border_right: true,
                dataKey: 'Rejeté',
                header: 'Rejeté',
                label: 'Rejeté',
                width: 100,
              },
              {
                border_right: false,
                dataKey: 'Statut',
                header: 'Statut',
                label: 'Statut',
                width: 100,
              },
              {
                border_right: false,
                dataKey: 'Visualiser',
                header: 'Visualiser',
                label: 'Visualiser',
                width: 100,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: '92b8946d-c0a8-4ac2-875e-bd7c29a50483',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '92b8946d-c0a8-4ac2-875e-bd7c29a50483',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligibilité/de risques dans le cadr... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M9 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '21/04/22 - 18:40:27',
                    hint: 'Rejeté le 06/05/22 - 10:17:43 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '92b8946d-c0a8-4ac2-875e-bd7c29a50483',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '92b8946d-c0a8-4ac2-875e-bd7c29a50483',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#B12B67',
                      ref: 'FmdBad',
                      size: 12,
                    },
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#B12B67',
            font_color: '#FFFFFF',
            lib: '1 contrôle rejeté',
          },
        },
        {
          cols: {
            header_visible: true,
            values: [
              {
                border_right: true,
                dataKey: 'Contrôle',
                header: 'Contrôle',
                label: 'Contrôle',
                width: 400,
              },
              {
                border_right: true,
                dataKey: 'Dernier',
                header: 'Dernier',
                label: 'Dernier',
                width: 240,
              },
              {
                border_right: false,
                dataKey: 'Editer',
                header: 'Editer',
                label: 'Editer',
                width: 160,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: 'cca956fc-82da-48f1-9bfe-26af20672888',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en contrat de ga... ',
                    hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
                    icon: null,
                  },
                  {
                    action: null,
                    content: '29/04/22 - 16:06:29',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '17fad5cf-9862-4a03-ad4e-fa562b1057e0',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'cca956fc-82da-48f1-9bfe-26af20672888',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en contrat de ga... ',
                    hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
                    icon: null,
                  },
                  {
                    action: null,
                    content: '29/04/22 - 16:06:59',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'd1f1d800-d19d-4a9b-aab7-829f77a8d114',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#F06292',
            font_color: '#FFFFFF',
            lib: '2 saisies - Brouillons',
          },
        },
        {
          cols: {
            header_visible: true,
            values: [
              {
                border_right: true,
                dataKey: 'Contrôle',
                header: 'Contrôle',
                label: 'Contrôle',
                width: 400,
              },
              {
                border_right: true,
                dataKey: 'Période',
                header: 'Période',
                label: 'Période',
                width: 120,
              },
              {
                border_right: true,
                dataKey: 'Dernier',
                header: 'Dernier',
                label: 'Dernier',
                width: 120,
              },
              {
                border_right: false,
                dataKey: 'Statut',
                header: 'Statut',
                label: 'Statut',
                width: 100,
              },
              {
                border_right: false,
                dataKey: 'Visualiser',
                header: 'Visualiser',
                label: 'Visualiser',
                width: 100,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: '34905282-925f-43f9-b9c6-08d5f3282ebc',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '34905282-925f-43f9-b9c6-08d5f3282ebc',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0005-Test pour les controles non realise (M)',
                    hint: 'Test pour les controles non realise',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M11 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '09/05/22 - 16:51:20',
                    hint: 'Dernière édition le 09/05/22 - 16:51:20 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '34905282-925f-43f9-b9c6-08d5f3282ebc',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '34905282-925f-43f9-b9c6-08d5f3282ebc',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'ab79ca83-9250-4fd1-8948-08571e9e25d4',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'ab79ca83-9250-4fd1-8948-08571e9e25d4',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en contrat de ga... ',
                    hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
                    icon: null,
                  },
                  {
                    action: null,
                    content: "Fil de l'eau",
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '09/05/22 - 16:49:49',
                    hint: 'Dernière édition le 09/05/22 - 16:49:49 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'ab79ca83-9250-4fd1-8948-08571e9e25d4',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'ab79ca83-9250-4fd1-8948-08571e9e25d4',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '5bff8fa0-e825-4433-97ac-dbdfcb37beff',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '5bff8fa0-e825-4433-97ac-dbdfcb37beff',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligibilité/de risques dans le cadr... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M1 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/05/22 - 10:21:39',
                    hint: 'Dernière édition le 06/05/22 - 10:21:39 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '5bff8fa0-e825-4433-97ac-dbdfcb37beff',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '5bff8fa0-e825-4433-97ac-dbdfcb37beff',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'caf75e7f-9896-4eb1-a206-b54d39660f84',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'caf75e7f-9896-4eb1-a206-b54d39660f84',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des réclamations (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M12 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/05/22 - 10:08:32',
                    hint: 'Dernière édition le 06/05/22 - 10:08:32 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'caf75e7f-9896-4eb1-a206-b54d39660f84',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'caf75e7f-9896-4eb1-a206-b54d39660f84',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '2dbcbad4-6e61-49d6-88cc-20c7ac8214f5',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2dbcbad4-6e61-49d6-88cc-20c7ac8214f5',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T4 - 2026',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/05/22 - 10:06:09',
                    hint: 'Dernière édition le 06/05/22 - 10:06:09 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2dbcbad4-6e61-49d6-88cc-20c7ac8214f5',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2dbcbad4-6e61-49d6-88cc-20c7ac8214f5',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '28cee910-d630-434c-90dd-d170ea07bf8d',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '28cee910-d630-434c-90dd-d170ea07bf8d',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0005-Test pour les controles non realise (M)',
                    hint: 'Test pour les controles non realise',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M9 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/05/22 - 10:03:02',
                    hint: 'Dernière édition le 06/05/22 - 10:03:02 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '28cee910-d630-434c-90dd-d170ea07bf8d',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '28cee910-d630-434c-90dd-d170ea07bf8d',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '6f79fabf-bcb0-4d02-b7db-1d195a60176e',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '6f79fabf-bcb0-4d02-b7db-1d195a60176e',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0002-Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A) (A)',
                    hint: 'Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A)',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2030',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/05/22 - 09:58:07',
                    hint: 'Dernière édition le 06/05/22 - 09:58:07 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '6f79fabf-bcb0-4d02-b7db-1d195a60176e',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (0%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '6f79fabf-bcb0-4d02-b7db-1d195a60176e',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'f24c74b2-b6a1-4bb8-a1a5-2d462cd7e277',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f24c74b2-b6a1-4bb8-a1a5-2d462cd7e277',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en contrat de ga... ',
                    hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
                    icon: null,
                  },
                  {
                    action: null,
                    content: "Fil de l'eau",
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/05/22 - 09:48:59',
                    hint: 'Dernière édition le 06/05/22 - 09:48:59 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f24c74b2-b6a1-4bb8-a1a5-2d462cd7e277',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f24c74b2-b6a1-4bb8-a1a5-2d462cd7e277',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '0d4d9bc2-7f5a-4ce2-9768-7b51d2c4f61b',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '0d4d9bc2-7f5a-4ce2-9768-7b51d2c4f61b',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T2 - 2026',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '02/05/22 - 17:29:42',
                    hint: 'Dernière édition le 02/05/22 - 17:29:42 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '0d4d9bc2-7f5a-4ce2-9768-7b51d2c4f61b',
                      },
                    },
                    content: null,
                    hint: 'Globalement satisfaisant (90%)',
                    icon: {
                      color: '#FFFF00',
                      ref: 'SentimentNeutral',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '0d4d9bc2-7f5a-4ce2-9768-7b51d2c4f61b',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'ea9811bd-e5f6-4d03-885a-7d64a53cdb0e',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'ea9811bd-e5f6-4d03-885a-7d64a53cdb0e',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T4 - 2025',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '02/05/22 - 16:20:33',
                    hint: 'Dernière édition le 02/05/22 - 16:20:33 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'ea9811bd-e5f6-4d03-885a-7d64a53cdb0e',
                      },
                    },
                    content: null,
                    hint: 'Globalement satisfaisant (90%)',
                    icon: {
                      color: '#FFFF00',
                      ref: 'SentimentNeutral',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'ea9811bd-e5f6-4d03-885a-7d64a53cdb0e',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '1429e808-0999-4f41-8f0c-1273a2f72482',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '1429e808-0999-4f41-8f0c-1273a2f72482',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des réclamations (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M11 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '26/04/22 - 11:50:47',
                    hint: 'Dernière édition le 26/04/22 - 11:50:47 par Jérôme Molin',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '1429e808-0999-4f41-8f0c-1273a2f72482',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '1429e808-0999-4f41-8f0c-1273a2f72482',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'be8ccf44-878e-4e18-a601-904a4c426225',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'be8ccf44-878e-4e18-a601-904a4c426225',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T2 - 2025',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '25/04/22 - 14:11:13',
                    hint: 'Dernière édition le 25/04/22 - 14:11:13 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'be8ccf44-878e-4e18-a601-904a4c426225',
                      },
                    },
                    content: null,
                    hint: 'Globalement satisfaisant (90%)',
                    icon: {
                      color: '#FFFF00',
                      ref: 'SentimentNeutral',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'be8ccf44-878e-4e18-a601-904a4c426225',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '3c4e3b01-065a-49bd-85d0-c5a749e6d4ca',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '3c4e3b01-065a-49bd-85d0-c5a749e6d4ca',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des réclamations (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M10 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '22/04/22 - 11:41:33',
                    hint: 'Dernière édition le 22/04/22 - 11:41:33 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '3c4e3b01-065a-49bd-85d0-c5a749e6d4ca',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '3c4e3b01-065a-49bd-85d0-c5a749e6d4ca',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '92b8946d-c0a8-4ac2-875e-bd7c29a50483',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '92b8946d-c0a8-4ac2-875e-bd7c29a50483',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligibilité/de risques dans le cadr... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M9 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '21/04/22 - 18:40:27',
                    hint: 'Dernière édition le 21/04/22 - 18:40:27 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '92b8946d-c0a8-4ac2-875e-bd7c29a50483',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '92b8946d-c0a8-4ac2-875e-bd7c29a50483',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'fc298b05-dd60-4bdc-af4b-42a9d6655ce5',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'fc298b05-dd60-4bdc-af4b-42a9d6655ce5',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des réclamations (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M9 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '21/04/22 - 16:58:07',
                    hint: 'Dernière édition le 21/04/22 - 16:58:07 par Jérôme Molin',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'fc298b05-dd60-4bdc-af4b-42a9d6655ce5',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'fc298b05-dd60-4bdc-af4b-42a9d6655ce5',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '879521d3-f94e-4100-b1dc-af8e9a868c02',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '879521d3-f94e-4100-b1dc-af8e9a868c02',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligibilité/de risques dans le cadr... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M8 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '20/04/22 - 14:18:45',
                    hint: 'Dernière édition le 20/04/22 - 14:18:45 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '879521d3-f94e-4100-b1dc-af8e9a868c02',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '879521d3-f94e-4100-b1dc-af8e9a868c02',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '03dec0f2-3763-4586-810a-ad279b3fcaf3',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '03dec0f2-3763-4586-810a-ad279b3fcaf3',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des réclamations (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M8 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '20/04/22 - 14:14:51',
                    hint: 'Dernière édition le 20/04/22 - 14:14:51 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '03dec0f2-3763-4586-810a-ad279b3fcaf3',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '03dec0f2-3763-4586-810a-ad279b3fcaf3',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '145fb670-2e6c-4cb1-a41e-f6f99be6ef46',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '145fb670-2e6c-4cb1-a41e-f6f99be6ef46',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0005-Test pour les controles non realise (M)',
                    hint: 'Test pour les controles non realise',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M6 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '20/04/22 - 12:11:00',
                    hint: 'Dernière édition le 20/04/22 - 12:11:00 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '145fb670-2e6c-4cb1-a41e-f6f99be6ef46',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (0%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '145fb670-2e6c-4cb1-a41e-f6f99be6ef46',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'd8092528-95d7-4000-ab29-d1a91e463778',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'd8092528-95d7-4000-ab29-d1a91e463778',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligibilité/de risques dans le cadr... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M12 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '19/04/22 - 23:37:22',
                    hint: 'Dernière édition le 19/04/22 - 23:37:22 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'd8092528-95d7-4000-ab29-d1a91e463778',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (0%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'd8092528-95d7-4000-ab29-d1a91e463778',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'a0499777-8bc7-4cf9-8b12-e1b6d96acefb',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'a0499777-8bc7-4cf9-8b12-e1b6d96acefb',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligibilité/de risques dans le cadr... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M11 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '19/04/22 - 23:35:30',
                    hint: 'Dernière édition le 19/04/22 - 23:35:30 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'a0499777-8bc7-4cf9-8b12-e1b6d96acefb',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'a0499777-8bc7-4cf9-8b12-e1b6d96acefb',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'f9abcc11-3a2e-43df-b5a5-66f47395cba4',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f9abcc11-3a2e-43df-b5a5-66f47395cba4',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligibilité/de risques dans le cadr... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M10 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '19/04/22 - 23:29:22',
                    hint: 'Dernière édition le 19/04/22 - 23:29:22 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f9abcc11-3a2e-43df-b5a5-66f47395cba4',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f9abcc11-3a2e-43df-b5a5-66f47395cba4',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '2d322150-5bbc-4c43-bd7a-bbae4e9f08dd',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2d322150-5bbc-4c43-bd7a-bbae4e9f08dd',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligibilité/de risques dans le cadr... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M7 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '19/04/22 - 23:23:42',
                    hint: 'Dernière édition le 19/04/22 - 23:23:42 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2d322150-5bbc-4c43-bd7a-bbae4e9f08dd',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2d322150-5bbc-4c43-bd7a-bbae4e9f08dd',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '9a026d29-9ba8-4543-8a97-589cd3bb0d9e',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '9a026d29-9ba8-4543-8a97-589cd3bb0d9e',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligibilité/de risques dans le cadr... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M6 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '19/04/22 - 23:18:07',
                    hint: 'Dernière édition le 19/04/22 - 23:18:07 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '9a026d29-9ba8-4543-8a97-589cd3bb0d9e',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '9a026d29-9ba8-4543-8a97-589cd3bb0d9e',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '86f5e013-e8af-4c53-9831-84d491af4589',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '86f5e013-e8af-4c53-9831-84d491af4589',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0005-Test pour les controles non realise (M)',
                    hint: 'Test pour les controles non realise',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M10 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '19/04/22 - 15:17:10',
                    hint: 'Dernière édition le 19/04/22 - 15:17:10 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '86f5e013-e8af-4c53-9831-84d491af4589',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '86f5e013-e8af-4c53-9831-84d491af4589',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'b7c85d2f-a175-4fd6-a8ae-1205801e73eb',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b7c85d2f-a175-4fd6-a8ae-1205801e73eb',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des réclamations (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M7 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '19/04/22 - 15:06:26',
                    hint: 'Dernière édition le 19/04/22 - 15:06:26 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b7c85d2f-a175-4fd6-a8ae-1205801e73eb',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b7c85d2f-a175-4fd6-a8ae-1205801e73eb',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '37b9a7e4-58d7-4251-aecf-05b7ee2dcfa8',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '37b9a7e4-58d7-4251-aecf-05b7ee2dcfa8',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0007-Contrôle du respect des critères d\'éligibilité/de risques dans le cadr... (M)',
                    hint: "Contrôle du respect des critères d'éligibilité/de risques dans le cadre de la gestion des opérations de financement digitalisés",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M5 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '15/04/22 - 09:15:39',
                    hint: 'Dernière édition le 15/04/22 - 09:15:39 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '37b9a7e4-58d7-4251-aecf-05b7ee2dcfa8',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '37b9a7e4-58d7-4251-aecf-05b7ee2dcfa8',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '330440cc-6b50-4000-ba0d-5307c76764cc',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '330440cc-6b50-4000-ba0d-5307c76764cc',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0005-Test pour les controles non realise (M)',
                    hint: 'Test pour les controles non realise',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M8 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '14/04/22 - 17:16:36',
                    hint: 'Dernière édition le 14/04/22 - 17:16:36 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '330440cc-6b50-4000-ba0d-5307c76764cc',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '330440cc-6b50-4000-ba0d-5307c76764cc',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '2f4b5689-ae98-4780-b90c-bebeea3276ff',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2f4b5689-ae98-4780-b90c-bebeea3276ff',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T1 - 2026',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '14/04/22 - 15:41:05',
                    hint: 'Dernière édition le 14/04/22 - 15:41:05 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2f4b5689-ae98-4780-b90c-bebeea3276ff',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2f4b5689-ae98-4780-b90c-bebeea3276ff',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '8dd2268a-3996-4376-9ba8-1b5af668e279',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '8dd2268a-3996-4376-9ba8-1b5af668e279',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0002-Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A) (A)',
                    hint: 'Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A)',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2029',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '13/04/22 - 15:08:51',
                    hint: 'Dernière édition le 13/04/22 - 15:08:51 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '8dd2268a-3996-4376-9ba8-1b5af668e279',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '8dd2268a-3996-4376-9ba8-1b5af668e279',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'db1ca1b7-c621-425a-80d7-4fa28bec789d',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'db1ca1b7-c621-425a-80d7-4fa28bec789d',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0002-Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A) (A)',
                    hint: 'Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A)',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2028',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '13/04/22 - 15:06:17',
                    hint: 'Dernière édition le 13/04/22 - 15:06:17 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'db1ca1b7-c621-425a-80d7-4fa28bec789d',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'db1ca1b7-c621-425a-80d7-4fa28bec789d',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '736a93d0-daee-450d-a5af-dfd2b1b7d9bf',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '736a93d0-daee-450d-a5af-dfd2b1b7d9bf',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0002-Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A) (A)',
                    hint: 'Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A)',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2027',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '13/04/22 - 15:01:59',
                    hint: 'Dernière édition le 13/04/22 - 15:01:59 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '736a93d0-daee-450d-a5af-dfd2b1b7d9bf',
                      },
                    },
                    content: null,
                    hint: 'Globalement satisfaisant (90%)',
                    icon: {
                      color: '#FFFF00',
                      ref: 'SentimentNeutral',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '736a93d0-daee-450d-a5af-dfd2b1b7d9bf',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'e7d6db6f-ae56-4292-ad1b-2d2a8a30af35',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'e7d6db6f-ae56-4292-ad1b-2d2a8a30af35',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0002-Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A) (A)',
                    hint: 'Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A)',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2025',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '13/04/22 - 14:59:11',
                    hint: 'Dernière édition le 13/04/22 - 14:59:11 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'e7d6db6f-ae56-4292-ad1b-2d2a8a30af35',
                      },
                    },
                    content: null,
                    hint: 'Globalement satisfaisant (90%)',
                    icon: {
                      color: '#FFFF00',
                      ref: 'SentimentNeutral',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'e7d6db6f-ae56-4292-ad1b-2d2a8a30af35',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '6e364967-2d74-4e8b-8a7d-a9b4a667c374',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '6e364967-2d74-4e8b-8a7d-a9b4a667c374',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T1 - 2025',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '13/04/22 - 14:44:21',
                    hint: 'Dernière édition le 13/04/22 - 14:44:21 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '6e364967-2d74-4e8b-8a7d-a9b4a667c374',
                      },
                    },
                    content: null,
                    hint: 'Globalement satisfaisant (90%)',
                    icon: {
                      color: '#FFFF00',
                      ref: 'SentimentNeutral',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '6e364967-2d74-4e8b-8a7d-a9b4a667c374',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '232fb430-f613-46fe-918c-a33d1e494a4a',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '232fb430-f613-46fe-918c-a33d1e494a4a',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0004-Contrôle de la communication du rapport annuel, concernant la représen... (A)',
                    hint: "Contrôle de la communication du rapport annuel, concernant la représentation d'intérêt, à la haute autorité pour la transparence de la vie publique (HATVP)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2026',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '13/04/22 - 14:43:39',
                    hint: 'Dernière édition le 13/04/22 - 14:43:39 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '232fb430-f613-46fe-918c-a33d1e494a4a',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (0%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '232fb430-f613-46fe-918c-a33d1e494a4a',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '84c2e11a-5e7d-4c44-9a9e-1dab3463edb1',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '84c2e11a-5e7d-4c44-9a9e-1dab3463edb1',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T3 - 2025',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '13/04/22 - 14:42:22',
                    hint: 'Dernière édition le 13/04/22 - 14:42:22 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '84c2e11a-5e7d-4c44-9a9e-1dab3463edb1',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '84c2e11a-5e7d-4c44-9a9e-1dab3463edb1',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'b4907bf5-abf0-40d5-93ab-fcb8b9756456',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b4907bf5-abf0-40d5-93ab-fcb8b9756456',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0004-Contrôle de la communication du rapport annuel, concernant la représen... (A)',
                    hint: "Contrôle de la communication du rapport annuel, concernant la représentation d'intérêt, à la haute autorité pour la transparence de la vie publique (HATVP)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '13/04/22 - 14:39:50',
                    hint: 'Dernière édition le 13/04/22 - 14:39:50 par Elodie Yabas',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b4907bf5-abf0-40d5-93ab-fcb8b9756456',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b4907bf5-abf0-40d5-93ab-fcb8b9756456',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '426a6e1c-d70c-4faa-8e53-6c83ff67a872',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '426a6e1c-d70c-4faa-8e53-6c83ff67a872',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0005-Test pour les controles non realise (M)',
                    hint: 'Test pour les controles non realise',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M5 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '12/04/22 - 17:26:22',
                    hint: 'Dernière édition le 12/04/22 - 17:26:22 par Jérôme Superviseur',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '426a6e1c-d70c-4faa-8e53-6c83ff67a872',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '426a6e1c-d70c-4faa-8e53-6c83ff67a872',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '89730f74-6340-4964-a45a-db9c24f05f0f',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '89730f74-6340-4964-a45a-db9c24f05f0f',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des réclamations (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M5 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '12/04/22 - 16:46:00',
                    hint: 'Dernière édition le 12/04/22 - 16:46:00 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '89730f74-6340-4964-a45a-db9c24f05f0f',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '89730f74-6340-4964-a45a-db9c24f05f0f',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '8c03cb19-2d2e-4e49-a89b-cd20d1bdcd06',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '8c03cb19-2d2e-4e49-a89b-cd20d1bdcd06',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des réclamations (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M5 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '12/04/22 - 16:37:37',
                    hint: 'Dernière édition le 12/04/22 - 16:37:37 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '8c03cb19-2d2e-4e49-a89b-cd20d1bdcd06',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '8c03cb19-2d2e-4e49-a89b-cd20d1bdcd06',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '05ef851e-df8e-4072-b856-379ea94a552b',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '05ef851e-df8e-4072-b856-379ea94a552b',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">DIRECTION DU RESEAU DIGITAL</p>LOD1_0006-Contrôle de la correcte gestion des réclamations (M)',
                    hint: 'Contrôle de la correcte gestion des réclamations',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M6 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '12/04/22 - 15:58:18',
                    hint: 'Dernière édition le 12/04/22 - 15:58:18 par Jérôme Déclarant',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '05ef851e-df8e-4072-b856-379ea94a552b',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (0%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '05ef851e-df8e-4072-b856-379ea94a552b',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'f47f28b2-98c9-48e5-bfc3-27350673b58a',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f47f28b2-98c9-48e5-bfc3-27350673b58a',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T4 - 2024',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '11/04/22 - 15:01:23',
                    hint: 'Dernière édition le 11/04/22 - 15:01:23 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f47f28b2-98c9-48e5-bfc3-27350673b58a',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f47f28b2-98c9-48e5-bfc3-27350673b58a',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c05a62a8-6303-450d-86b6-251dac729d60',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'c05a62a8-6303-450d-86b6-251dac729d60',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0002-Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A) (A)',
                    hint: 'Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A)',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2024',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '08/04/22 - 16:07:02',
                    hint: 'Dernière édition le 08/04/22 - 16:07:02 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'c05a62a8-6303-450d-86b6-251dac729d60',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (30%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'c05a62a8-6303-450d-86b6-251dac729d60',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '172955d1-8d3e-4948-a186-21aad841531c',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '172955d1-8d3e-4948-a186-21aad841531c',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T3 - 2024',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/04/22 - 18:16:58',
                    hint: 'Dernière édition le 06/04/22 - 18:16:58 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '172955d1-8d3e-4948-a186-21aad841531c',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '172955d1-8d3e-4948-a186-21aad841531c',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '13d94dac-29bb-47dd-ab59-e46d5b87d46b',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '13d94dac-29bb-47dd-ab59-e46d5b87d46b',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T2 - 2024',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/04/22 - 17:12:32',
                    hint: 'Dernière édition le 06/04/22 - 17:12:32 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '13d94dac-29bb-47dd-ab59-e46d5b87d46b',
                      },
                    },
                    content: null,
                    hint: 'Globalement satisfaisant (90%)',
                    icon: {
                      color: '#FFFF00',
                      ref: 'SentimentNeutral',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '13d94dac-29bb-47dd-ab59-e46d5b87d46b',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '2d162266-b6fd-4f54-9f6e-2ffdceff6ae9',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2d162266-b6fd-4f54-9f6e-2ffdceff6ae9',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T1 - 2024',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/04/22 - 15:24:23',
                    hint: 'Dernière édition le 06/04/22 - 15:24:23 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2d162266-b6fd-4f54-9f6e-2ffdceff6ae9',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2d162266-b6fd-4f54-9f6e-2ffdceff6ae9',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'e890edc9-7e93-44c4-a048-b4ddc615ecb3',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'e890edc9-7e93-44c4-a048-b4ddc615ecb3',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0005-Test pour les controles non realise (M)',
                    hint: 'Test pour les controles non realise',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'M7 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/04/22 - 10:53:09',
                    hint: 'Dernière édition le 06/04/22 - 10:53:09 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'e890edc9-7e93-44c4-a048-b4ddc615ecb3',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'e890edc9-7e93-44c4-a048-b4ddc615ecb3',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '1d1abd70-3095-4ced-bf76-b67e13d469cd',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '1d1abd70-3095-4ced-bf76-b67e13d469cd',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T4 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '23/03/22 - 09:32:50',
                    hint: 'Dernière édition le 23/03/22 - 09:32:50 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '1d1abd70-3095-4ced-bf76-b67e13d469cd',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (0%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '1d1abd70-3095-4ced-bf76-b67e13d469cd',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '52d0b5e3-4165-41f2-9aae-72d4f8a57509',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '52d0b5e3-4165-41f2-9aae-72d4f8a57509',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0002-Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A) (A)',
                    hint: 'Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A)',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2026',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '22/03/22 - 23:59:07',
                    hint: 'Dernière édition le 22/03/22 - 23:59:07 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '52d0b5e3-4165-41f2-9aae-72d4f8a57509',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '52d0b5e3-4165-41f2-9aae-72d4f8a57509',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '17256082-aea6-4291-9884-54a2b3bce873',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '17256082-aea6-4291-9884-54a2b3bce873',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T4 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '22/03/22 - 11:28:06',
                    hint: 'Dernière édition le 22/03/22 - 11:28:06 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '17256082-aea6-4291-9884-54a2b3bce873',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (0%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '17256082-aea6-4291-9884-54a2b3bce873',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '18b7b7af-b268-4774-b32b-caa9905b328b',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '18b7b7af-b268-4774-b32b-caa9905b328b',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T3 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '22/03/22 - 10:28:19',
                    hint: 'Dernière édition le 22/03/22 - 10:28:19 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '18b7b7af-b268-4774-b32b-caa9905b328b',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (0%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '18b7b7af-b268-4774-b32b-caa9905b328b',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '9f434497-05af-4115-ad66-2d171c352ec1',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '9f434497-05af-4115-ad66-2d171c352ec1',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T2 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '22/03/22 - 10:27:19',
                    hint: 'Dernière édition le 22/03/22 - 10:27:19 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '9f434497-05af-4115-ad66-2d171c352ec1',
                      },
                    },
                    content: null,
                    hint: 'Globalement satisfaisant (90%)',
                    icon: {
                      color: '#FFFF00',
                      ref: 'SentimentNeutral',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '9f434497-05af-4115-ad66-2d171c352ec1',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'a622fdab-3422-4bc0-8ccc-eac014747f04',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'a622fdab-3422-4bc0-8ccc-eac014747f04',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T1 - 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '22/03/22 - 10:26:24',
                    hint: 'Dernière édition le 22/03/22 - 10:26:24 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'a622fdab-3422-4bc0-8ccc-eac014747f04',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'a622fdab-3422-4bc0-8ccc-eac014747f04',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'ca4822f0-61c1-4833-a7f3-057f50d5a848',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'ca4822f0-61c1-4833-a7f3-057f50d5a848',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T2 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '22/03/22 - 10:25:28',
                    hint: 'Dernière édition le 22/03/22 - 10:25:28 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'ca4822f0-61c1-4833-a7f3-057f50d5a848',
                      },
                    },
                    content: null,
                    hint: 'Très Satisfaisant (100%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'ca4822f0-61c1-4833-a7f3-057f50d5a848',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '30c53027-fbf4-4b65-89b6-b1e8c9d90019',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '30c53027-fbf4-4b65-89b6-b1e8c9d90019',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0002-Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A) (A)',
                    hint: 'Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A)',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2023',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '22/03/22 - 10:06:38',
                    hint: 'Dernière édition le 22/03/22 - 10:06:38 par Nicolas Mullier',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '30c53027-fbf4-4b65-89b6-b1e8c9d90019',
                      },
                    },
                    content: null,
                    hint: 'Globalement satisfaisant (92%)',
                    icon: {
                      color: '#FFFF00',
                      ref: 'SentimentNeutral',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '30c53027-fbf4-4b65-89b6-b1e8c9d90019',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'f3a86a3d-d314-4996-8ccf-97e27e98b70f',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f3a86a3d-d314-4996-8ccf-97e27e98b70f',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0002-Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A) (A)',
                    hint: 'Contrôle de la mise en œuvre du dispositif Prêt Etudiant (A)',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '18/03/22 - 13:05:45',
                    hint: 'Dernière édition le 18/03/22 - 13:05:45 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f3a86a3d-d314-4996-8ccf-97e27e98b70f',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f3a86a3d-d314-4996-8ccf-97e27e98b70f',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'bb467a6b-08fd-4f30-8707-aa4cb9c25dc1',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'bb467a6b-08fd-4f30-8707-aa4cb9c25dc1',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS INSTITUTIONNELLES</p>LOD1_0004-Contrôle de la communication du rapport annuel, concernant la représen... (A)',
                    hint: "Contrôle de la communication du rapport annuel, concernant la représentation d'intérêt, à la haute autorité pour la transparence de la vie publique (HATVP)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'An. 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '11/03/22 - 10:53:58',
                    hint: 'Dernière édition le 11/03/22 - 10:53:58 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'bb467a6b-08fd-4f30-8707-aa4cb9c25dc1',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (0%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'bb467a6b-08fd-4f30-8707-aa4cb9c25dc1',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'efa5029c-47e3-4a2c-afc4-7b564994c3e7',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'efa5029c-47e3-4a2c-afc4-7b564994c3e7',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">RELATIONS MEDIAS</p>LOD1_0003-Contrôle préalable à la publication d\'un communiqué de presse yc sur l... (T)',
                    hint: "Contrôle préalable à la publication d'un communiqué de presse yc sur le site site presse Bpifrance (échantillon)",
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'T3 - 2022',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '11/03/22 - 10:14:36',
                    hint: 'Dernière édition le 11/03/22 - 10:14:36 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'efa5029c-47e3-4a2c-afc4-7b564994c3e7',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (0%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'efa5029c-47e3-4a2c-afc4-7b564994c3e7',
                      },
                    },
                    content: null,
                    hint: 'Visualiser',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#2ECC71',
            font_color: '#FFFFFF',
            lib: 'Derniers contrôles exécutés',
          },
        },
      ],
      visible: true,
    },
    metrics: {
      indicator: [
        {
          bg_color: '#DFE7E8',
          color: '#2ECC71',
          hint: "Taux d'avancement : 15 cas réalisés / 15 cas prévus au plan = 100.0%",
          info: "Le taux d'avancement correspond au nombre de contrôles réalisés divisé par le nombre total de contrôle attendu sur l'année en cours",
          lib: "Taux d'avancement",
          style: 'linear',
          value: 100,
        },
        {
          bg_color: '#DFE7E8',
          color: '#F21137',
          hint: 'Taux de Conformité (Σ résultat des contrôles /  Nb de contrôles) : 38.37 / 83 = 46.2%',
          info: "Le taux de conformité correspond à la moyenne des résultats des contrôles effectués sur l'année en cours",
          lib: 'Taux de Conformité',
          style: 'linear',
          value: 46,
        },
      ],
      visible: true,
    },
    search_bar: {
      btn_lib: 'Rechercher',
      options: [
        {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_kl?value=',
            method: 'GET',
            params: null,
          },
          lib: 'Rechercher un contrôle',
          placeholder: 'Référence ou Nom du contrôle',
          regex: null,
          regex_msg: null,
        },
      ],
      search_bar: true,
    },
    subtitle: {
      font_color: '#ED9532',
      font_size: '12px',
      lib: 'Bpifrance LOD 1',
      visible: false,
    },
    title: {
      font_color: '#4E3F43',
      font_size: '14px',
      lib: 'BPI LOD 1',
      visible: false,
    },
  },
};

export const DASHBOARD_KLESIA = {
  data: {
    btns: [
      {
        action: {
          endpoint: '/tempo/reinit_bdd',
          method: 'POST',
          params: null,
        },
        bg_color: '#d12b02',
        btn_lib: 'Réinitialiser la Base de Données',
        font_color: '#d12b02',
        hover_color: '#d12b02',
      },
      {
        action: {
          endpoint: '/modal/test',
          method: 'GET',
          params: null,
        },
        bg_color: '#666666',
        btn_lib: 'Modale Test',
        font_color: '#666666',
        hover_color: '#666666',
      },
      {
        action: {
          endpoint: '/tempo/display_dashboard',
          method: 'GET',
          params: null,
        },
        bg_color: '#666666',
        btn_lib: 'Error 500',
        font_color: '#666666',
        hover_color: '#666666',
      },
    ],
    cards: {
      card: [
        {
          cols: {
            header_visible: false,
            values: [
              {
                border_right: true,
                dataKey: 'Contrôle',
                label: 'Contrôle',
                width: 650,
              },
              {
                border_right: true,
                dataKey: 'Date',
                label: 'Date',
                width: 120,
              },
              {
                border_right: false,
                dataKey: 'Etat',
                label: 'Etat',
                width: 80,
              },
              {
                border_right: false,
                dataKey: '+',
                label: '+',
                width: 80,
              },
              {
                border_right: false,
                dataKey: 'BI',
                label: 'BI',
                width: 80,
              },
              {
                border_right: false,
                dataKey: 'Clôture',
                label: 'Clôture',
                width: 80,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022 ; Réalisé: 0/8</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '--/--/--',
                    hint: 'Aucun cas pour ce contrôle',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Taux de Qualité : N/A',
                    icon: {
                      color: '#CCCCCC',
                      ref: 'Dangerous',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                      },
                    },
                    content: null,
                    hint: 'Nouveau cas pour la période "T1 - 2022"',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: null,
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/modal/confirm_period_close',
                      method: 'GET',
                      params: {
                        cp_uuid: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                      },
                    },
                    content: null,
                    hint: 'Clôturer la période "T1 - 2022" pour ce contrôle',
                    icon: {
                      color: '#66499c',
                      ref: 'HighlightOff',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '283fa368-7798-474a-90b8-c63e561192e3',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contraintes de gestion taux</p><p style="color:red; font-weight:bold;">T1 - 2022 ; Réalisé: 2/8</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contraintes de gestion taux',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '22/04/22',
                    hint: 'Dernière mise à jour le 22/04/22 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Taux de Qualité : 0%',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '283fa368-7798-474a-90b8-c63e561192e3',
                      },
                    },
                    content: null,
                    hint: 'Nouveau cas pour la période "T1 - 2022"',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/contr_perm/get_search_ctrl_done',
                      method: 'GET',
                      params: {
                        value: '283fa368-7798-474a-90b8-c63e561192e3',
                      },
                    },
                    content: null,
                    hint: 'Liste des contrôles',
                    icon: {
                      color: '#66499c',
                      ref: 'Assessment',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/modal/confirm_period_close',
                      method: 'GET',
                      params: {
                        cp_uuid: '283fa368-7798-474a-90b8-c63e561192e3',
                      },
                    },
                    content: null,
                    hint: 'Clôturer la période "T1 - 2022" pour ce contrôle',
                    icon: {
                      color: '#66499c',
                      ref: 'HighlightOff',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '70b54ae9-118f-4b7d-b35e-33cc50fed5da',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p>T2 - 2022 ; Réalisé: 0/8</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '--/--/--',
                    hint: 'Aucun cas pour ce contrôle',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Taux de Qualité : N/A',
                    icon: {
                      color: '#CCCCCC',
                      ref: 'Dangerous',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: '70b54ae9-118f-4b7d-b35e-33cc50fed5da',
                      },
                    },
                    content: null,
                    hint: 'Nouveau cas pour la période "T2 - 2022"',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: null,
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/modal/confirm_period_close',
                      method: 'GET',
                      params: {
                        cp_uuid: '70b54ae9-118f-4b7d-b35e-33cc50fed5da',
                      },
                    },
                    content: null,
                    hint: 'Clôturer la période "T2 - 2022" pour ce contrôle',
                    icon: {
                      color: '#66499c',
                      ref: 'HighlightOff',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'a6d42f79-a1f6-448e-a67d-e6caf939fa5d',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contraintes de gestion taux</p><p>T2 - 2022 ; Réalisé: 0/8</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contraintes de gestion taux',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '--/--/--',
                    hint: 'Aucun cas pour ce contrôle',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Taux de Qualité : N/A',
                    icon: {
                      color: '#CCCCCC',
                      ref: 'Dangerous',
                      size: 12,
                    },
                  },
                  {
                    action: {
                      endpoint: '/edit/new_ctrl_file',
                      method: 'GET',
                      params: {
                        cp_uuid: 'a6d42f79-a1f6-448e-a67d-e6caf939fa5d',
                      },
                    },
                    content: null,
                    hint: 'Nouveau cas pour la période "T2 - 2022"',
                    icon: {
                      color: '#66499c',
                      ref: 'CreateNewFolder',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: null,
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/modal/confirm_period_close',
                      method: 'GET',
                      params: {
                        cp_uuid: 'a6d42f79-a1f6-448e-a67d-e6caf939fa5d',
                      },
                    },
                    content: null,
                    hint: 'Clôturer la période "T2 - 2022" pour ce contrôle',
                    icon: {
                      color: '#66499c',
                      ref: 'HighlightOff',
                      size: 12,
                    },
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#7f32a8',
            font_color: '#FFFFFF',
            lib: '4 Contrôles à Réaliser',
          },
        },
        {
          cols: {
            header_visible: false,
            values: [
              {
                border_right: true,
                dataKey: 'Contrôle',
                label: 'Contrôle',
                width: 650,
              },
              {
                border_right: true,
                dataKey: 'Support',
                label: 'Support',
                width: 250,
              },
              {
                border_right: false,
                dataKey: 'Consulter',
                label: 'Consulter',
                width: 100,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 01/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '08a4c314-b1ba-490b-87e9-b22b99f3a262',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 02/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '1e79e258-7e8c-434d-aebf-fb314d8cf7fe',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 04/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '0ef4036b-2cbc-49c0-9c40-a11e80a93001',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 04/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '60e09356-837b-4d73-9398-00b550fa7d5f',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 05/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '845d8007-8e21-464f-97f7-de732ffe6835',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 05/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2d153d46-0354-45d1-a4bc-b72fb619cb8f',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 06/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '83b02d6a-9f4f-4b53-b087-2dcbf8882117',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 06/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'fa1a62d6-eb19-4680-8f57-c3dd0c6bab0c',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 06/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '7a759b9e-35b6-441b-abe0-64c2ff811c51',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 13/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b49145dc-ec39-498b-b6c7-a15c2543042c',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 13/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '43adaf15-6402-450c-8933-35f78a1463d3',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 27/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '7742783e-bd98-4cee-b544-49f284bafe22',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 27/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'fc2e4535-a8c1-4c9c-af10-aabf86f52cf6',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c6f5b063-d386-43d7-9ebc-6c0540637da0',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contrôle des contraintes de gestion actions</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contrôle des contraintes de gestion actions',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 28/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'ebfd00a5-9f4f-49aa-8483-78c9aa1ed7bf',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '283fa368-7798-474a-90b8-c63e561192e3',
                item: [
                  {
                    action: null,
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">M02-01-01 KL Profil de risques</p><p>Contraintes de gestion taux</p><p style="color:red; font-weight:bold;">T1 - 2022</p>',
                    hint: 'M02-01-01 KL Profil de risques => Contraintes de gestion taux',
                    icon: null,
                  },
                  {
                    action: null,
                    content: null,
                    hint: 'Edité le 28/04/22',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'cf200964-dbc3-4af5-a093-d2bfaaf00e44',
                      },
                    },
                    content: null,
                    hint: 'Editer',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#EB4D0D',
            font_color: '#FFFFFF',
            lib: '15 Contrôles - Brouillon',
          },
        },
      ],
      visible: true,
    },
    metrics: {
      indicator: [
        {
          bg_color: '#DFE7E8',
          color: '#F21137',
          hint: 'Taux de Couverture : 2 cas réalisés / 32 cas prévus au plan = 6.2%',
          info: "Le taux de couverture du plan : indicateur de suivi de l'avancement de la réalisation des volumes prévisionnels de contrôle. Il permet d'apprécier le respect du plan annuel. Le taux de couverture doit être maintenu à 100%.",
          lib: 'Taux de Couverture',
          style: 'linear',
          value: 6,
        },
        {
          bg_color: '#DFE7E8',
          color: '#F21137',
          hint: 'Taux de Qualité : 0 cas conformes / 2 cas réalisés = 0.0%',
          info: "Le taux de qualité des contrôles réalisés : indicateur du suivi de la qualité. Il permet d'apprécier le niveau de qualité des activités. Le taux de qualité à atteindre est défini chaque année par la Direction Générale.",
          lib: 'Taux de Qualité',
          style: 'linear',
          value: 0,
        },
        {
          bg_color: '#DFE7E8',
          color: '#F21137',
          hint: 'Taux de Correction : 1 cas corrigés / 2 cas non-conformes = 50.0%',
          info: 'Le taux de dossiers corrigés : indicateur de suivi des corrections des dossiers non-conformes. Il permet de suivre les corrections à apporter aux dossiers en anomalie. Le taux de dossiers corrigés doit être maintenu à 100%.',
          lib: 'Taux de Correction',
          style: 'linear',
          value: 50,
        },
      ],
      visible: true,
    },
    search_bar: {
      btn_lib: 'Lancer la recherche',
      options: [
        {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_kl?value=',
            method: 'GET',
            params: null,
          },
          lib: 'Rechercher un contrôle',
          placeholder: 'Référence ou Nom du contrôle',
          regex: null,
          regex_msg: null,
        },
      ],
      search_bar: true,
    },
    subtitle: {
      font_color: '#ED9532',
      font_size: '12px',
      lib: "Assureur d'Intérêt Général",
      visible: false,
    },
    title: {
      font_color: '#4E3F43',
      font_size: '14px',
      lib: 'Klesia',
      visible: false,
    },
  },
};
export const DASHBOARD_CHANTIER_ABC = {
  data: {
    btns: [],
    cards: {
      card: [
        {
          cols: {
            header_visible: false,
            values: [
              {
                border_right: true,
                dataKey: 'Chantier',
                label: 'Chantier',
                width: 275,
              },
              {
                border_right: true,
                dataKey: 'Création',
                label: 'Création',
                width: 150,
              },
              {
                border_right: true,
                dataKey: 'U.O. Rattachement',
                label: 'U.O. Rattachement',
                width: 275,
              },
              {
                border_right: false,
                dataKey: '% Complétude',
                label: '% Complétude',
                width: 85,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: 'd67b5ce9-6ef5-4cc9-8199-c905af6be218',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'd67b5ce9-6ef5-4cc9-8199-c905af6be218',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Vannes</p><p>Résidence 11</p>',
                    hint: 'Vannes',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '21/03/22',
                    hint: 'Déclaration chantier le 21/03/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Icade',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'd67b5ce9-6ef5-4cc9-8199-c905af6be218',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (30%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'c8530868-8b50-4ea2-a3f0-1a7b1d11d513',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'c8530868-8b50-4ea2-a3f0-1a7b1d11d513',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Toulouse</p><p>Villa Dumond</p>',
                    hint: 'Toulouse',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '21/03/22',
                    hint: 'Déclaration chantier le 21/03/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Kaufman & Broad',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'c8530868-8b50-4ea2-a3f0-1a7b1d11d513',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '62f2d825-8406-4abc-b5e1-51bc64b985d8',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '62f2d825-8406-4abc-b5e1-51bc64b985d8',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Rennes</p><p>Le 65</p>',
                    hint: 'Rennes',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '21/03/22',
                    hint: 'Déclaration chantier le 21/03/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Icade',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '62f2d825-8406-4abc-b5e1-51bc64b985d8',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '2e7e0fde-8369-438d-963b-b2a999a1a9e7',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2e7e0fde-8369-438d-963b-b2a999a1a9e7',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Toulon</p><p>Projet AB42</p>',
                    hint: 'Toulon',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '26/03/22',
                    hint: 'Déclaration chantier le 26/03/22 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Icade',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '2e7e0fde-8369-438d-963b-b2a999a1a9e7',
                      },
                    },
                    content: null,
                    hint: 'Bon (70%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '998e05f2-d618-49af-a8ca-9eb5c5447f5d',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '998e05f2-d618-49af-a8ca-9eb5c5447f5d',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Reims</p><p>Le Champagne</p>',
                    hint: 'Reims',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '26/03/22',
                    hint: 'Déclaration chantier le 26/03/22 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Icade',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '998e05f2-d618-49af-a8ca-9eb5c5447f5d',
                      },
                    },
                    content: null,
                    hint: 'Bon (90%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '3e642520-00bf-4792-9070-480381421191',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '3e642520-00bf-4792-9070-480381421191',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">test</p><p>test</p>',
                    hint: 'test',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '29/03/22',
                    hint: 'Déclaration chantier le 29/03/22 par Nicolas Teysseyre',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Nord Midi Pyrénées - DPO',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '3e642520-00bf-4792-9070-480381421191',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (40%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'f8de1823-cee3-47fe-acd5-e2b9123eaf46',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f8de1823-cee3-47fe-acd5-e2b9123eaf46',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Vincennes</p><p>Rue Gambetta</p>',
                    hint: 'Vincennes',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '29/03/22',
                    hint: 'Déclaration chantier le 29/03/22 par Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Kaufman & Broad',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f8de1823-cee3-47fe-acd5-e2b9123eaf46',
                      },
                    },
                    content: null,
                    hint: 'Bon (80%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '9953b690-819b-4f98-870d-65e21695b777',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '9953b690-819b-4f98-870d-65e21695b777',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Immeuble 34</p><p>CODE34</p>',
                    hint: 'Immeuble 34',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '29/03/22',
                    hint: 'Déclaration chantier le 29/03/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Client Chantier ABC',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '9953b690-819b-4f98-870d-65e21695b777',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (50%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'f31c6165-518c-4fbf-92ce-5f9fbba79f9c',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f31c6165-518c-4fbf-92ce-5f9fbba79f9c',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Hotel ABC</p><p>ABD</p>',
                    hint: 'Hotel ABC',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '30/03/22',
                    hint: 'Déclaration chantier le 30/03/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Client Chantier ABC',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'f31c6165-518c-4fbf-92ce-5f9fbba79f9c',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (0%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '212a0d54-1439-4536-b8c0-ec3aa2a7ebe9',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '212a0d54-1439-4536-b8c0-ec3aa2a7ebe9',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Test</p><p></p>',
                    hint: 'Test',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '31/03/22',
                    hint: 'Déclaration chantier le 31/03/22 par Nicolas Teysseyre',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Centre Est - DPO',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '212a0d54-1439-4536-b8c0-ec3aa2a7ebe9',
                      },
                    },
                    content: null,
                    hint: 'Bon (70%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '9d485eaf-4d25-4c86-ad5c-fd6ea54ddb49',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '9d485eaf-4d25-4c86-ad5c-fd6ea54ddb49',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">test</p><p></p>',
                    hint: 'test',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '01/04/22',
                    hint: 'Déclaration chantier le 01/04/22 par Nicolas Teysseyre',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Centre Est - DPO',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '9d485eaf-4d25-4c86-ad5c-fd6ea54ddb49',
                      },
                    },
                    content: null,
                    hint: 'A améliorer (40%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'b41d73d7-9271-4ea4-8240-274d80095d57',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b41d73d7-9271-4ea4-8240-274d80095d57',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Bonneuil</p><p></p>',
                    hint: 'Bonneuil',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/04/22',
                    hint: 'Déclaration chantier le 06/04/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Icade',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b41d73d7-9271-4ea4-8240-274d80095d57',
                      },
                    },
                    content: null,
                    hint: 'Bon (90%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '34db58a6-310a-4e94-b3bf-8e6f35d511b8',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '34db58a6-310a-4e94-b3bf-8e6f35d511b8',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Lyon</p><p></p>',
                    hint: 'Lyon',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/04/22',
                    hint: 'Déclaration chantier le 06/04/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Corse - CISO',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '34db58a6-310a-4e94-b3bf-8e6f35d511b8',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (20%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#2ECC71',
            font_color: '#FFFFFF',
            lib: 'Chantiers en cours',
          },
        },
        {
          cols: {
            header_visible: false,
            values: [
              {
                border_right: true,
                dataKey: 'Chantier',
                label: 'Chantier',
                width: 317,
              },
              {
                border_right: true,
                dataKey: 'Création',
                label: 'Création',
                width: 150,
              },
              {
                border_right: false,
                dataKey: 'U.O. Rattachement',
                label: 'U.O. Rattachement',
                width: 318,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: '5f745bcf-941d-4181-b7e4-672b8c0e22f3',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '5f745bcf-941d-4181-b7e4-672b8c0e22f3',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Montreuil</p><p>Tour #23</p>',
                    hint: 'Montreuil',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '21/03/22',
                    hint: 'Déclaration chantier le 21/03/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Icade',
                    hint: null,
                    icon: null,
                  },
                ],
              },
              {
                id: 'e99551df-0d32-4152-8534-a3899dc15383',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'e99551df-0d32-4152-8534-a3899dc15383',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Perpignan</p><p>Lot 72</p>',
                    hint: 'Perpignan',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '21/03/22',
                    hint: 'Déclaration chantier le 21/03/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Kaufman & Broad',
                    hint: null,
                    icon: null,
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#28A586',
            font_color: '#FFFFFF',
            lib: 'Chantiers en attente de validation',
          },
        },
        {
          cols: {
            header_visible: false,
            values: [
              {
                border_right: true,
                dataKey: 'Chantier',
                label: 'Chantier',
                width: 317,
              },
              {
                border_right: true,
                dataKey: 'Création',
                label: 'Création',
                width: 150,
              },
              {
                border_right: false,
                dataKey: 'U.O. Rattachement',
                label: 'U.O. Rattachement',
                width: 318,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: '78942cf5-d093-4723-aaea-b4e720675c83',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '78942cf5-d093-4723-aaea-b4e720675c83',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Nice</p><p>55 Volga</p>',
                    hint: 'Nice',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '21/03/22',
                    hint: 'Déclaration chantier le 21/03/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Icade',
                    hint: null,
                    icon: null,
                  },
                ],
              },
              {
                id: 'd82bb617-abed-4483-9f8e-df1936b27c28',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'd82bb617-abed-4483-9f8e-df1936b27c28',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Valenciennes</p><p>Centre-ville</p>',
                    hint: 'Valenciennes',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '21/03/22',
                    hint: 'Déclaration chantier le 21/03/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Kaufman & Broad',
                    hint: null,
                    icon: null,
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#FF0000',
            font_color: '#FFFFFF',
            lib: 'Chantiers rejetés',
          },
        },
        {
          cols: {
            header_visible: true,
            values: [
              {
                border_right: true,
                dataKey: 'Chantier',
                label: 'Chantier',
                width: 40,
              },
              {
                border_right: true,
                dataKey: 'Création',
                label: 'Création',
                width: 30,
              },
              {
                border_right: true,
                dataKey: 'U.O. Rattachement',
                label: 'U.O. Rattachement',
                width: 30,
              },
              {
                border_right: false,
                dataKey: 'Nb Doc Manquant',
                label: 'Nb Doc Manquant',
                width: 20,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: 'b41d73d7-9271-4ea4-8240-274d80095d57',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b41d73d7-9271-4ea4-8240-274d80095d57',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Bonneuil</p><p></p>',
                    hint: 'Bonneuil',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/04/22',
                    hint: 'Déclaration chantier le 06/04/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Icade',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '6',
                    hint: null,
                    icon: null,
                  },
                ],
              },
              {
                id: 'c8530868-8b50-4ea2-a3f0-1a7b1d11d513',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'c8530868-8b50-4ea2-a3f0-1a7b1d11d513',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Toulouse</p><p>Villa Dumond</p>',
                    hint: 'Toulouse',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '21/03/22',
                    hint: 'Déclaration chantier le 21/03/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Kaufman & Broad',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '2',
                    hint: null,
                    icon: null,
                  },
                ],
              },
              {
                id: '34db58a6-310a-4e94-b3bf-8e6f35d511b8',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '34db58a6-310a-4e94-b3bf-8e6f35d511b8',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Lyon</p><p></p>',
                    hint: 'Lyon',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '06/04/22',
                    hint: 'Déclaration chantier le 06/04/22 par Chantal CARNEL',
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Corse - CISO',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: '8',
                    hint: null,
                    icon: null,
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#B12B67',
            font_color: '#FFFFFF',
            lib: 'Chantiers avec documents manquants',
          },
        },
      ],
      visible: true,
    },
    metrics: {
      indicator: [],
      visible: false,
    },
    search_bar: {
      btn_lib: 'Rechercher',
      options: [
        {
          action: {
            endpoint: '/worksite/search_worksite?value=',
            method: 'GET',
            params: null,
          },
          lib: 'Rechercher un chantier',
          placeholder: 'Référence ou Nom du chantier',
          regex: null,
          regex_msg: null,
        },
      ],
      search_bar: true,
    },
    subtitle: {
      'font-color': null,
      'font-size': null,
      lib: null,
      visible: false,
    },
    title: {
      'font-color': null,
      'font-size': null,
      lib: null,
      visible: false,
    },
  },
};
export const DASHBOARD_CNIM = {
  data: {
    btns: [],
    cards: {
      card: [
        {
          cols: {
            header_visible: true,
            values: [
              {
                border_right: true,
                dataKey: 'Contract',
                label: 'Contract',
                width: 500,
              },
              {
                border_right: true,
                dataKey: 'Last edit',
                label: 'Last edit',
                width: 100,
              },
              {
                border_right: true,
                dataKey: 'Status',
                label: 'Status',
                width: 100,
              },
              {
                border_right: true,
                dataKey: '% Progress',
                label: '% Progress',
                width: 100,
              },
              {
                border_right: false,
                dataKey: 'Scenario',
                label: 'Scenario',
                width: 100,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Créteil (CNIM - France)</p>',
                    hint: 'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '16/02/22',
                    hint: 'Last edit on 16/02/22 by Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                      },
                    },
                    content: null,
                    hint: 'To be improved (40%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '81%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/cnim/list_scenario',
                      method: 'GET',
                      params: {
                        contract: 'Créteil',
                        value: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                      },
                    },
                    content: null,
                    hint: 'Scenario List',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '1612895f-8cac-4812-8a3d-6b1e77b34f41',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '1612895f-8cac-4812-8a3d-6b1e77b34f41',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Lodz (CNIM - Poland)</p>',
                    hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '16/02/22',
                    hint: 'Last edit on 16/02/22 by Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '1612895f-8cac-4812-8a3d-6b1e77b34f41',
                      },
                    },
                    content: null,
                    hint: 'Unsatisfactory (20%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '47%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/cnim/list_scenario',
                      method: 'GET',
                      params: {
                        contract: 'Lodz',
                        value: '1612895f-8cac-4812-8a3d-6b1e77b34f41',
                      },
                    },
                    content: null,
                    hint: 'Scenario List',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '06165068-dde0-4979-91da-307196c6fce5',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '06165068-dde0-4979-91da-307196c6fce5',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Northbeck (UK) (CNIM - England)</p>',
                    hint: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '16/02/22',
                    hint: 'Last edit on 16/02/22 by Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '06165068-dde0-4979-91da-307196c6fce5',
                      },
                    },
                    content: null,
                    hint: 'To be improved (50%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '17%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/cnim/list_scenario',
                      method: 'GET',
                      params: {
                        contract: 'Northbeck (UK)',
                        value: '06165068-dde0-4979-91da-307196c6fce5',
                      },
                    },
                    content: null,
                    hint: 'Scenario List',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Tees Valley (CNIM - England)</p>',
                    hint: 'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ',
                    icon: null,
                  },
                  {
                    action: null,
                    content: '16/02/22',
                    hint: 'Last edit on 16/02/22 by Boris Horowitz',
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content: null,
                    hint: 'Good (90%)',
                    icon: {
                      color: '#00B456',
                      ref: 'SentimentVerySatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '42%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/cnim/list_scenario',
                      method: 'GET',
                      params: {
                        contract: 'Tees Valley',
                        value: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content: null,
                    hint: 'Scenario List',
                    icon: {
                      color: '#012557',
                      ref: 'FormatListBulleted',
                      size: 12,
                    },
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#2ECC71',
            font_color: '#FFFFFF',
            lib: 'Contracts in progress',
          },
        },
        {
          cols: {
            header_visible: true,
            values: [
              {
                border_right: true,
                dataKey: 'Contract',
                label: 'Contract',
                width: 180,
              },
              {
                border_right: true,
                dataKey: 'Risk',
                label: 'Risk',
                width: 180,
              },
              {
                border_right: true,
                dataKey: 'Status',
                label: 'Status',
                width: 90,
              },
              {
                border_right: true,
                dataKey: '% Progress',
                label: '% Progress',
                width: 90,
              },
              {
                border_right: true,
                dataKey: 'Validator',
                label: 'Validator',
                width: 180,
              },
              {
                border_right: false,
                dataKey: 'Edit',
                label: 'Edit',
                width: 80,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Tees Valley (CNIM - England)',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Contract Management',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content: null,
                    hint: 'To be improved (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '42%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Jean-Louis Leclair',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content: null,
                    hint: 'View contract',
                    icon: {
                      color: '#012557',
                      ref: 'Pageview',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Tees Valley (CNIM - England)',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Civil Work',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content: null,
                    hint: 'To be improved (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '42%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Alexis Boss',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content: null,
                    hint: 'View contract',
                    icon: {
                      color: '#012557',
                      ref: 'Pageview',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Créteil - (CNIM - France)',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Sourcing',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                      },
                    },
                    content: null,
                    hint: 'Unsatisfactory (20%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '81%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Jean-Louis Leclair',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                      },
                    },
                    content: null,
                    hint: 'View contract',
                    icon: {
                      color: '#012557',
                      ref: 'Pageview',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '06165068-dde0-4979-91da-307196c6fce5',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '06165068-dde0-4979-91da-307196c6fce5',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Northbeck (UK) (CNIM - England)',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Legal',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '06165068-dde0-4979-91da-307196c6fce5',
                      },
                    },
                    content: null,
                    hint: 'Unsatisfactory (30%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '17%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Emmanuel Collombier',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '06165068-dde0-4979-91da-307196c6fce5',
                      },
                    },
                    content: null,
                    hint: 'View contract',
                    icon: {
                      color: '#012557',
                      ref: 'Pageview',
                      size: 12,
                    },
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#3498DB',
            font_color: '#FFFFFF',
            lib: 'Contracts to be validated',
          },
        },
        {
          cols: {
            header_visible: true,
            values: [
              {
                border_right: true,
                dataKey: 'Contract',
                label: 'Contract',
                width: 180,
              },
              {
                border_right: true,
                dataKey: 'Risk',
                label: 'Risk',
                width: 180,
              },
              {
                border_right: true,
                dataKey: 'Status',
                label: 'Status',
                width: 90,
              },
              {
                border_right: true,
                dataKey: '% Progress',
                label: '% Progress',
                width: 90,
              },
              {
                border_right: true,
                dataKey: 'Rejected by',
                label: 'Rejected by',
                width: 180,
              },
              {
                border_right: false,
                dataKey: 'Edit',
                label: 'Edit',
                width: 80,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
              {
                id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Tees Valley (CNIM - England)',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Contract Management',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content: null,
                    hint: 'To be improved (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '42%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Jean-Louis Leclair',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content: null,
                    hint: 'View contract',
                    icon: {
                      color: '#012557',
                      ref: 'Pageview',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Tees Valley (CNIM - England)',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Civil Work',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content: null,
                    hint: 'To be improved (60%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '42%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Alexis Boss',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '126166fa-8ee9-41f0-8d10-c877f0efe9b2',
                      },
                    },
                    content: null,
                    hint: 'View contract',
                    icon: {
                      color: '#012557',
                      ref: 'Pageview',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Créteil (CNIM - France)',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Sourcing',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                      },
                    },
                    content: null,
                    hint: 'Unsatisfactory (20%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '81%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Jean-Louis Leclair',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: 'b49448c9-c543-4740-807b-1f32e708e2d6',
                      },
                    },
                    content: null,
                    hint: 'View contract',
                    icon: {
                      color: '#012557',
                      ref: 'Pageview',
                      size: 12,
                    },
                  },
                ],
              },
              {
                id: '06165068-dde0-4979-91da-307196c6fce5',
                item: [
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '06165068-dde0-4979-91da-307196c6fce5',
                      },
                    },
                    content:
                      '<p style="color:#5a4749; font-weight:bold;">Northbeck (UK) (CNIM - England)',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Legal',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '06165068-dde0-4979-91da-307196c6fce5',
                      },
                    },
                    content: null,
                    hint: 'Unsatisfactory (30%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
                      size: 12,
                    },
                  },
                  {
                    action: null,
                    content: '17%',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: null,
                    content: 'Emmanuel Collombier',
                    hint: null,
                    icon: null,
                  },
                  {
                    action: {
                      endpoint: '/edit',
                      method: 'GET',
                      params: {
                        file_id: '06165068-dde0-4979-91da-307196c6fce5',
                      },
                    },
                    content: null,
                    hint: 'View contract',
                    icon: {
                      color: '#012557',
                      ref: 'Pageview',
                      size: 12,
                    },
                  },
                ],
              },
            ],
          },
          title: {
            bg_color: '#EB4D0D',
            font_color: '#FFFFFF',
            lib: 'Contracts rejected',
          },
        },
      ],
      visible: true,
    },
    metrics: {
      indicator: [
        {
          bg_color: '#DFE7E8',
          color: '#05f0ad',
          hint: 'Taux de Couverture : 0 cas réalisés / 0 cas prévus au plan = 0%',
          info: "Le taux de couverture du plan : indicateur de suivi de l'avancement de la réalisation des volumes prévisionnels de contrôle. Il permet d'apprécier le respect du plan annuel. Le taux de couverture doit être maintenu à 100%.",
          lib: 'Progress Rate',
          style: 'linear',
          value: 87,
        },
        {
          bg_color: '#DFE7E8',
          color: '#f0a905',
          hint: 'Taux de Qualité : 0 cas conformes / 0 cas réalisés = 0%',
          info: "Le taux de qualité des contrôles réalisés : indicateur du suivi de la qualité. Il permet d'apprécier le niveau de qualité des activités. Le taux de qualité à atteindre est défini chaque année par la Direction Générale.",
          lib: 'Quality Rate',
          style: 'linear',
          value: 42,
        },
      ],
      visible: true,
    },
    search_bar: {
      btn_lib: 'Search',
      options: [
        {
          action: null,
          lib: 'Search in contract',
          placeholder: 'Contract',
          regex: null,
          regex_msg: null,
        },
      ],
      search_bar: true,
    },
    subtitle: {
      'font-color': null,
      'font-size': null,
      lib: null,
      visible: false,
    },
    title: {
      'font-color': null,
      'font-size': null,
      lib: null,
      visible: false,
    },
  },
};
