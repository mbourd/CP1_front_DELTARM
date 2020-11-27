import React, { useEffect } from 'react';
import { ManageStyled } from './Manage.style';
import { Error, HeadingOne, PageLoader } from 'Shared/components';
import { router, useApi, useTrans } from 'Services';
import { Search } from './Search/Search';
import { Card } from './Card/Card';
import { Filter } from './Filter/Filter';
import { Button } from 'Shared/components';
import { Divider, Paper } from '@material-ui/core';
import { ICard } from './Card/types';

export const Manage: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Manage');
  const { error, isLoading, send, data } = useApi<ICard[]>();

  const initStages: Record<number | string, true> = {};
  const initStates: Record<number | string, true> = {};

  const queries = router.getQueries();

  if (queries.stage_id) {
    queries.stage_id.split(/[,;]/).map((stageId) => {
      initStages[stageId] = true;

      return stageId;
    });
  }

  if (queries.state_id) {
    queries.state_id.split(/[,;]/).map((stateId) => {
      initStates[stateId] = true;

      return stateId;
    });
  }

  useEffect(() => {
    send('manage', {}, queries);
  }, [send, queries]);

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

  const files = data.map((card) => {
    return <Card {...card} key={card.id} />;
  });

  return (
    <ManageStyled>
      <HeadingOne>{trans('manage')}</HeadingOne>
      <Paper className={'search-container'} elevation={0}>
        <Search />
        <Divider className={'divider'} orientation="vertical" />
        <Filter initStages={initStages} initStates={initStates} />
        {/*<Sort />*/}
      </Paper>
      <div className={'buttons-container'}>
        <Button size={'small'}>{trans('searchButtonLabel')}</Button>
        <Button
          color={'success'}
          size={'small'}
          onClick={() => {
            send('manage');
          }}
        >
          {trans('applyFilter')}
        </Button>
        <Button
          color={'error'}
          size={'small'}
          onClick={() => {
            router.redirectTo('manage');
            send('manage');
          }}
        >
          {trans('resetFilterButtonLabel')}
        </Button>
      </div>
      {files.length > 0 ? files : <p className={'empty'}>{trans('empty')}</p>}
    </ManageStyled>
  );
};
