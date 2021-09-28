import React, { useCallback, useContext, useState } from 'react';
import { DashboardSearchStyled } from './DashboardSearch.style';
import { FormControlLabel, Paper, Radio, RadioGroup } from '@material-ui/core';
import { Button, FormError } from 'Shared/components';
import { Search } from 'Features/Manage/components/Search/Search';
import { SearchModal } from 'Features/Manage/components/Search/Modal/SearchModal';
import { AppContext, storage, useTrans } from 'Services';
import { FullSearchModal } from 'Features/Manage/components/Search/Modal/FullSearchModal';

export const DashboardSearch: React.FC = (): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchMode, setSearchMode] = useState('fileNum');
  const [fullSearch, setFullSearch] = useState<string>();
  const [trans] = useTrans('Manage');
  const { fileRegex, filePlaceholder } = useContext(AppContext);

  const regex = new RegExp(fileRegex);

  const onSearch = useCallback(() => {
    const value = storage.getData<string>('shared.component.search.value');

    if (searchMode === 'fileNum') {
      if (!value || !regex.test(value)) {
        setErrorMessage(trans('searchError'));

        return;
      }
      setIsModalOpen(true);
    } else {
      setFullSearch(value);
    }
  }, [trans, searchMode, regex]);

  return (
    <DashboardSearchStyled>
      <FormError>{errorMessage}</FormError>
      <Paper className={'search-container'} elevation={0}>
        <Search
          placeholder={searchMode === 'fileNum' ? filePlaceholder : 'Contrepartie emprunteuse ou nom de famille'}
        />
      </Paper>
      <div className={'buttons-container'}>
        <div className="search-mode-toggle">
          <RadioGroup value={searchMode} onChange={(_, value) => setSearchMode(value)} row>
            <FormControlLabel value="fileNum" control={<Radio size="small" />} label="Rechercher par numéro" />
            <FormControlLabel
              value="full"
              control={<Radio size="small" />}
              label="Rechercher par contrepartie ou utilisateur"
            />
          </RadioGroup>
        </div>
        <Button onClick={onSearch}>{trans('searchButtonLabel')}</Button>
      </div>
      {isModalOpen ? <SearchModal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> : null}
      {fullSearch && <FullSearchModal search={fullSearch} onClose={() => setFullSearch(undefined)} />}
    </DashboardSearchStyled>
  );
};
