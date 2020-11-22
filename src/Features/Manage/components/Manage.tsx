import React from 'react';
import { ManageStyled } from './Manage.style';
import { HeadingOne } from 'Shared/components';
import { useTrans } from 'Services';
import { Search } from './Search/Search';
import { Card } from './Card/Card';
import { cards } from './fixtures';

export const Manage: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Manage');

  return (
    <ManageStyled>
      <HeadingOne>{trans('manage')}</HeadingOne>
      <Search />
      {cards.map((card) => {
        return <Card {...card} key={card.id} />;
      })}
    </ManageStyled>
  );
};
