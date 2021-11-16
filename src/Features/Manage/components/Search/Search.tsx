import React, { useCallback, useEffect } from 'react';
import { SearchStyled } from './Search.style';
import { InputBase } from 'Shared/components';
import { useTheme } from 'Styles';
import { storage, useTrans } from 'Services';

export interface SearchProps {
  placeholder?: string;
}

export const Search: React.FC<SearchProps> = ({
  placeholder,
}): React.ReactElement => {
  const theme = useTheme();
  const [trans] = useTrans('Manage');

  useEffect(() => {
    storage.setData('shared.component.search.value', '');
  }, []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    storage.setData('shared.component.search.value', e.currentTarget.value);
  }, []);

  return (
    <SearchStyled>
      <InputBase
        border={0}
        bdr={'4px'}
        bgc={theme.color.white.main}
        placeholder={placeholder || trans('searchPlaceholder')}
        className={'_BPIInputBase'}
        onChange={onChange}
      />
    </SearchStyled>
  );
};
