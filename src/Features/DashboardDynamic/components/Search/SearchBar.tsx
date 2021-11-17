import React, { useCallback, useState } from 'react';
import { SearchBarStyled } from './SearchBar.style';
import { FormControlLabel, Paper, Radio, RadioGroup } from '@material-ui/core';
import { Button, FormError } from 'Shared/components';
import { Search } from 'Features/Manage/components/Search/Search';
import { ISearchBarOptions } from '../types';
import { storage } from '../../../../Packages/Storage';
import { SearchModal } from './Modal/SearchModal';

interface IProps {
  btn_lib: string;
  options: ISearchBarOptions[];
}

export const SearchBar: React.FC<IProps> = ({
  btn_lib,
  options,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentOption, setCurrentOption] = useState<ISearchBarOptions>(
    options[0],
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChangeOption = useCallback(
    (value: string) => {
      const findOption = options.find((option) => option.lib === value);
      if (findOption) {
        setCurrentOption(findOption);
      }
      setErrorMessage(null);
    },
    [options],
  );

  const onSearch = useCallback(() => {
    const value = storage.getData<string>('shared.component.search.value');
    setErrorMessage(null);
    if (currentOption.regex) {
      if (!value || !new RegExp(currentOption.regex).test(value)) {
        setErrorMessage(currentOption.regex_msg);

        return;
      }
    }
    setIsModalOpen(true);
  }, [currentOption]);

  return (
    <SearchBarStyled>
      <FormError>{errorMessage}</FormError>
      <Paper className={'search-container'} elevation={0}>
        <Search placeholder={currentOption.placeholder} />
        {btn_lib && <Button onClick={onSearch}>{btn_lib}</Button>}
      </Paper>
      <div className={'buttons-container'}>
        <div className="search-mode-toggle">
          <RadioGroup
            value={currentOption.lib}
            row
            onChange={(_, value) => handleChangeOption(value)}
          >
            {options.map((option, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={option.lib}
                  control={<Radio size="small" />}
                  label={option.lib}
                />
              );
            })}
          </RadioGroup>
        </div>
      </div>
      {isModalOpen ? (
        <SearchModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      ) : null}
    </SearchBarStyled>
  );
};
