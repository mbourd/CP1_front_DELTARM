import React from 'react';
import { useTrans } from 'Services';
import { PageLoader } from 'Shared/components';
import { DashboardDynamicStyled } from './DashboardDynamic.style';

export const IsLoading: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Dashboard');

  return (
    <DashboardDynamicStyled>
      <PageLoader text={trans('loading', { ns: 'Default' })} />
    </DashboardDynamicStyled>
  );
};
