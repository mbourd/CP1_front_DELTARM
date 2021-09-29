import React from 'react';
import { Route } from 'react-router-dom';
import { DispatchRoute, router } from 'Services';
import { MainContentStyled } from './MainContent.style';
import { NotFoundComponent } from '../NotFoundComponent/NotFoundComponent';

export const MainContent: React.FC = (): React.ReactElement => {
  return (
    <MainContentStyled id={'main-content'}>
      <Route
        path={'*'}
        render={({ match: { url } }) => (
          <DispatchRoute url={url} router={router} notFoundComponent={NotFoundComponent} />
        )}
      />
    </MainContentStyled>
  );
};
