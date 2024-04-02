// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec ""

import React from 'react';
import { SetupTestsComponents } from '../../../../../../cypress/utils/SetupTestsComponents';

import { GenerateFieldManual } from './GenerateFieldManual';
import { useForm } from 'react-hook-form';

describe('<GenerateFieldManual />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <GenerateFieldManual
          field={undefined}
          handleLeaveField={() => undefined}
          setListMissingField={() => undefined}
          // @ts-ignore
          control={undefined}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('GenerateFieldManual').should('not.exist');
  });

  it('should render if field=string', function () {
    const DummyFC: React.FC<any> = () => {
      const { control } = useForm({
        defaultValues: {},
      });

      return (
        <SetupTestsComponents>
          <GenerateFieldManual
            field={{ label: '', id: '', key: '', type: 'string', order: '' }}
            handleLeaveField={() => undefined}
            setListMissingField={() => undefined}
            control={control}
          />
        </SetupTestsComponents>
      );
    };

    cy.mount(<DummyFC />).waitReactApp();
    cy.react('GenerateFieldManual').should('exist');
  });

  it('should render if field=float', function () {
    const DummyFC: React.FC<any> = () => {
      const { control } = useForm({
        defaultValues: {},
      });

      return (
        <SetupTestsComponents>
          <GenerateFieldManual
            field={{ label: '', id: '', key: '', type: 'float', order: '' }}
            handleLeaveField={() => undefined}
            setListMissingField={() => undefined}
            control={control}
          />
        </SetupTestsComponents>
      );
    };

    cy.mount(<DummyFC />).waitReactApp();
    cy.react('GenerateFieldManual').should('exist');
  });

  it('should render if field=float', function () {
    const DummyFC: React.FC<any> = () => {
      const { control } = useForm({
        defaultValues: {},
      });

      return (
        <SetupTestsComponents>
          <GenerateFieldManual
            field={{
              label: '',
              id: '',
              key: '',
              type: 'select_list',
              order: '',
              option: { '1': { label: 'label1' } },
            }}
            handleLeaveField={() => undefined}
            setListMissingField={() => undefined}
            control={control}
          />
        </SetupTestsComponents>
      );
    };

    cy.mount(<DummyFC />).waitReactApp();
    cy.react('GenerateFieldManual').should('exist');
  });
});
