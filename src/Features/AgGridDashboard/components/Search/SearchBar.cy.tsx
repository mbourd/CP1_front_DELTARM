// @ts-check
/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress/react18';

import { SetupTestsComponents } from '../../../../../cypress/utils/SetupTestsComponents';

import { ISearchBarOptions } from '../types';
import { SearchBar } from './SearchBar';

describe('<SearchBar />', () => {
  it('Should render', () => {
    const btn_label = 'Lancer la recherche';
    const options: ISearchBarOptions[] = [
      {
        lib: 'Rechercher par numéro',
        placeholder: 'Numéro de Dossier / Avenant',
        regex: '[0-9A-Za-z]\\/[0-9A-Za-z]',
        regex_msg:
          'La recherche doit respecter le format : N° de Dossier / Avenant',
        action: {
          endpoint: '/contr_perm/get_search_test?value=',
          method: 'GET',
          params: null,
        },
      },
      {
        lib: "Rechercher par nom d'utilisateur",
        placeholder: "Nom de l'utilisateur",
        regex: null,
        regex_msg: null,
        action: {
          endpoint: '/contr_perm/get_search_test?value=',
          method: 'GET',
          params: null,
        },
      },
    ];

    mount(
      <SetupTestsComponents>
        <SearchBar
          setIsModalOpen={() => false}
          btn_lib={btn_label}
          options={options}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.react('Search').should('have.length', 1).should('be.visible');
    cy.react('FormError').should('have.length', 1);
    cy.get('.search-container').should('have.length', 1).should('be.visible');
  });

  it('Should have the correct number of options', () => {
    const btn_label = 'Lancer la recherche';
    const options: ISearchBarOptions[] = [
      {
        lib: 'Rechercher par numéro',
        placeholder: 'Numéro de Dossier / Avenant',
        regex: '[0-9A-Za-z]\\/[0-9A-Za-z]',
        regex_msg:
          'La recherche doit respecter le format : N° de Dossier / Avenant',
        action: {
          endpoint: '/contr_perm/get_search_test?value=',
          method: 'GET',
          params: null,
        },
      },
      {
        lib: "Rechercher par nom d'utilisateur",
        placeholder: "Nom de l'utilisateur",
        regex: null,
        regex_msg: null,
        action: {
          endpoint: '/contr_perm/get_search_test?value=',
          method: 'GET',
          params: null,
        },
      },
    ];

    mount(
      <SetupTestsComponents>
        <SearchBar
          setIsModalOpen={() => false}
          btn_lib={btn_label}
          options={options}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.react('Search').should('have.length', 1).should('be.visible');
    cy.react('FormError').should('have.length', 1);
    cy.react('FormControlLabel')
      .should('have.length', options.length)
      .should('be.visible')
      .each(($el, i) => {
        cy.wrap($el).should('contain.text', options[i].lib);
      });
  });

  it('Input placeholder should change if click on radio option', () => {
    const btn_label = 'Lancer la recherche';
    const options: ISearchBarOptions[] = [
      {
        lib: 'Rechercher par numéro',
        placeholder: 'Numéro de Dossier / Avenant',
        regex: '[0-9A-Za-z]\\/[0-9A-Za-z]',
        regex_msg:
          'La recherche doit respecter le format : N° de Dossier / Avenant',
        action: {
          endpoint: '/contr_perm/get_search_test?value=',
          method: 'GET',
          params: null,
        },
      },
      {
        lib: "Rechercher par nom d'utilisateur",
        placeholder: "Nom de l'utilisateur",
        regex: null,
        regex_msg: null,
        action: {
          endpoint: '/contr_perm/get_search_test?value=',
          method: 'GET',
          params: null,
        },
      },
    ];

    mount(
      <SetupTestsComponents>
        <SearchBar
          setIsModalOpen={() => false}
          btn_lib={btn_label}
          options={options}
        />
      </SetupTestsComponents>,
    );
    cy.waitReactApp();

    cy.react('Search').should('have.length', 1).should('be.visible');
    cy.react('Radio').each(($el, i) => {
      cy.wrap($el).click();
      cy.react('Search')
        .react('InputBase')
        .find('input')
        .should('have.attr', 'placeholder', options[i].placeholder);
    });
    cy.react('Button').find('button').should('contain.text', btn_label);
  });
});
