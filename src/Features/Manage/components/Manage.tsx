import React, { useCallback, useEffect, useState } from 'react';
import { ManageStyled } from './Manage.style';
import { Error, FormError, HeadingOne, PageLoader } from 'Shared/components';
import { router, storage, useApi, useTrans } from 'Services';
import { Search } from './Search/Search';
import { Card } from './Card/Card';
import { Filter } from './Filter/Filter';
import { Button } from 'Shared/components';
import { Divider, Paper } from '@material-ui/core';
import { ICard } from './Card/types';
import { SearchModal } from './Search/Modal/SearchModal';

export const Manage: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Manage');
  const { error, isLoading, send, data } = useApi<ICard[]>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initStages: Record<number | string, true> = {};
  const initStates: Record<number | string, true> = {};
  const queries = router.getQueries();

  if (queries.stage_id) {
    queries.stage_id.split(/[,;_]/).map((stageId) => {
      initStages[stageId] = true;

      return stageId;
    });
  }

  if (queries.state_id) {
    queries.state_id.split(/[,;_]/).map((stateId) => {
      initStates[stateId] = true;

      return stateId;
    });
  }

  const applyFilters = useCallback(() => {
    const stages = storage.getData<Record<string, true>>('manage.filter.stages');
    const states = storage.getData<Record<string, true>>('manage.filter.states');

    const filters: Record<string, string> = {};

    const stageValues = stages ? Object.keys(stages).join('_') : undefined;
    const stateValues = states ? Object.keys(states).join('_') : undefined;

    if (stageValues) {
      filters.stage_id = stageValues;
    }

    if (stateValues) {
      filters.state_id = stateValues;
    }

    router.redirectTo('manage', {}, filters);
  }, []);

  const onSearch = useCallback(() => {
    const value = storage.getData<string>('manage.search.value');
    if (!value || !/[a-z0-9]+\/[a-z0-9]+/i.test(value)) {
      setErrorMessage(trans('searchError'));

      return;
    }

    setIsModalOpen(true);
  }, [trans]);

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
      <HeadingOne>{trans('pageTitle')}</HeadingOne>
      <FormError>{errorMessage}</FormError>
      <Paper className={'search-container'} elevation={0}>
        <Search />
        <Divider className={'divider'} orientation="vertical" />
        <Filter initStages={initStages} initStates={initStates} />
      </Paper>
      <div className={'buttons-container'}>
        <Button onClick={onSearch}>{trans('searchButtonLabel')}</Button>
        <Button color={'success'} onClick={applyFilters}>
          {trans('applyFilter')}
        </Button>
        <Button
          color={'error'}
          size={'small'}
          onClick={() => {
            storage.removeData('manage');
            router.redirectTo('manage');
          }}
        >
          {trans('resetFilterButtonLabel')}
        </Button>
      </div>
      {files.length > 0 ? files : <p className={'empty'}>{trans('empty')}</p>}
      {isModalOpen ? <SearchModal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> : null}
    </ManageStyled>
  );
};
