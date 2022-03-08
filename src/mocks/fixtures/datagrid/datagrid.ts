export const dataGridDetail = {
  columns: [
    { key: 'column1', name: 'column title to display integer' },
    { key: 'column2', name: 'column title to display upload_file' },
    { key: 'column3', name: 'column title to display text' },
    { key: 'column4', name: 'column title to display select' },
    { key: 'column5', name: 'column title to display checkbox boolean' },
  ],
  // rows: [],
  rows: [
    {
      column1: { component: 'integer', value: 12 },
      column2: { component: 'upload_file', value: null },
      column3: {
        component: 'text',
        value: 'toto text',
      },
      column4: {
        component: 'select',
        value: null,
        answer_choices: {
          '1': {
            id: '1',
            label: 'CONFORME',
            value: '1',
            isKo: false,
          },
          '2': {
            id: '2',
            label: 'NON APPLICABLE',
            value: '2',
            isKo: false,
          },
          '3': {
            id: '3',
            label: 'NON CONFORME',
            value: '3',
            isKo: false,
          },
          '4': {
            id: '4',
            label: 'CONFORME a point',
            value: '4',
            isKo: false,
          },
        },
      },
      column5: { component: 'boolean', value: 'true' },
    },
    {
      column1: { component: 'integer', value: 12 },
      column2: { component: 'upload_file', value: null },
      column3: {
        component: 'text',
        value: 'toto text',
      },
      column4: {
        component: 'select',
        value: null,
        answer_choices: {
          '1': {
            id: '1',
            label: 'CONFORME',
            value: '1',
            isKo: false,
          },
          '2': {
            id: '2',
            label: 'NON APPLICABLE',
            value: '2',
            isKo: false,
          },
          '3': {
            id: '3',
            label: 'NON CONFORME',
            value: '3',
            isKo: false,
          },
          '4': {
            id: '4',
            label: 'CONFORME a point',
            value: '4',
            isKo: false,
          },
        },
      },
      column5: { component: 'boolean', value: 'true' },
    },
  ],
};
