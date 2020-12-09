import React, { useCallback, useState } from 'react';
import { DashboardSearchStyled } from './DashboardSearch.style';
import { Paper } from '@material-ui/core';
import { Button, FormError } from 'Shared/components';
import { Search } from 'Features/Manage/components/Search/Search';
import { SearchModal } from 'Features/Manage/components/Search/Modal/SearchModal';
import { storage, useTrans } from 'Services';

export const DashboardSearch: React.FC = (): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trans] = useTrans('Manage');

  const onSearch = useCallback(() => {
    const value = storage.getData<string>('shared.component.search.value');
    if (!value || !/[a-z0-9]+\/[a-z0-9]+/i.test(value)) {
      setErrorMessage(trans('searchError'));

      return;
    }

    setIsModalOpen(true);
  }, [trans]);

  return (
    <DashboardSearchStyled>
      <FormError>{errorMessage}</FormError>
      <Paper className={'search-container'} elevation={0}>
        <Search />
      </Paper>
      <div className={'buttons-container'}>
        <Button onClick={onSearch}>{trans('searchButtonLabel')}</Button>
      </div>
      {isModalOpen ? <SearchModal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> : null}
    </DashboardSearchStyled>
  );
};
