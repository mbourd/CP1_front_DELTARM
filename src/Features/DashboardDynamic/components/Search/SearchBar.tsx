import React, { useCallback, useState } from 'react';
import { SearchBarStyled } from './SearchBar.style';
import { FormControlLabel, Paper, Radio, RadioGroup } from '@mui/material';
import { Button, FormError } from 'Shared/components';
import { Search } from 'Features/Manage/components/Search/Search';
import { ISearchBarOptions } from '../types';
import { storage } from '../../../../Packages/Storage';
import { useActionButton } from '../../../../Packages/Helpers/src/useActionButton';
import { useSecurity } from '../../../../Packages/Security';

interface IProps {
  btn_lib: string;
  options: ISearchBarOptions[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchBar: React.FC<React.PropsWithChildren<IProps>> = ({
  btn_lib,
  options,
  setIsModalOpen,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentOption, setCurrentOption] = useState<ISearchBarOptions>(
    options[0],
  );
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const { actionButton } = useActionButton({ jwt, setIsModalOpen });

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
    const action = { ...currentOption.action };
    if (action.endpoint) {
      action['endpoint'] = action.endpoint.replace('value=', `value=${value}`);
    }
    actionButton(action);
  }, [currentOption, actionButton]);

  return (
    <SearchBarStyled>
      <FormError>{errorMessage}</FormError>
      <div className={'buttons-container'}>
        <div className="search-mode-toggle">
          <RadioGroup
            value={currentOption?.lib ?? ''}
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
      <Paper className={'search-container'} elevation={0}>
        <Search placeholder={currentOption?.placeholder ?? ''} />
        {btn_lib && <Button onClick={onSearch}>{btn_lib}</Button>}
      </Paper>
    </SearchBarStyled>
  );
};
