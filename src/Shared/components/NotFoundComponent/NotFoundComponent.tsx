import React from 'react';

import { NotFoundComponentContainer } from './NotFoundComponent.style';
import { Error } from '../../../Packages/Design/components';
import icon from './error404.svg';

export const NotFoundComponent: React.FC = () => {
  return (
    <NotFoundComponentContainer>
      <Error icon={icon} message={"La page n'a pas été trouvée"} />
    </NotFoundComponentContainer>
  );
};
