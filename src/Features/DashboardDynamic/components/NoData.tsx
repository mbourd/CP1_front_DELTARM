import React from 'react';
import { ErrorNoData } from 'Shared/components';
import { DashboardDynamicStyled } from './DashboardDynamic.style';

export const NoData: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  return (
    <DashboardDynamicStyled>
      <ErrorNoData message={'Aucun contrôle disponible'} />
    </DashboardDynamicStyled>
  );
};
