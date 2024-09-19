import React from 'react';
import { apiStorage } from 'Packages/Api';
import { Error500, ErrorNotFound } from 'Packages/Design/components';
import { PageLoader } from 'Shared/components';

apiStorage.addCallState(
  'ERROR',
  <Error500 title={'Oops...'} message={'Le serveur ne répond pas'} />,
);

apiStorage.addCallState(
  'SERVER_ERROR',
  <Error500 title={'Oops...'} message={'Le serveur ne répond pas'} />,
);

apiStorage.addCallState('NOT_FOUND', <ErrorNotFound />);

apiStorage.addCallState(
  'IS_LOADING',
  <PageLoader text={'Chargement des données...'} />,
);
