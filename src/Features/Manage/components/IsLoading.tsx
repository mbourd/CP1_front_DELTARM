import React from 'react';
import { useTrans } from 'Services';
import { HeadingOne, PageLoader } from 'Shared/components';
import { ManageStyled } from './Manage.style';

export const IsLoading: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const [trans] = useTrans('Dashboard');

  return (
    <ManageStyled>
      <HeadingOne>{trans('manage')}</HeadingOne>
      <PageLoader text={trans('loading', { ns: 'Default' })} />
    </ManageStyled>
  );
};
