import React from 'react';
import { useTrans } from 'Services';
import { ErrorNoData, HeadingOne } from 'Shared/components';
import { DashboardStyled } from './Dashboard.style';

export const NoData: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Dashboard');

  return (
    <DashboardStyled>
      <HeadingOne>{trans('dashboard')}</HeadingOne>
      <ErrorNoData message={'Aucun dossier disponible'} />
    </DashboardStyled>
  );
};
