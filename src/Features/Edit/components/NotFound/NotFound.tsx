import React from 'react';
import { NotFoundStyled } from './NotFound.style';
import { ErrorNoData, HeadingOne } from 'Shared/components';
import { EditStyled, EditTitleFileStyled } from '../Edit.style';
import { useTrans } from 'Services';
import { FolderOpenIcon } from 'Styles';

interface IProps {
  id: string;
}

export const NotFound: React.FC<IProps> = ({ id }): React.ReactElement => {
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
      <NotFoundStyled>
        <ErrorNoData message={"Le dossier recherché n'exisite pas"} />
      </NotFoundStyled>
    </EditStyled>
  );
};
