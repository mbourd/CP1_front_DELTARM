import React, { useCallback, useContext, useEffect, useState } from 'react';
import { DashboardSearchStyled } from './DashboardSearch.style';
import { FormControlLabel, Paper, Radio, RadioGroup } from '@material-ui/core';
import { Button, FormError } from 'Shared/components';
import { Search } from 'Features/Manage/components/Search/Search';
import { SearchModal } from 'Features/Manage/components/Search/Modal/SearchModal';
import { SecurityContext, storage, useApi, useTrans } from 'Services';
import { FullSearchModal } from 'Features/Manage/components/Search/Modal/FullSearchModal';

export const DashboardSearch: React.FC = (): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchMode, setSearchMode] = useState('fileNum');
  const [fullSearch, setFullSearch] = useState<string>();
  const [trans] = useTrans('Manage');
  const { data: context } = useContext(SecurityContext);
  const { send: clientInfos, data: dataClientInfos } = useApi<any>({
    waitForAuthenticated: true,
  });

  useEffect(() => {
    if (context.cli_id) {
      clientInfos('clientInfo', {}, { cli_id: context.cli_id });
    }
  }, [context.cli_id, clientInfos]);

  const onSearch = useCallback(() => {
    const value = storage.getData<string>('shared.component.search.value');

    if (searchMode === 'fileNum') {
      if (
        !value ||
        (dataClientInfos?.data[0].cli_file_name_regex &&
          !new RegExp(dataClientInfos?.data[0].cli_file_name_regex).test(value))
      ) {
        setErrorMessage(trans('searchError'));

        return;
      }
      setIsModalOpen(true);
    } else {
      setFullSearch(value);
    }
  }, [trans, searchMode, dataClientInfos]);

  return (
    <DashboardSearchStyled>
      <FormError>{errorMessage}</FormError>
      <Paper className={'search-container'} elevation={0}>
        <Search
          placeholder={
            searchMode === 'fileNum'
              ? dataClientInfos?.data[0].file_search_placeholder
              : trans('counterpartyBorrowerOrSurname')
          }
        />
      </Paper>
      <div className={'buttons-container'}>
        <div className="search-mode-toggle">
          <RadioGroup
            value={searchMode}
            onChange={(_, value) => setSearchMode(value)}
            row
          >
            <FormControlLabel
              value="fileNum"
              control={<Radio size="small" />}
              label={trans('searchByNumber')}
            />
            <FormControlLabel
              value="full"
              control={<Radio size="small" />}
              label={trans('searchByCounterPartyOrUser')}
            />
          </RadioGroup>
        </div>
        <Button onClick={onSearch}>{trans('searchButtonLabel')}</Button>
      </div>
      {isModalOpen && (
        <SearchModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
      {fullSearch && (
        <FullSearchModal
          search={fullSearch}
          onClose={() => setFullSearch(undefined)}
        />
      )}
    </DashboardSearchStyled>
  );
};
