import React from 'react';
import { NotFoundStyled } from './NotFound.style';
import { ErrorNoData, HeadingOne } from 'Shared/components';
import { EditStyled } from '../Edit.style';

interface IProps {
  title: string;
}

export const NotFound: React.FC<IProps> = ({ title }): React.ReactElement => {
  return (
    <EditStyled>
      <HeadingOne>{title}</HeadingOne>
      <NotFoundStyled>
        <ErrorNoData message={"Le dossier recherché n'exisite pas"} />
      </NotFoundStyled>
    </EditStyled>
  );
};
