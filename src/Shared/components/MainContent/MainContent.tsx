import React from 'react';
import { Route } from 'react-router-dom';
import { DispatchRoute, router } from 'Services';
import { MainContentStyled } from './MainContent.style';
import { Error404 } from 'Shared/components';

export const MainContent: React.FC = (): React.ReactElement => {
  return (
    <MainContentStyled id={'main-content'}>
      <Route
        path={'*'}
        render={({ match: { url } }) => <DispatchRoute url={url} router={router} notFoundComponent={Error404} />}
      />
    </MainContentStyled>
  );
};
