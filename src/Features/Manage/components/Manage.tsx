import React, { useEffect } from 'react';
import { ManageStyled } from './Manage.style';
import { Error, HeadingOne, PageLoader } from 'Shared/components';
import { useApi, useTrans } from 'Services';
import { Search } from './Search/Search';
import { Card } from './Card/Card';
import { Filter } from './Filter/Filter';
import { Sort } from './Sort/Sort';
import { Button } from 'Shared/components';
import { Divider, Paper } from '@material-ui/core';
import { ICard } from './Card/types';

export const Manage: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Manage');
  const { error, isLoading, send, data } = useApi<ICard[]>();

  useEffect(() => {
    send('manage');
  }, [send]);

  if (error) {
    const label = trans('serverErrorLabel', { ns: 'Default' });

    return (
      <Error title={'Oops!'} redirect={{ label: label, link: '/' }}>
        {trans('serverErrorMessage', { ns: 'Default' })}
      </Error>
    );
  }

  if (isLoading || !data) {
    return (
      <ManageStyled>
        <HeadingOne>{trans('manage')}</HeadingOne>
        <PageLoader text={trans('loading', { ns: 'Default' })} />
      </ManageStyled>
    );
  }

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
      {data.map((card) => {
        return <Card {...card} key={card.id} />;
      })}
    </ManageStyled>
  );
};
