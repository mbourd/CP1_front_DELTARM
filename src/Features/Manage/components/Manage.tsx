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
import { Divider, Paper } from '@material-ui/core';

export const Manage: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Manage');

  return (
    <ManageStyled>
      <HeadingOne>{trans('manage')}</HeadingOne>
      <Paper className={'search-container'} elevation={0}>
        <Search />
        <Divider className={'divider'} orientation="vertical" />
        <Filter />
        <Sort />
      </Paper>
      <div className={'buttons-container'}>
        <Button type={'default'} size={'small'}>
          {trans('searchButtonLabel')}
        </Button>
        <Button color={'error'} size={'small'}>
          {trans('resetFilterButtonLabel')}
        </Button>
      </div>
      {cards.map((card) => {
        return <Card {...card} key={card.id} />;
      })}
    </ManageStyled>
  );
};
