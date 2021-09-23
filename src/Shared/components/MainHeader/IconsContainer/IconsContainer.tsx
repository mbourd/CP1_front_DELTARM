import React, { useEffect } from 'react';
import { BPITooltip } from 'Shared/components';
import { FileIcon, PlayerIcon } from 'Styles';
import { useApi, useTrans } from 'Services';
import { IconsContainerStyled } from './IconsContainer.style';

export const IconsContainer: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('MainHeader');
  const { send, data } = useApi<any>({ waitForAuthenticated: true });

  useEffect(() => {
    send('AIVUrl');
  }, [send]);

  return (
    <IconsContainerStyled>
      <BPITooltip title={trans('reports')}>
        <a href={data ? data.data.full_url : ''} target={'_blank'} rel={'noopener noreferrer'}>
          <FileIcon fontSize={'large'} />
        </a>
      </BPITooltip>
      <BPITooltip title={trans('F.A.Q')}>
        <a target="__blank" href="https://cp1.stonly.com/kb/fr">
          <PlayerIcon fontSize={'large'} />
        </a>
      </BPITooltip>
    </IconsContainerStyled>
  );
};
