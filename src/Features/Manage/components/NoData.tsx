import React from 'react';
import { useTrans } from 'Services';
import { ErrorNoData, HeadingOne } from 'Shared/components';
import { ManageStyled } from './Manage.style';

export const NoData: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Manage');

  return (
    <ManageStyled>
      <HeadingOne>{trans('pageTitle')}</HeadingOne>
      <ErrorNoData message={trans('empty')} />
    </ManageStyled>
  );
};
