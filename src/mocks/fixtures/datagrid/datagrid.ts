export const dataGridDetail = {
  columns: [
    { key: 'column1', name: 'column title to display integer' },
    { key: 'column2', name: 'column title to display upload_file' },
    { key: 'column3', name: 'column title to display text' },
    { key: 'column4', name: 'column title to display select' },
    { key: 'column5', name: 'column title to display checkbox boolean' },
  ],
  rows: [
    {
      column1: { component: 'integer', value: 12 },
      column2: {
        component: 'upload_file',
        value: [
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
        component: 'select',
        value: '2',
        answer_choices: {
          '1': {
            id: '1',
            label: 'SOUS TRAITANT',
            value: '1',
          },
          '2': {
            id: '2',
            label: 'SOUS TRAITANT 2',
            value: '2',
          },
          '3': {
            id: '3',
            label: 'SOUS TRAITANt 3',
            value: '3',
          },
          '4': {
            id: '4',
            label: 'SOUS TRAITANT 4',
            value: '4',
          },
        },
      },
      column5: { component: 'boolean', value: 'true' },
    },
  ],
};

export const GRID_DETAILS_ADD_ROW = {
  columns: [
    { key: 'column1', name: 'column title to display integer' },
    { key: 'column2', name: 'column title to display upload_file' },
    { key: 'column3', name: 'column title to display text' },
    { key: 'column4', name: 'column title to display select' },
    { key: 'column5', name: 'column title to display checkbox boolean' },
  ],
  rows: [
    {
      column1: { component: 'integer', value: 12 },
      column2: {
        component: 'upload_file',
        value: [
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
        component: 'select',
        value: '2',
        answer_choices: {
          '1': {
            id: '1',
            label: '1',
            value: '1',
          },
          '2': {
            id: '2',
            label: '2',
            value: '2',
          },
          '3': {
            id: '3',
            label: '3',
            value: '3',
          },
          '4': {
            id: '4',
            label: '4',
            value: '4',
          },
        },
      },
      column5: { component: 'boolean', value: 'true' },
    },
    {
      column1: { component: 'integer', value: null },
      column2: {
        component: 'upload_file',
        value: null,
      },
      column3: {
        component: 'text',
        value: null,
      },
      column4: {
        component: 'select',
        value: null,
        answer_choices: {
          '1': {
            id: '1',
            label: 'NEW SOUS TRAITANT',
            value: '1',
          },
          '2': {
            id: '2',
            label: '2',
            value: '2',
          },
          '3': {
            id: '3',
            label: '3',
            value: '3',
          },
          '4': {
            id: '4',
            label: '4',
            value: '4',
          },
        },
      },
      column5: { component: 'boolean', value: null },
    },
  ],
};
