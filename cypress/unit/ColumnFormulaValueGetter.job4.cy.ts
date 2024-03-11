// @ts-check
/// <reference types="cypress" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "cypress/unit/ColumnFormulaValueGetter.cy.ts"

import { ColumnFormulaValueGetter } from '../../src/Features/Edit/components/Control/Form/DataGrid/AgDataGridFields/CustomFormulaRenderer/ColumnFormulaValueGetter.ts';

describe('ColumnFormulaValueGetter', function () {
  const data = {
    column: {
      colDef: {
        decimal_digit: 0,
        thousand_separator: true,
        currency_symbol: '',
      },
      getId: () => 'rdg_5.value',
    },
    data: {
      rdg_1: {
        choice_options: null,
        col_elm_id: 7924,
        component: 'integer',
        control_editable: true,
        control_mandatory: false,
        control_options: null,
        control_regex: '^-?[0-9]\\d*$',
        control_regex_msg: "La valeur saisie n'est pas une valeur entière",
        reference_value: null,
        row_num: 5,
        value: null,
      },
      rdg_2: {
        choice_options: null,
        col_elm_id: 7925,
        component: 'decimal',
        control_editable: true,
        control_mandatory: false,
        control_options: null,
        control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
        control_regex_msg:
          "La valeur saisie n'est pas une valeur autorisée pour ce champ",
        reference_value: null,
        row_num: 5,
        value: '10',
      },
      rdg_3: {
        choice_options: null,
        col_elm_id: 7926,
        component: 'financial',
        control_editable: true,
        control_mandatory: false,
        control_options: null,
        control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
        control_regex_msg:
          "La valeur saisie n'est pas une valeur autorisée pour ce champ",
        reference_value: null,
        row_num: 5,
        value: '52',
      },
      rdg_4: {
        choice_options: null,
        col_elm_id: 7927,
        component: 'formula',
        control_editable: false,
        control_mandatory: false,
        control_options: null,
        control_regex: null,
        control_regex_msg: null,
        reference_value: null,
        row_num: 5,
        value: '(#7924*#7925)',
      },
      rdg_5: {
        choice_options: null,
        col_elm_id: 7928,
        component: 'formula',
        control_editable: false,
        control_mandatory: false,
        control_options: null,
        control_regex: null,
        control_regex_msg: null,
        reference_value: null,
        row_num: 5,
        value: '(#7926*#7925)',
      },
      rdg_6: {
        choice_options: null,
        col_elm_id: 7929,
        component: 'formula',
        control_editable: false,
        control_mandatory: false,
        control_options: null,
        control_regex: null,
        control_regex_msg: null,
        reference_value: null,
        row_num: 5,
        value: '(#7924+#7925-#7926)',
      },
      row_editable: true,
      row_uuid: 'c3f31bde-b5ed-4d42-b8e7-6a093bf1ad34',
    },
  };

  it('should have the correct output', function () {
    const _data = {
      ...data,
      column: {
        ...data.column,
        getId: () => 'rdg_5.value',
      },
    };
    expect(ColumnFormulaValueGetter(_data)).to.be.eq('520');
  });

  it('should have the correct output', function () {
    const _data = {
      ...data,
      column: {
        ...data.column,
        getId: () => 'rdg_4.value',
      },
    };
    expect(ColumnFormulaValueGetter(_data)).to.be.eq('');
  });

  it('should have the correct output', function () {
    const _data = {
      ...data,
      column: {
        ...data.column,
        getId: () => 'rdg_6.value',
      },
    };
    expect(ColumnFormulaValueGetter(_data)).to.be.eq('');
  });
});
