import React from 'react';
import { SearchStyled } from './Search.style';
import { InputSearch } from 'Shared/components';
import { useTheme } from 'Styles';
import { useTrans } from 'Services';

export const Search: React.FC = (): React.ReactElement => {
  const theme = useTheme();
  const [trans] = useTrans('Manage');

  return (
    <SearchStyled>
      <InputSearch radius border={0} background={theme.color.white.main} placeholder={trans('searchPlaceholder')} />
    </SearchStyled>
  );
};
