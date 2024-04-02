// @ts-check
/// <reference types="cypress" />
/// <reference types="../../../../../cypress/support/component" />
// NOTE: Run CLI:
// yarn cypress:run:component --browser chrome --config video=false --spec "src/Features/DashboardDynamic/components/Search/SearchBar.job1.cy.tsx"

import React from 'react';
import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { SearchBar } from './SearchBar';
import { ISearchBarOptions } from '../types';

describe('<SearchBar />', function () {
  it('should render without crash', function () {
    cy.mount(
      <SetupTestsComponents>
        <SearchBar
          btn_lib={''}
          options={[]}
          setIsModalOpen={function (): void {}}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('SearchBar').should('exist');
  });

  it('should have btn_lib', function () {
    const btnLb = 'button lib';

    cy.mount(
      <SetupTestsComponents>
        <SearchBar
          btn_lib={btnLb}
          options={[]}
          setIsModalOpen={function (): void {}}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('SearchBar')
      .find('.search-container ._Button')
      .should('have.text', btnLb);
  });

  it('should render any number of search options', function () {
    const options: ISearchBarOptions[] = [
      {
        lib: 'hello',
        placeholder: '',
        regex: null,
        regex_msg: null,
        action: {
          method: 'DELETE',
          endpoint: '',
          params: null,
        },
      },
      {
        lib: 'hello2',
        placeholder: '',
        regex: null,
        regex_msg: null,
        action: {
          method: 'DELETE',
          endpoint: '',
          params: null,
        },
      },
      {
        lib: 'hello3',
        placeholder: '',
        regex: null,
        regex_msg: null,
        action: {
          method: 'DELETE',
          endpoint: '',
          params: null,
        },
      },
    ];

    cy.mount(
      <SetupTestsComponents>
        <SearchBar
          btn_lib={''}
          options={options}
          setIsModalOpen={function (): void {}}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('SearchBar')
      .find('label.MuiFormControlLabel-root')
      .should('have.length', options.length);
    cy.react('SearchBar')
      .find('label.MuiFormControlLabel-root')
      .each(($el, i) => {
        cy.wrap($el).should('have.text', options[i].lib);
      });
  });

  it('should change the placeholder when changing options', function () {
    const options: ISearchBarOptions[] = [
      {
        lib: 'hello',
        placeholder: 'placeholder1',
        regex: null,
        regex_msg: null,
        action: {
          method: 'DELETE',
          endpoint: '',
          params: null,
        },
      },
      {
        lib: 'hello2',
        placeholder: 'placeholder2',
        regex: null,
        regex_msg: null,
        action: {
          method: 'DELETE',
          endpoint: '',
          params: null,
        },
      },
      {
        lib: 'hello3',
        placeholder: 'placeholder3',
        regex: null,
        regex_msg: null,
        action: {
          method: 'DELETE',
          endpoint: '',
          params: null,
        },
      },
    ];

    cy.mount(
      <SetupTestsComponents>
        <SearchBar
          btn_lib={''}
          options={options}
          setIsModalOpen={function (): void {}}
        />
      </SetupTestsComponents>,
    ).waitReactApp();
    cy.react('SearchBar')
      .find('label.MuiFormControlLabel-root')
      .each(($radio, i) => {
        cy.wrap($radio)
          .realClick()
          .then(() => {
            cy.react('SearchBar')
              .react('Search')
              .find('input[type="text"]')
              .should('have.attr', 'placeholder', options[i].placeholder);
          });
      });
  });
});
