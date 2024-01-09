import React, { useEffect } from 'react';
import { useApi } from 'Services';
import { IconsContainerRender } from './IconsContainerRender';

export const IconsContainer: React.FC = (): React.ReactElement => {
  const { send, data } = useApi<any>({ waitForAuthenticated: true });

  useEffect(() => {
    send('interfaceButtons');
  }, [send]);

  const interfaceButtons = data?.data.interface_btn;

  return <IconsContainerRender interfaceButtons={interfaceButtons} />;
};
