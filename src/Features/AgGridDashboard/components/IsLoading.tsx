import React from 'react';
import { useTrans } from 'Services';
import { PageLoader } from 'Shared/components';
import { AgGridDashboardStyled } from './AgGridDashboard.style';

export const IsLoading: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const [trans] = useTrans('Dashboard');

  return (
    <AgGridDashboardStyled>
      <PageLoader text={trans('loading', { ns: 'Default' })} />
    </AgGridDashboardStyled>
  );
};
