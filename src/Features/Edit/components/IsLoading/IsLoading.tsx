import React from 'react';
import { useTrans } from 'Services';
import { HeadingOne, PageLoader } from 'Shared/components';
import { EditStyled } from '../Edit.style';

interface IProps {
  id: string;
}

export const IsLoading: React.FC<IProps> = ({ id }): React.ReactElement => {
  const [trans] = useTrans('Edit');

  return (
    <EditStyled>
      <HeadingOne>{trans('pageTitle')}</HeadingOne>
      <div>
        <PageLoader text={trans('loading', { ns: 'Default' })} />
      </div>
    </EditStyled>
  );
};
