import React from 'react';
import { ErrorNoData } from 'Shared/components';
import { DashboardStyled } from './Dashboard.style';

export const NoData: React.FC = (): React.ReactElement => {
  return (
    <DashboardStyled>
      <ErrorNoData message={'Aucun contrôle disponible'} />
    </DashboardStyled>
  );
};
