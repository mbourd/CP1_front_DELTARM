import React from 'react';
import { useTrans } from 'Services';
import { HeadingOne, PageLoader } from 'Shared/components';
import { DashboardStyled } from './Dashboard.style';
import { DashboardSearch } from './Search/DashboardSearch';

export const IsLoading: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Dashboard');

  return (
    <DashboardStyled>
      <HeadingOne>{trans('dashboard')}</HeadingOne>
      <DashboardSearch />
      <PageLoader text={trans('loading', { ns: 'Default' })} />
    </DashboardStyled>
  );
};
