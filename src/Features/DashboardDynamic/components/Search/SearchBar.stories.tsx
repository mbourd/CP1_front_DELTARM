import React from 'react';
import { SearchBar } from './SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => <SearchBar {...args} />;

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
      route: '/file/search',
    },
    {
      lib: "Rechercher par nom d'utilisateur",
      placeholder: "Nom de l'utilisateur",
      regex: null,
      regex_msg: null,
      route: '/file/search_name',
    },
    {
      lib: 'Recherche Globale',
      placeholder: 'Chaîne de caractère à rechercher',
      regex: null,
      regex_msg: null,
      route: '/file/search_global',
    },
  ],
};
