import React from 'react';
import { useTrans } from 'Services';
import { ErrorNoData, HeadingOne } from 'Shared/components';
import { DashboardStyled } from './Dashboard.style';
import { DashboardSearch } from './Search/DashboardSearch';

export const NoData: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const [trans] = useTrans('Dashboard');

  return (
    <DashboardStyled>
      <HeadingOne>{trans('pageTitle')}</HeadingOne>
      <DashboardSearch />
      <ErrorNoData message={trans('noRecordAvailable')} />
    </DashboardStyled>
  );
};
