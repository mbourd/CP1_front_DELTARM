import React from 'react';
import { useTrans } from 'Services';
import { HeadingOne, PageLoader } from 'Shared/components';
import { DashboardStyled } from './Dashboard.style';

export const IsLoading: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Dashboard');

  return (
    <DashboardStyled>
      <HeadingOne>{trans('dashboard')}</HeadingOne>
      <PageLoader text={trans('loading', { ns: 'Default' })} />
    </DashboardStyled>
  );
};
