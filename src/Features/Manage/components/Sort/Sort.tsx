import React from 'react';
import { SortStyled } from './Sort.style';
import { SortIcon } from 'Styles';

export const Sort: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  return (
    <SortStyled>
      <SortIcon className={'sort-icon'} fontSize={'small'} />
    </SortStyled>
  );
};
