import React from 'react';
import { NotFoundStyled } from './NotFound.style';
import { ErrorNoData, HeadingOne } from 'Shared/components';
import { EditStyled } from '../Edit.style';
import { useTrans } from 'Services';

interface IProps {
  id: string;
}

export const NotFound: React.FC<IProps> = ({ id }): React.ReactElement => {
  const [trans] = useTrans('Edit');

  return (
    <EditStyled>
      <HeadingOne>{trans('pageTitle')}</HeadingOne>
      <NotFoundStyled>
        <ErrorNoData message={"Le dossier recherché n'exisite pas"} />
      </NotFoundStyled>
    </EditStyled>
  );
};
