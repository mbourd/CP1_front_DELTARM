import React from 'react';
import { useTrans } from 'Services';
import { HeadingOne, PageLoader } from 'Shared/components';
import { EditStyled } from '../Edit.style';

interface IProps {
  title: string;
}

export const IsLoading: React.FC<IProps> = ({ title }): React.ReactElement => {
  const [trans] = useTrans('Edit');

  return (
    <EditStyled>
      <HeadingOne>{title}</HeadingOne>
      <div>
        <PageLoader text={trans('loading', { ns: 'Default' })} />
      </div>
    </EditStyled>
  );
};
