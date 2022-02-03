import { injectDisabledFields } from '../src/injectDisabledFields';
import { IChapter } from '../../../Features/Edit/types';
const chapters: IChapter[] = [
  {
    label: 'Fake chapter 1',
    id: '1',
    controls: [
      {
        control_desc_1: null,
        control_desc_2: null,
        control_editable: true,
        editable: true,
        control_id: '1929',
        control_mandatory: true,
        mandatory: false,
        control_previous_value: null,
        control_title: 'Editable si 1928 vaut 1',
        control_type: 'integer',
        control_value: '1',
        control_family: 'standard',
        control_regex: new RegExp('^-?[1-9]\\d*$'),
        control_regex_msg: "La valeur saisie n'est pas une valeur entière",
        control_manage_compliance: false,
        control_conditional: true,
        control_options: null,
        upload_detail: null,
        conditional: {
          conditional_formula: '$==1',
          conditional_by_field_id: 1928,
        },
      },
    ],
  },
  {
    label: 'Fake chapter 2',
    id: '2',
    controls: [
      {
        control_desc_1: null,
        control_desc_2: null,
        control_editable: true,
        editable: true,
        control_id: '1928',
        control_mandatory: false,
        mandatory: false,
        control_previous_value: null,
        control_title: 'Editable si 1930 vaut 3',
        control_type: 'text',
        control_value: 'toto',
        control_family: 'standard',
        control_regex: new RegExp(''),
        control_regex_msg: '',
        control_manage_compliance: false,
        control_conditional: true,
        control_options: null,
        upload_detail: null,
        conditional: {
          conditional_formula: '$==3',
          conditional_by_field_id: 1930,
        },
      },
    ],
  },
  {
    label: 'Fake chapter 3',
    id: '3',
    controls: [
      {
        control_desc_1: null,
        control_desc_2: null,
        control_editable: false,
        editable: false,
        control_id: '1930',
        control_mandatory: false,
        mandatory: false,
        control_previous_value: null,
        control_title: 'Conditionnel',
        control_type: 'text',
        control_value: 'Un texte',
        control_family: 'standard',
        control_regex: new RegExp(''),
        control_regex_msg: '',
        control_manage_compliance: false,
        control_conditional: true,
        control_options: null,
        upload_detail: null,
      },
    ],
  },
];

describe('Inject disabled fields into the form', () => {
  const mockFn = jest.fn((controls) => controls);
  it('Set the field editable property to false/true when init state is false/true, disable if formula doesnt match', () => {
    const result = injectDisabledFields(chapters);
    expect(result).toStrictEqual([
      {
        label: 'Fake chapter 1',
        id: '1',
        controls: [
          {
            control_desc_1: null,
            control_desc_2: null,
            control_editable: true,
            editable: false,
            control_id: '1929',
            control_mandatory: true,
            mandatory: false,
            control_previous_value: null,
            control_title: 'Editable si 1928 vaut 1',
            control_type: 'integer',
            control_value: '1',
            control_family: 'standard',
            control_regex: /^-?[1-9]\d*$/,
            control_regex_msg: "La valeur saisie n'est pas une valeur entière",
            control_manage_compliance: false,
            control_conditional: true,
            control_options: null,
            upload_detail: null,
            conditional: {
              conditional_formula: '$==1',
              conditional_by_field_id: 1928,
            },
          },
        ],
      },
      {
        label: 'Fake chapter 2',
        id: '2',
        controls: [
          {
            control_desc_1: null,
            control_desc_2: null,
            control_editable: true,
            editable: false,
            control_id: '1928',
            control_mandatory: false,
            mandatory: false,
            control_previous_value: null,
            control_title: 'Editable si 1930 vaut 3',
            control_type: 'text',
            control_value: 'toto',
            control_family: 'standard',
            control_regex: /(?:)/,
            control_regex_msg: '',
            control_manage_compliance: false,
            control_conditional: true,
            control_options: null,
            upload_detail: null,
            conditional: {
              conditional_formula: '$==3',
              conditional_by_field_id: 1930,
            },
          },
        ],
      },
      {
        label: 'Fake chapter 3',
        id: '3',
        controls: [
          {
            control_desc_1: null,
            control_desc_2: null,
            control_editable: false,
            editable: false,
            control_id: '1930',
            control_mandatory: false,
            mandatory: false,
            control_previous_value: null,
            control_title: 'Conditionnel',
            control_type: 'text',
            control_value: 'Un texte',
            control_family: 'standard',
            control_regex: /(?:)/,
            control_regex_msg: '',
            control_manage_compliance: false,
            control_conditional: true,
            control_options: null,
            upload_detail: null,
          },
        ],
      },
    ]);
  });
  it('Return controls', () => {
    mockFn(chapters);
    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveReturned();
  });
});
