// @ts-check

import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import 'cypress-react-selector';
import { mount } from 'cypress/react18';

import { TextControl } from './TextControl';
import { BPITheme, BPIGlobalStyle } from '../../../../../../Packages/Design';

describe('<TextControl />', () => {
  const control = {
    control_desc1: null,
    control_desc2: null,
    control_editable: true,
    editable: true,
    control_family: 'standard',
    control_id: '1931',
    isConditional: false,
    isCalculated: false,
    manageCompliance: false,
    control_mandatory: false,
    mandatory: false,
    control_previous_value: null,
    control_regex: null,
    control_regex_msg: null,
    control_title: 'Text control',
    control_type: 'text',
    control_value: 'toto',
  };
  const fileId = '1234';
  const formState = [{ controls: [control] }];
  const setFormState = () => {
    return undefined;
  };

  it('Should render', () => {
    mount(
      <div id="root">
        <ThemeProvider theme={BPITheme}>
          <BPIGlobalStyle />
          <TextControl
            context={'edit'}
            control={control}
            fileId={fileId}
            formState={formState}
            setFormState={setFormState}
          />
        </ThemeProvider>
      </div>,
    );
    cy.waitForReact(10000, '#root');
  });
});
