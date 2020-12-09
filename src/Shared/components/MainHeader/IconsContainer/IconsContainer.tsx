import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BPITooltip } from 'Shared/components';
import { FileIcon, PlayerIcon } from 'Styles';
import { useApi, useTrans } from 'Services';
import { IconsContainerStyled } from './IconsContainer.style';

export const IconsContainer: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('MainHeader');
  const { send, data } = useApi<any>();

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
      <BPITooltip title={trans('tutorials')}>
        <Link to={'/'}>
          <PlayerIcon fontSize={'large'} />
        </Link>
      </BPITooltip>
    </IconsContainerStyled>
  );
};
