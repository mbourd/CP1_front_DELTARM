import React from 'react';
import { ManageStyled } from './Manage.style';
import { HeadingOne } from 'Shared/components';
import { useTrans } from 'Services';
import { Search } from './Search/Search';
import { Card } from './Card/Card';
import { Filter } from './Filter/Filter';
import { cards } from './fixtures';
import { Sort } from './Sort/Sort';
import { Button } from 'Shared/components';

export const Manage: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Manage');

  return (
    <ManageStyled>
      <HeadingOne>{trans('manage')}</HeadingOne>
      <div className={'search-container'}>
        <Search />
      </div>
      <div className={'filter-and-sort-container'}>
        <Filter />
        <Sort />
        <Button type={'default'} size={'small'}>
          Lancer la recherche
        </Button>
        <Button color={'error'} size={'small'}>
          Réinitialiser les filtres
        </Button>
      </div>
      {cards.map((card) => {
        return <Card {...card} key={card.id} />;
      })}
    </ManageStyled>
  );
};
