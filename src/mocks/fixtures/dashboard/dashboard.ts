export default {
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
                header: 'Chantier',
                dataKey: 'Chantier',
                width: 200,
              },
              {
                border_right: true,
                header: 'Création',
                dataKey: 'Création',
                width: 200,
              },
              {
                border_right: true,
                header: 'U.O. Rattachement',
                dataKey: 'U.O. Rattachement',
                width: 200,
              },
              {
                border_right: false,
                header: '% Complétude',
                dataKey: '% Complétude',
                width: 200,
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
                        file_id: 'd67b5ce9-6ef5-4cc9-8199-c905af6be218',
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
                        file_id: '62f2d825-8406-4abc-b5e1-51bc64b985d8',
                      },
                    },
                    content: null,
                    hint: 'Non satisfaisant (10%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
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
                    hint: 'Non satisfaisant (20%)',
                    icon: {
                      color: '#FF0000',
                      ref: 'MoodBad',
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
                    hint: 'A améliorer (50%)',
                    icon: {
                      color: '#F1AA00',
                      ref: 'SentimentDissatisfied',
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
                header: 'Chantier',
                width: 200,
              },
              {
                border_right: true,
                header: 'Création',
                width: 200,
              },
              {
                border_right: false,
                header: 'U.O. Rattachement',
                width: 200,
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
                header: 'Chantier',
                width: 200,
              },
              {
                border_right: true,
                header: 'Création',
                width: 200,
              },
              {
                border_right: false,
                header: 'U.O. Rattachement',
                width: 200,
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
                label: 'Chantier',
                dataKey: 'Chantier',
                width: 200,
              },
              {
                border_right: true,
                label: 'Création',
                dataKey: 'Création',
                width: 200,
              },
              {
                border_right: true,
                label: 'U.O. Rattachement',
                dataKey: 'U.O. Rattachement',
                width: 200,
              },
              {
                border_right: false,
                label: 'Nb Doc Manquant',
                dataKey: 'Nb Doc Manquant',
                width: 200,
              },
            ],
          },
          lines: {
            border_bottom: true,
            values: [
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
                    content: '8',
                    hint: null,
                    icon: null,
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
                    action: null,
                    content: '5',
                    hint: null,
                    icon: null,
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
                    action: null,
                    content: '9',
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
