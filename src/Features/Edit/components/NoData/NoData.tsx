import React from 'react';
import { NoDataStyled } from './NoData.style';
import { HeadingOne } from 'Shared/components';
import { EditStyled, EditTitleFileStyled } from '../Edit.style';
import { useTrans } from 'Services';
import { FolderOpenIcon } from 'Styles';

interface IProps {
  id: string;
}

export const NoData: React.FC<IProps> = ({ id }): React.ReactElement => {
  const [trans] = useTrans('Edit');

  return (
    <EditStyled>
      <HeadingOne>
        <p>{trans('pageTitle')}</p>
        <EditTitleFileStyled>
          <FolderOpenIcon />
          <span>{id}</span>
        </EditTitleFileStyled>
      </HeadingOne>
      <NoDataStyled>Données non disponibles</NoDataStyled>
    </EditStyled>
  );
};
