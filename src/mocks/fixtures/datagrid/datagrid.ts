export const dataGridDetail = {
  columns: [
    {
      key: 'column1',
      name: 'column title to display integer',
      resizable: true,
      cellClass: 'cell',
    },
    {
      key: 'column2',
      name: 'column title to display file_upload',
      resizable: true,
      width: '30%',
      cellClass: 'cell',
    },
    { key: 'column3', name: 'column title to display text', cellClass: 'cell' },
    {
      key: 'column4',
      name: 'column title to display select',
      cellClass: 'select-list-data-grid',
    },
    {
      key: 'column5',
      name: 'column title to display checkbox boolean',
      cellClass: 'cell',
    },
    {
      key: 'column6',
      name: 'date',
      cellClass: 'cell',
    },
    {
      key: 'column7',
      name: 'percent',
      cellClass: 'cell',
    },
    {
      key: 'column8',
      name: 'financial',
      cellClass: 'cell',
    },
    {
      key: 'column9',
      name: 'decimal',
      cellClass: 'cell',
    },
    {
      key: 'column10',
      name: 'long_text',
      cellClass: 'cell',
    },
    { key: 'column11', width: '5%', cellClass: 'cell' },
  ],
  rows: [
    {
      column1: { component: 'integer', value: 12 },
      column2: {
        component: 'file_upload',
        value: null,
        upload_detail: [
          {
            file_id: 27,
            file_name: 'totoooooooooooooooooooooooooo.png',
          },
          {
            file_id: 28,
            file_name: 'tata.png',
          },
          {
            file_id: 21,
            file_name: 'tutu.png',
          },
        ],
      },
      column3: {
        component: 'text',
        value: 'toto text',
      },
      column4: {
        component: 'select_list',
        value: null,
        control_editable: false,
        answer_choices: [
          {
            id: 1,
            label: 'Conforme',
            value: 1,
          },
          {
            id: 2,
            label: 'Non-Conforme',
            value: 2,
          },
          {
            id: 3,
            label: 'Sans Objet',
            value: 3,
          },
        ],
      },
      column5: { component: 'boolean', value: 'true' },
      column6: { component: 'date', value: null },
      column7: { component: 'percent', value: null },
      column8: { component: 'financial', value: '12.23030' },
      column9: { component: 'decimal', value: 13.292 },
      column10: {
        component: 'long_text',
        control_editable: false,
        value: null,
      },
      column11: { component: 'delete' },
    },
  ],
};

export const GRID_DETAILS_ADD_ROW = {
  columns: [
    { key: 'column1', name: 'column title to display integer' },
    { key: 'column2', name: 'column title to display file_upload' },
    { key: 'column3', name: 'column title to display text' },
    { key: 'column4', name: 'column title to display select' },
    { key: 'column5', name: 'column title to display checkbox boolean' },
    { key: 'column6', name: 'column title to display delete button' },
  ],
  rows: [
    {
      column1: { component: 'integer', value: 12 },
      column2: {
        component: 'file_upload',
        value: null,
        upload_detail: [
          {
            file_id: 27,
            file_name: 'totoooooooooooooooooooooooooo.png',
          },
          {
            file_id: 28,
            file_name: 'tata.png',
          },
          {
            file_id: 21,
            file_name: 'tutu.png',
          },
        ],
      },
      column3: {
        component: 'text',
        value: 'toto text',
      },
      column4: {
        component: 'select_list',
        value: '2',
        answer_choices: [
          {
            id: '1',
            label: '1',
            value: '1',
          },
          {
            id: '2',
            label: '2',
            value: '2',
          },
          {
            id: '3',
            label: '3',
            value: '3',
          },
          {
            id: '4',
            label: '4',
            value: '4',
          },
        ],
      },
      column5: { component: 'boolean', value: 'true' },
      column6: { component: 'delete' },
    },
    {
      column1: { component: 'integer', value: null },
      column2: {
        component: 'file_upload',
        value: null,
        upload_detail: null,
      },
      column3: {
        component: 'text',
        value: null,
      },
      column4: {
        component: 'select_list',
        value: null,
        answer_choices: [
          {
            id: '1',
            label: 'NEW SOUS TRAITANT',
            value: '1',
          },
          {
            id: '2',
            label: '2',
            value: '2',
          },
          {
            id: '3',
            label: '3',
            value: '3',
          },
          {
            id: '4',
            label: '4',
            value: '4',
          },
        ],
      },
      column5: { component: 'boolean', value: null },
      column6: { component: 'delete' },
    },
  ],
};
