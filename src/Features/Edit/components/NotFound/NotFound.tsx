import React from 'react';
import { NotFoundStyled } from './NotFound.style';
import { ErrorNoData, HeadingOne } from 'Shared/components';
import { EditStyled } from '../Edit.style';
import { useTrans } from '../../../../Services';

interface IProps {
  title?: string | null;
}

export const NotFound: React.FC<IProps> = ({ title }): React.ReactElement => {
  const [trans] = useTrans('Edit');

  return (
    <EditStyled>
      {title && <HeadingOne>{title}</HeadingOne>}
      <NotFoundStyled>
        <ErrorNoData message={trans('fileNotExists')} />
      </NotFoundStyled>
    </EditStyled>
  );
};
