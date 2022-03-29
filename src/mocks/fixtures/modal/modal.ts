export const data = {
  target: 'modal',
  title: 'le titre',
  subtitle: 'subtitle',
  img: 'https://picsum.photos/200/300',
  content: [
    {
      element: 'p',
      attribute: null,
      value: 'Le texte a afficher',
    },
    {
      element: 'input',
      attribute: {
        type: 'text',
        id: 'id',
        placeholder: "Merci d'indiquer ....",
        mandatory: true,
      },
      value: null,
    },
    {
      element: 'input',
      attribute: {
        multiline: true,
        multilineRows: 6,
        id: 'id',
        placeholder: "Merci d'indiquer ....",
      },
      value: 'totot',
    },
    {
      element: 'select',
      attribute: {
        id: 'id',
        option: [
          { id: 1, value: 'Choix 1' },
          { id: 2, value: 'Choix 2' },
          { id: 3, value: 'Choix 3' },
        ],
      },
      value: null,
    },
    {
      element: 'table',
      attribute: null,
      value: {
        row: {
          value: [
            {
              cell: {
                value: [
                  {
                    type: 'text',
                    value: 'CTR019/00',
                    action: null,
                  },
                  {
                    type: 'text',
                    value: 'DELCOURT FERROVIAIIIIIRE',
                    action: {
                      method: 'GET',
                      route: '/edit',
                      params: [
                        { key: 'type', value: 'control' },
                        { key: 'ctrl_id', value: 'toto' },
                        { key: 'period_code', value: 'toto' },
                      ],
                    },
                  },
                  {
                    type: 'btn',
                    action: {
                      method: 'GET',
                      endpoint: '/edit',
                      params: {
                        file_id: 'uuid',
                      },
                    },
                    value: 'key value is the label button',
                  },
                ],
              },
            },
            {
              cell: {
                value: [
                  {
                    type: 'text',
                    value: 'CTR019/00',
                  },
                  {
                    type: 'text',
                    value: 'DELCOURT FERROVIAIIIIIRE',
                  },
                  {
                    type: 'btn',
                    action: {
                      method: 'GET',
                      endpoint: '/edit',
                      params: {
                        file_id: 'uuid',
                      },
                    },
                    value: 'key value is the label button',
                  },
                ],
              },
            },
            {
              cell: {
                value: [
                  {
                    type: 'text',
                    value: 'CTR019/00',
                  },
                  {
                    type: 'text',
                    value: 'DELCOURT FERROVIAIIIIIRE',
                  },
                  {
                    type: 'btn',
                    action: {
                      method: 'GET',
                      endpoint: '/edit',
                      params: {
                        file_id: 'uuid',
                      },
                    },
                    value: 'key value is the label button',
                  },
                ],
              },
            },
            {
              cell: {
                value: [
                  {
                    type: 'text',
                    value: 'CTR019/00',
                  },
                  {
                    type: 'text',
                    value: 'DELCOURT FERROVIAIIIIIRE',
                  },
                  {
                    type: 'btn',
                    action: {
                      method: 'GET',
                      endpoint: '/edit',
                      params: {
                        file_id: 'uuid',
                      },
                    },
                    value: 'key value is the label button',
                  },
                ],
              },
            },
            {
              cell: {
                value: [
                  {
                    type: 'text',
                    value: 'CTR019/00',
                  },
                  {
                    type: 'text',
                    value: 'DELCOURT FERROVIAIIIIIRE',
                  },
                  {
                    type: 'btn',
                    action: {
                      method: 'GET',
                      endpoint: '/edit',
                      params: {
                        file_id: 'uuid',
                      },
                    },
                    value: 'key value is the label button',
                  },
                ],
              },
            },
            {
              cell: {
                value: [
                  {
                    type: 'text',
                    value: 'CTR019/00',
                  },
                  {
                    type: 'text',
                    value: 'DELCOURT FERROVIAIIIIIRE',
                  },
                  {
                    type: 'btn',
                    action: {
                      method: 'GET',
                      endpoint: '/edit',
                      params: {
                        file_id: 'uuid',
                      },
                    },
                    value: 'key value is the label button',
                  },
                ],
              },
            },
            {
              cell: {
                value: [
                  {
                    type: 'text',
                    value: 'CTR019/00',
                  },
                  {
                    type: 'text',
                    value: 'DELCOURT FERROVIAIIIIIRE',
                  },
                  {
                    type: 'btn',
                    action: {
                      method: 'GET',
                      endpoint: '/edit',
                      params: {
                        file_id: 'uuid',
                      },
                    },
                    value: 'key value is the label button',
                  },
                ],
              },
            },
            {
              cell: {
                value: [
                  {
                    type: 'text',
                    value: 'CTR019/00',
                  },
                  {
                    type: 'text',
                    value: 'DELCOURT FERROVIAIIIIIRE',
                  },
                  {
                    type: 'btn',
                    action: {
                      method: 'GET',
                      endpoint: '/edit',
                      params: {
                        file_id: 'uuid',
                      },
                    },
                    value: 'key value is the label button',
                  },
                ],
              },
            },
            {
              cell: {
                value: [
                  {
                    type: 'text',
                    value: 'CTR019/00',
                  },
                  {
                    type: 'text',
                    value: 'DELCOURT FERROVIAIIIIIRE',
                  },
                  {
                    type: 'btn',
                    action: {
                      method: 'GET',
                      endpoint: '/edit',
                      params: {
                        file_id: 'uuid',
                      },
                    },
                    value: 'key value is the label button',
                  },
                ],
              },
            },
            {
              cell: {
                value: [
                  {
                    type: 'text',
                    value: 'CTR019/00',
                  },
                  {
                    type: 'text',
                    value: 'DELCOURT FERROVIAIIIIIRE',
                  },
                  {
                    type: 'btn',
                    action: {
                      method: 'GET',
                      endpoint: '/edit',
                      params: {
                        file_id: 'uuid',
                      },
                    },
                    value: 'key value is the label button',
                  },
                ],
              },
            },
            {
              cell: {
                value: [
                  {
                    type: 'text',
                    value: 'CTR019/01',
                  },
                  {
                    type: 'text',
                    value: 'DELCOURT FERROVIAIRE',
                  },
                  {
                    type: 'btn',
                    action: {
                      method: 'GET',
                      endpoint: '/edit',
                      params: {
                        file_id: 'uuid',
                      },
                    },
                    value: 'key value is the label button',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  ],
  btn: [
    {
      bg_color: 'red',
      font_color: 'white',
      hover_color: '#123456',
      btn_lib: 'Annuler',
      action: { method: 'cancel', endpoint: null, params: null },
    },
  ],
};

export const dataPeriodClose = {
  target: 'modal',
  subtitle: 'Cloture manuelle de periode de declaration',
  img: 'https://picsum.photos/200/300',
  content: [
    {
      element: 'p',
      attribute: null,
      value:
        'Vous avez demandé la clôture du contrôle: "Contrôle des contraintes de gestion actions" pour la période "T1 - 2022". ' +
        'Vous avez demandé la clôture du contrôle: "Contrôle des contraintes de gestion actions" pour la période "T1 - 2022".' +
        'Vous avez demandé la clôture du contrôle: "Contrôle des contraintes de gestion actions" pour la période "T1 - 2022".',
    },
    {
      element: 'p',
      attribute: null,
      value:
        'Merci de compléter le commentaire ci-dessous pour indiquer la raison de cette clôture :',
    },
    {
      element: 'input',
      attribute: {
        multiline: true,
        multilineRows: 10,
        mandatory: true,
        id: 'id',
        placeholder: "Merci d'indiquer ....",
      },
      value: 'totot',
    },
  ],
  btn: [
    {
      bg_color: 'red',
      font_color: 'white',
      hover_color: '#123456',
      btn_lib: 'Annuler',
      action: { method: 'cancel', endpoint: null, params: null },
    },
  ],
};

export const dataWorksite = {
  target: 'modal',
  btn: [
    {
      action: {
        endpoint: null,
        method: 'CANCEL',
        params: null,
      },
      bg_color: 'red',
      btn_lib: 'Annuler',
      font_color: 'white',
      hover: 'green',
    },
    {
      action: {
        endpoint: '/worksite/create_new',
        method: 'POST',
        params: {
          protocole: '$protocole',
          site_code: '$site_code',
          site_desc: '$site_desc',
          site_name: '$site_name',
          site_reference: '$site_reference',
          uo_rattach: '$uo_rattach',
        },
      },
      bg_color: 'green',
      btn_lib: 'Créer le chantier',
      font_color: 'white',
      hover: 'green',
    },
  ],
  content: [
    {
      attribute: null,
      element: 'p',
      value: 'Client :',
    },
    {
      attribute: {
        id: 'uo_rattach',
        mandatory: true,
        option: [
          {
            id: 55,
            label: 'Client Chantier ABC',
            value: 55,
          },
          {
            id: 80612,
            label: 'Centre,Est - DPO',
            value: 80612,
          },
          {
            id: 80617,
            label: 'Nord Midi Pyrénées - DPO',
            value: 80617,
          },
          {
            id: 80620,
            label: 'Corse - DPO',
            value: 80620,
          },
          {
            id: 80623,
            label: 'Des Savoies - DPO',
            value: 80623,
          },
          {
            id: 80864,
            label: 'Test_DeltaRM',
            value: 80864,
          },
          {
            id: 936325,
            label: 'Centre Est - CISO',
            value: 936325,
          },
          {
            id: 936329,
            label: 'Des Savoies - CISO',
            value: 936329,
          },
          {
            id: 936332,
            label: 'Nord Midi Pyrénées - CISO',
            value: 936332,
          },
          {
            id: 936335,
            label: 'Corse - CISO',
            value: 936335,
          },
          {
            id: 1091134,
            label: 'Icade',
            value: 1091134,
          },
          {
            id: 1091250,
            label: 'Kaufman & Broad',
            value: 1091250,
          },
        ],
      },
      element: 'select',
      value: null,
    },
    {
      attribute: null,
      element: 'p',
      value: 'Protocole :',
    },
    {
      attribute: {
        id: 'protocole',
        mandatory: false,
        option: [
          {
            id: 0,
            label: 'Protocole',
            value: 0,
          },
          {
            id: 1,
            label: 'Hors-Protocole',
            value: 1,
          },
        ],
      },
      element: 'select',
      value: '1',
    },
    {
      attribute: null,
      element: 'p',
      value: 'Informations sur le chantier :',
    },
    {
      attribute: {
        id: 'site_name',
        mandatory: true,
        multiline: false,
        multilineRows: null,
        placeholder: 'Renseignez le nom du chantier',
      },
      element: 'input',
      value: null,
    },
    {
      attribute: {
        id: 'site_code',
        mandatory: false,
        multiline: false,
        multilineRows: null,
        placeholder: 'Renseignez le code du chantier',
      },
      element: 'input',
      value: null,
    },
    {
      attribute: {
        id: 'site_reference',
        mandatory: false,
        multiline: false,
        multilineRows: null,
        placeholder: 'Renseignez la référence du chantier',
      },
      element: 'input',
      value: null,
    },
    {
      attribute: {
        id: 'site_desc',
        mandatory: false,
        multiline: true,
        multilineRows: 5,
        placeholder: 'Renseignez la description du chantier',
      },
      element: 'input',
      value: null,
    },
  ],
  img: null,
  subtitle: "Déclaration d'un nouveau chantier",
  title: null,
};
