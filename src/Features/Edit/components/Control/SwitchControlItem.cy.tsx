// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />

// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/Edit/components/Control/SwitchControlItem.cy.tsx"

import React from 'react';

import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { SwitchControlItem } from './SwitchControlItem';
import { IApiControl, IChapter } from '../../types';
import { TextControlStyled } from './Form/Text/TextControl.style';
import { FormulaControlStyled } from './Form/Formula/FormulaControl.style';
import { SelectListControlStyled } from './Form/SelectList/SelectListControl.style';
import { CheckboxControlStyled } from './Form/Checkbox/CheckboxControl.style';
import { FinancialControlStyled } from './Form/Financial/FinancialControl.style';
import { IntegerControlStyled } from './Form/Integer/IntegerControl.style';
import { DecimalControlStyled } from './Form/Decimal/DecimalControl.style';
import { DateControlStyled } from './Form/Date/DateControl.style';
import { TimeControlStyled } from './Form/Time/TimeControl.style';
import { DateTimeControlStyled } from './Form/DateTime/DateTimeControl.style';
import { CommentControlStyled } from './Form/Comment/CommentControl.style';
import { LongTextControlStyled } from './Form/LongText/LongTextControl.style';
import { PercentControlStyled } from './Form/Percent/PercentControl.style';
import { SliderControlStyled } from './Form/Slider/SliderControl.style';
import { BooleanControlStyled } from './Form/Boolean/BooleanControl.style';
import { DataGridControlStyled } from './Form/DataGrid/DataGridControl.style';
import { RichTextControlStyled } from './Form/RichText/RichTextControl.style';
import { UploadControlStyled } from './Form/Upload/UploadControl.style';
import { InfoBlockControlStyled } from './Form/InfoBlock/InfoBlockControl.style';

describe('', () => {
  const control: IApiControl = {
    control_desc_1: null,
    control_desc_2: null,
    control_editable: false,
    control_conditional: false,
    control_id: '',
    control_mandatory: false,
    mandatory: false,
    control_previous_value: null,
    control_title: '',
    control_type: 'text',
    control_value: null,
    control_family: '',
    control_regex: null,
    control_regex_msg: null,
    control_manage_compliance: false,
    control_options: undefined,
    upload_detail: null,
    rich_text_detail: null,
    control_rejectable: null,
  };

  const chapters = [
    {
      chap_lib: 'Datagrid Numerical',
      chap_num: 1,
      controls: [
        {
          control_conditional: false,
          control_desc_1: null,
          control_desc_2: null,
          control_editable: true,
          control_family: 'data_grid',
          control_id: 23072,
          control_manage_compliance: null,
          control_mandatory: false,
          control_options: null,
          control_pg_base_type: null,
          control_previous_value: null,
          control_regex: null,
          control_regex_msg: null,
          control_title: 'DataGrid for Numerical Values',
          control_type: 'ag_datagrid',
          control_value: null,
          data_grid_detail: {
            buttons: [],
            columns: [
              {
                alignment: 'left',
                borderRight: null,
                borderRightColor: null,
                borderRightWidth: null,
                col_header_display_tooltip: false,
                col_header_tooltip: 'Integer',
                currency_symbol: null,
                decimal_digit: 0,
                field: 'rdg_1.value',
                field_type: 'integer',
                filter: true,
                floatingFilter: false,
                headerColor: '#FFFFFF',
                headerName: 'Integer',
                hide: false,
                lockPinned: false,
                pinned: null,
                resizable: true,
                sortable: true,
                thousand_separator: false,
                track_modification: false,
                track_modification_option: null,
                track_modification_tooltip: false,
              },
              {
                alignment: 'left',
                borderRight: null,
                borderRightColor: null,
                borderRightWidth: null,
                col_header_display_tooltip: false,
                col_header_tooltip: 'Decimal',
                currency_symbol: null,
                decimal_digit: 4,
                field: 'rdg_2.value',
                field_type: 'decimal',
                filter: true,
                floatingFilter: false,
                headerColor: '#FFFFFF',
                headerName: 'Decimal',
                hide: false,
                lockPinned: false,
                pinned: null,
                resizable: true,
                sortable: true,
                thousand_separator: false,
                track_modification: false,
                track_modification_option: null,
                track_modification_tooltip: false,
              },
              {
                alignment: 'left',
                borderRight: null,
                borderRightColor: null,
                borderRightWidth: null,
                col_header_display_tooltip: false,
                col_header_tooltip: 'Financial',
                currency_symbol: '$',
                decimal_digit: 3,
                field: 'rdg_3.value',
                field_type: 'financial',
                filter: true,
                floatingFilter: false,
                headerColor: '#FFFFFF',
                headerName: 'Financial',
                hide: false,
                lockPinned: false,
                pinned: null,
                resizable: true,
                sortable: true,
                thousand_separator: true,
                track_modification: false,
                track_modification_option: null,
                track_modification_tooltip: false,
              },
              {
                alignment: 'left',
                borderRight: null,
                borderRightColor: null,
                borderRightWidth: null,
                col_header_display_tooltip: false,
                col_header_tooltip: 'Percent',
                currency_symbol: null,
                decimal_digit: 0,
                field: 'rdg_4.value',
                field_type: 'percent',
                filter: true,
                floatingFilter: false,
                headerColor: '#FFFFFF',
                headerName: 'Percent',
                hide: false,
                lockPinned: false,
                pinned: null,
                resizable: true,
                sortable: true,
                thousand_separator: false,
                track_modification: false,
                track_modification_option: null,
                track_modification_tooltip: false,
              },
            ],
            datagrid_options: null,
            rows: [
              {
                rdg_1: {
                  choice_options: null,
                  col_elm_id: 7915,
                  component: 'integer',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur entière",
                  reference_value: null,
                  row_num: 1,
                  value: '85',
                },
                rdg_2: {
                  choice_options: null,
                  col_elm_id: 7916,
                  component: 'decimal',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 1,
                  value: '785.85',
                },
                rdg_3: {
                  choice_options: null,
                  col_elm_id: 7917,
                  component: 'financial',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 1,
                  value: '257',
                },
                rdg_4: {
                  choice_options: null,
                  col_elm_id: 7918,
                  component: 'percent',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 1,
                  value: '-52',
                },
                row_editable: true,
                row_uuid: '5b926fb5-647b-40a5-8add-f7e249975924',
              },
              {
                rdg_1: {
                  choice_options: null,
                  col_elm_id: 7915,
                  component: 'integer',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur entière",
                  reference_value: null,
                  row_num: 2,
                  value: '58',
                },
                rdg_2: {
                  choice_options: null,
                  col_elm_id: 7916,
                  component: 'decimal',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 2,
                  value: '45.1',
                },
                rdg_3: {
                  choice_options: null,
                  col_elm_id: 7917,
                  component: 'financial',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 2,
                  value: '5045',
                },
                rdg_4: {
                  choice_options: null,
                  col_elm_id: 7918,
                  component: 'percent',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 2,
                  value: '235',
                },
                row_editable: true,
                row_uuid: '9457b662-4e2d-4bc4-9ce1-f88cbec6d52f',
              },
              {
                rdg_1: {
                  choice_options: null,
                  col_elm_id: 7915,
                  component: 'integer',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur entière",
                  reference_value: null,
                  row_num: 3,
                  value: '45',
                },
                rdg_2: {
                  choice_options: null,
                  col_elm_id: 7916,
                  component: 'decimal',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 3,
                  value: '12452',
                },
                rdg_3: {
                  choice_options: null,
                  col_elm_id: 7917,
                  component: 'financial',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 3,
                  value: '4',
                },
                rdg_4: {
                  choice_options: null,
                  col_elm_id: 7918,
                  component: 'percent',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 3,
                  value: '-17000',
                },
                row_editable: true,
                row_uuid: '3a00ba52-3887-4597-ae1a-f1aeb4d641fd',
              },
              {
                rdg_1: {
                  choice_options: null,
                  col_elm_id: 7915,
                  component: 'integer',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur entière",
                  reference_value: null,
                  row_num: 4,
                  value: '74',
                },
                rdg_2: {
                  choice_options: null,
                  col_elm_id: 7916,
                  component: 'decimal',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 4,
                  value: '72548',
                },
                rdg_3: {
                  choice_options: null,
                  col_elm_id: 7917,
                  component: 'financial',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 4,
                  value: '-123',
                },
                rdg_4: {
                  choice_options: null,
                  col_elm_id: 7918,
                  component: 'percent',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 4,
                  value: '23.25',
                },
                row_editable: true,
                row_uuid: '76d4cf5e-b605-4981-ac60-c12ddff52e9e',
              },
              {
                rdg_1: {
                  choice_options: null,
                  col_elm_id: 7915,
                  component: 'integer',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur entière",
                  reference_value: null,
                  row_num: 5,
                  value: '17',
                },
                rdg_2: {
                  choice_options: null,
                  col_elm_id: 7916,
                  component: 'decimal',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 5,
                  value: '6596',
                },
                rdg_3: {
                  choice_options: null,
                  col_elm_id: 7917,
                  component: 'financial',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 5,
                  value: '145',
                },
                rdg_4: {
                  choice_options: null,
                  col_elm_id: 7918,
                  component: 'percent',
                  control_editable: true,
                  control_mandatory: false,
                  control_options: null,
                  control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                  control_regex_msg:
                    "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                  reference_value: null,
                  row_num: 5,
                  value: '25',
                },
                row_editable: true,
                row_uuid: '92f3e4a9-0cf6-42d6-add4-6ebf7b18fb7c',
              },
            ],
            source: null,
          },
        },
      ],
    },
  ] as any as IChapter[];

  it('Should render <TextControl /> for control_type=text', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'text',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${TextControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('TextControl').should('exist');
    cy.react('SwitchControlItem').find('input[type="text"]').should('exist');
  });

  it('Should render <TextControl /> for control_type=email', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'email',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${TextControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('TextControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
    cy.react('SwitchControlItem').find('input[type="text"]').should('exist');
  });

  it('Should render <TextControl /> for control_type=auth_num', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'auth_num',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${TextControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('TextControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
    cy.react('SwitchControlItem').find('input[type="text"]').should('exist');
  });

  it('Should render <FormulaControl /> for control_type=formula', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'formula',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${FormulaControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('FormulaControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
    cy.react('SwitchControlItem').find('input[type="text"]').should('exist');
  });

  it('Should render <SelectListControl /> for control_type=select_list', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'select_list',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${SelectListControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('SelectListControl').should('exist');
    cy.react('SwitchControlItem').react('Select').should('exist');
  });

  it('Should render <SelectListControl /> for control_type=multiple_list', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'multiple_list',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${SelectListControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('SelectListControl').should('exist');
    cy.react('SwitchControlItem').react('Select').should('exist');
  });

  it('Should render <CheckboxControl /> for control_type=radio', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'radio',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${CheckboxControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('CheckboxControl').should('exist');
    cy.react('SwitchControlItem').react('CheckboxWrapper').should('exist');
  });

  it('Should render <CheckboxControl /> for control_type=checkbox', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'checkbox',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${CheckboxControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('CheckboxControl').should('exist');
    cy.react('SwitchControlItem').react('CheckboxWrapper').should('exist');
  });

  it('Should render <FinancialControl /> for control_type=financial', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'financial',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${FinancialControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('FinancialControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
  });

  it('Should render <IntegerControl /> for control_type=integer', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'integer',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${IntegerControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('IntegerControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
  });

  it('Should render <DecimalControl /> for control_type=decimal', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'decimal',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${DecimalControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('DecimalControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
  });

  it('Should render <DateControl /> for control_type=date', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'date',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${DateControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('DateControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
  });

  it('Should render <TimeControl /> for control_type=time', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'time',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${TimeControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('TimeControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
  });

  it('Should render <DateTimeControl /> for control_type=timestamp', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'timestamp',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${DateTimeControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('DateTimeControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
  });

  it('Should render <CommentControl /> for control_type=comment', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'comment',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${CommentControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('CommentControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
  });

  it('Should render <LongTextControl /> for control_type=long_text', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'long_text',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${LongTextControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('LongTextControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
  });

  it('Should render <PercentControl /> for control_type=percent', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'percent',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${PercentControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('PercentControl').should('exist');
    cy.react('SwitchControlItem').react('InputBase').should('exist');
  });

  it('Should render <SliderControl /> for control_type=slider', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'slider',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${SliderControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('SliderControl').should('exist');
  });

  it('Should render <BooleanControl /> for control_type=boolean', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'boolean',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${BooleanControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('BooleanControl').should('exist');
  });

  it('Should render <DataGridControl /> for control_type=data_grid', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'data_grid',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${DataGridControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('DataGridControl').should('exist');
  });

  it('Should render <DataGridControlAgGrid /> for control_type=ag_datagrid', function () {
    const _control = {
      ...structuredClone(control),
      ...{
        control_conditional: false,
        control_desc_1: null,
        control_desc_2: null,
        control_editable: true,
        control_family: 'data_grid',
        control_id: 23072,
        control_manage_compliance: null,
        control_mandatory: false,
        control_options: null,
        control_pg_base_type: null,
        control_previous_value: null,
        control_regex: null,
        control_regex_msg: null,
        control_title: 'DataGrid for Numerical Values',
        control_type: 'ag_datagrid',
        control_value: null,
        data_grid_detail: {
          buttons: [],
          columns: [
            {
              alignment: 'left',
              borderRight: null,
              borderRightColor: null,
              borderRightWidth: null,
              col_header_display_tooltip: false,
              col_header_tooltip: 'Integer',
              currency_symbol: null,
              decimal_digit: 0,
              field: 'rdg_1.value',
              field_type: 'integer',
              filter: true,
              floatingFilter: false,
              headerColor: '#FFFFFF',
              headerName: 'Integer',
              hide: false,
              lockPinned: false,
              pinned: null,
              resizable: true,
              sortable: true,
              thousand_separator: false,
              track_modification: false,
              track_modification_option: null,
              track_modification_tooltip: false,
            },
            {
              alignment: 'left',
              borderRight: null,
              borderRightColor: null,
              borderRightWidth: null,
              col_header_display_tooltip: false,
              col_header_tooltip: 'Decimal',
              currency_symbol: null,
              decimal_digit: 4,
              field: 'rdg_2.value',
              field_type: 'decimal',
              filter: true,
              floatingFilter: false,
              headerColor: '#FFFFFF',
              headerName: 'Decimal',
              hide: false,
              lockPinned: false,
              pinned: null,
              resizable: true,
              sortable: true,
              thousand_separator: false,
              track_modification: false,
              track_modification_option: null,
              track_modification_tooltip: false,
            },
            {
              alignment: 'left',
              borderRight: null,
              borderRightColor: null,
              borderRightWidth: null,
              col_header_display_tooltip: false,
              col_header_tooltip: 'Financial',
              currency_symbol: '$',
              decimal_digit: 3,
              field: 'rdg_3.value',
              field_type: 'financial',
              filter: true,
              floatingFilter: false,
              headerColor: '#FFFFFF',
              headerName: 'Financial',
              hide: false,
              lockPinned: false,
              pinned: null,
              resizable: true,
              sortable: true,
              thousand_separator: true,
              track_modification: false,
              track_modification_option: null,
              track_modification_tooltip: false,
            },
            {
              alignment: 'left',
              borderRight: null,
              borderRightColor: null,
              borderRightWidth: null,
              col_header_display_tooltip: false,
              col_header_tooltip: 'Percent',
              currency_symbol: null,
              decimal_digit: 0,
              field: 'rdg_4.value',
              field_type: 'percent',
              filter: true,
              floatingFilter: false,
              headerColor: '#FFFFFF',
              headerName: 'Percent',
              hide: false,
              lockPinned: false,
              pinned: null,
              resizable: true,
              sortable: true,
              thousand_separator: false,
              track_modification: false,
              track_modification_option: null,
              track_modification_tooltip: false,
            },
          ],
          datagrid_options: null,
          rows: [
            {
              rdg_1: {
                choice_options: null,
                col_elm_id: 7915,
                component: 'integer',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur entière",
                reference_value: null,
                row_num: 1,
                value: '85',
              },
              rdg_2: {
                choice_options: null,
                col_elm_id: 7916,
                component: 'decimal',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 1,
                value: '785.85',
              },
              rdg_3: {
                choice_options: null,
                col_elm_id: 7917,
                component: 'financial',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 1,
                value: '257',
              },
              rdg_4: {
                choice_options: null,
                col_elm_id: 7918,
                component: 'percent',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 1,
                value: '-52',
              },
              row_editable: true,
              row_uuid: '5b926fb5-647b-40a5-8add-f7e249975924',
            },
            {
              rdg_1: {
                choice_options: null,
                col_elm_id: 7915,
                component: 'integer',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur entière",
                reference_value: null,
                row_num: 2,
                value: '58',
              },
              rdg_2: {
                choice_options: null,
                col_elm_id: 7916,
                component: 'decimal',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 2,
                value: '45.1',
              },
              rdg_3: {
                choice_options: null,
                col_elm_id: 7917,
                component: 'financial',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 2,
                value: '5045',
              },
              rdg_4: {
                choice_options: null,
                col_elm_id: 7918,
                component: 'percent',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 2,
                value: '235',
              },
              row_editable: true,
              row_uuid: '9457b662-4e2d-4bc4-9ce1-f88cbec6d52f',
            },
            {
              rdg_1: {
                choice_options: null,
                col_elm_id: 7915,
                component: 'integer',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur entière",
                reference_value: null,
                row_num: 3,
                value: '45',
              },
              rdg_2: {
                choice_options: null,
                col_elm_id: 7916,
                component: 'decimal',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 3,
                value: '12452',
              },
              rdg_3: {
                choice_options: null,
                col_elm_id: 7917,
                component: 'financial',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 3,
                value: '4',
              },
              rdg_4: {
                choice_options: null,
                col_elm_id: 7918,
                component: 'percent',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 3,
                value: '-17000',
              },
              row_editable: true,
              row_uuid: '3a00ba52-3887-4597-ae1a-f1aeb4d641fd',
            },
            {
              rdg_1: {
                choice_options: null,
                col_elm_id: 7915,
                component: 'integer',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur entière",
                reference_value: null,
                row_num: 4,
                value: '74',
              },
              rdg_2: {
                choice_options: null,
                col_elm_id: 7916,
                component: 'decimal',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 4,
                value: '72548',
              },
              rdg_3: {
                choice_options: null,
                col_elm_id: 7917,
                component: 'financial',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 4,
                value: '-123',
              },
              rdg_4: {
                choice_options: null,
                col_elm_id: 7918,
                component: 'percent',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 4,
                value: '23.25',
              },
              row_editable: true,
              row_uuid: '76d4cf5e-b605-4981-ac60-c12ddff52e9e',
            },
            {
              rdg_1: {
                choice_options: null,
                col_elm_id: 7915,
                component: 'integer',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur entière",
                reference_value: null,
                row_num: 5,
                value: '17',
              },
              rdg_2: {
                choice_options: null,
                col_elm_id: 7916,
                component: 'decimal',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 5,
                value: '6596',
              },
              rdg_3: {
                choice_options: null,
                col_elm_id: 7917,
                component: 'financial',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 5,
                value: '145',
              },
              rdg_4: {
                choice_options: null,
                col_elm_id: 7918,
                component: 'percent',
                control_editable: true,
                control_mandatory: false,
                control_options: null,
                control_regex: '^-?[0-9]\\d*(\\.\\d+)?$',
                control_regex_msg:
                  "La valeur saisie n'est pas une valeur autorisée pour ce champ",
                reference_value: null,
                row_num: 5,
                value: '25',
              },
              row_editable: true,
              row_uuid: '92f3e4a9-0cf6-42d6-add4-6ebf7b18fb7c',
            },
          ],
          source: null,
        },
      },
      control_type: 'ag_datagrid',
    } as any as IApiControl;
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('DataGridControlAgGrid').should('exist');
  });

  it('Should render <JoditEditor /> for control_type=jodit_rich_text', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'jodit_rich_text',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.jodit-react-container').should('exist');
  });

  it('Should render <RichTextControl /> for control_type=rich_text', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'rich_text',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${RichTextControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('RichTextControl').should('exist');
  });

  it('Should render <UploadControl /> for control_type=file_upload', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'file_upload',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${UploadControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('UploadControl').should('exist');
  });

  it('Should render <InfoBlockControl /> for control_type=info_block', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'info_block',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.react('SwitchControlItem')
      .find(`.${InfoBlockControlStyled.styledComponentId}`)
      .should('exist');
    cy.react('InfoBlockControl').should('exist');
  });

  it('Should render <Box /> for control_type=line_break', function () {
    const _control: IApiControl = {
      ...structuredClone(control),
      control_type: 'line_break',
    };
    const _chapters = [...structuredClone(chapters)];
    cy.mount(
      <SetupTestsComponents>
        <SwitchControlItem
          control={_control}
          formState={_chapters}
          setFormState={() => undefined}
          context={'edit'}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();
    cy.get('.MuiBox-root').should('exist');
  });
});
