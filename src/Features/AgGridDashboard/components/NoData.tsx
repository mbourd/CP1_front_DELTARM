import React from 'react';
import { ErrorNoData } from 'Shared/components';
import { AgGridDashboardStyled } from './AgGridDashboard.style';

export const NoData: React.FC = (): React.ReactElement => {
  return (
    <AgGridDashboardStyled>
      <ErrorNoData message={'Aucun contrôle disponible'} />
    </AgGridDashboardStyled>
  );
};
