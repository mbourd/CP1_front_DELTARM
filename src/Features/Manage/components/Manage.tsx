import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ManageStyled } from './Manage.style';
import { BreadCrumb, FormError, HeadingOne } from 'Shared/components';
import { router, SecurityContext, storage, SwitchCallState, useApi, useSecurity, useTrans } from 'Services';
import { Search } from './Search/Search';
import { Card } from './Card/Card';
import { Filter } from './Filter/Filter';
import { Button } from 'Shared/components';
import { Divider, FormControlLabel, Paper, Radio, RadioGroup } from '@material-ui/core';
import { ICard } from './Card/types';
import { SearchModal } from './Search/Modal/SearchModal';
import { IsLoading } from './IsLoading';
import { NoData } from './NoData';
import { FullSearchModal } from './Search/Modal/FullSearchModal';

export const Manage: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Manage');
  const { request, callState, send, data } = useApi<ICard[]>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchMode, setSearchMode] = useState('fileNum');
  const [fullSearch, setFullSearch] = useState<string>();
  const { user } = useSecurity();
  const { logout } = useContext(SecurityContext);

  if (!user.isLogged()) {
    logout();
  }

  const initStages: Record<number | string, true> = {};
  const initStates: Record<number | string, true> = {};
  const initRoles: Record<number | string, true> = {};
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

  if (queries.role_id) {
    queries.role_id.split(/[,;_]/).map((roleId) => {
      initRoles[roleId] = true;

      return roleId;
    });
  }

  const applyFilters = useCallback(() => {
    const stages = storage.getData<Record<string, true>>('manage.filter.stages');
    const states = storage.getData<Record<string, true>>('manage.filter.states');
    const roles = storage.getData<Record<string, true>>('manage.filter.roles');

    const filters: Record<string, string> = {};

    const stageValues = stages ? Object.keys(stages).join('_') : undefined;
    const stateValues = states ? Object.keys(states).join('_') : undefined;
    const roleValues = roles ? Object.keys(roles).join('_') : undefined;

    if (stageValues) {
      filters.stage_id = stageValues;
    }

    if (stateValues) {
      filters.state_id = stateValues;
    }

    if (roleValues) {
      filters.role_id = roleValues;
    }

    router.redirectTo('manage', {}, filters);
  }, []);

  const onSearch = useCallback(() => {
    const value = storage.getData<string>('shared.component.search.value');

    if (searchMode === 'fileNum') {
      if (!value || !/[a-z0-9]+\/[a-z0-9]+/i.test(value)) {
        setErrorMessage(trans('searchError'));

        return;
      }

      setIsModalOpen(true);
    } else {
      setFullSearch(value);
    }
  }, [trans, searchMode]);

  useEffect(() => {
    send('manage', {}, queries);

    return () => {
      request.abort();
    };
  }, [send, queries, request]);

  return (
    <>
      <BreadCrumb values={['Dashboard', 'Manage']} />
      <SwitchCallState
        callState={callState}
        states={{ IS_LOADING: <IsLoading />, NOT_INIT: <IsLoading />, NO_DATA: <NoData /> }}
      >
        <ManageStyled>
          <HeadingOne>{trans('pageTitle')}</HeadingOne>
          <FormError>{errorMessage}</FormError>
          <Paper className={'search-container'} elevation={0}>
            <Search
              placeholder={
                searchMode === 'fileNum' ? 'N°Dossier / N°Avenant' : 'Contrepartie emprunteuse ou nom de famille'
              }
            />
            <Divider className={'divider'} orientation="vertical" />
            <Filter initStages={initStages} initStates={initStates} initRoles={initRoles}>
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
              <Button color={'success'} onClick={applyFilters}>
                {trans('applyFilter')}
              </Button>
            </Filter>
          </Paper>
          <div className={'buttons-container'}>
            <div className="search-mode-toggle">
              <RadioGroup value={searchMode} onChange={(_, value) => setSearchMode(value)} row>
                <FormControlLabel value="fileNum" control={<Radio size="small" />} label="Rechercher par numéro " />
                <FormControlLabel
                  value="full"
                  control={<Radio size="small" />}
                  label="Rechercher par contrepartie ou utilisateur"
                />
              </RadioGroup>
            </div>
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
            <Button onClick={onSearch}>{trans('searchButtonLabel')}</Button>
          </div>
          {data?.map((card, index) => {
            return <Card {...card} key={index} />;
          })}
          {isModalOpen ? <SearchModal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> : null}
          {fullSearch && <FullSearchModal search={fullSearch} onClose={() => setFullSearch(undefined)} />}
        </ManageStyled>
      </SwitchCallState>
    </>
  );
};
