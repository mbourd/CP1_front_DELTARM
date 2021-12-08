import React, { useEffect } from 'react';
import { BPITooltip } from 'Shared/components';
import { FileIcon, PlayerIcon } from 'Styles';
import { useApi, useTrans } from 'Services';
import { IconsContainerStyled } from './IconsContainer.style';

export const IconsContainer: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('MainHeader');
  const { send, data } = useApi<any>({ waitForAuthenticated: true });

  useEffect(() => {
    send('interfaceButtons');
  }, [send]);

  const interfaceButtons = data?.data.interface_btn;
  console.log(interfaceButtons);

  return (
    <IconsContainerStyled>
      {interfaceButtons?.aiv.visible && (
        <BPITooltip title={trans('reports')}>
          <a
            href={interfaceButtons.aiv.url}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <FileIcon fontSize={'large'} />
          </a>
        </BPITooltip>
      )}
      {interfaceButtons?.faq.visible && (
        <BPITooltip title={trans('F.A.Q')}>
          <a
            href={interfaceButtons.faq.url}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <PlayerIcon fontSize={'large'} />
          </a>
        </BPITooltip>
      )}
    </IconsContainerStyled>
  );
};
