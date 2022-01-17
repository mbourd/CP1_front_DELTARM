import React from 'react';
import { SearchBar } from './SearchBar';
import { worker } from '../../../../mocks/server';
import { rest } from 'msw';
import data from '../../../../mocks/fixtures/modal/modal';
import { RecoilRoot } from 'recoil';

export default {
  title: 'SearchBar',
  component: SearchBar,
  decorators: [
    (story: any) => (
      <RecoilRoot>
        <div className="p-6">{story()}</div>
      </RecoilRoot>
    ),
  ],
};

const Template: any = (args: any) => {
  worker?.use(
    rest.get(
      'https://controle-api-dev.deltarm.com:8082/contr_perm/get_search_test?value=',
      (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data));
      },
    ),
  );

  return <SearchBar {...args} />;
};

export const Search = Template.bind({});
Search.args = {
  btn_lib: 'Un libellé storybookien',
  options: [
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
    {
      lib: 'Recherche Globale',
      placeholder: 'Chaîne de caractère à rechercher',
      regex: null,
      regex_msg: null,
      action: {
        endpoint: '/contr_perm/get_search_test?value=',
        method: 'GET',
        params: null,
      },
    },
  ],
};
