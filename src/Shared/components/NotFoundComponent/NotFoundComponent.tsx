import React from 'react';

import { NotFoundComponentContainer } from './NotFoundComponent.style';
import { Error } from '../../../Packages/Design/components';
import icon from './error404.svg';
import { useTrans } from '../../../Services';

export const NotFoundComponent: React.FC = () => {
  const [trans] = useTrans('SharedComponents');

  return (
    <NotFoundComponentContainer>
      <Error icon={icon} message={trans('pageNotFound')} />
    </NotFoundComponentContainer>
  );
};
