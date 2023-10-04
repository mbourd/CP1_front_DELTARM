import React, { useEffect } from 'react';
import { BPITooltip } from 'Shared/components';
import { FileIcon, PlayerIcon } from 'Styles';
import { useApi, useTrans } from 'Services';
import { IconsContainerStyled } from './IconsContainer.style';
import { IconsContainerRender } from './IconsContainerRender';

export const IconsContainer: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('MainHeader');
  const { send, data } = useApi<any>({ waitForAuthenticated: true });

  useEffect(() => {
    send('interfaceButtons');
  }, [send]);

  const interfaceButtons = data?.data.interface_btn;

  return <IconsContainerRender interfaceButtons={interfaceButtons} />;
};
