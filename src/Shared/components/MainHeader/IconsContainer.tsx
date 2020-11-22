import React from 'react';
import { Link } from 'react-router-dom';
import { BPITooltip, BPIBadge } from 'Shared/components';
import { CommentIcon, FileIcon, PlayerIcon } from 'Styles';
import { useTrans } from 'Services';
import { IconsContainerStyled } from './MainHeader.style';

export const IconsContainer: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('MainHeader');

  return (
    <IconsContainerStyled>
      <BPITooltip title={trans('reports')}>
        <Link to={'/'}>
          <FileIcon fontSize={'large'} />
        </Link>
      </BPITooltip>
      <BPITooltip title={trans('tutorials')}>
        <Link to={'/'}>
          <PlayerIcon fontSize={'large'} />
        </Link>
      </BPITooltip>
      <BPITooltip title={trans('comments')}>
        <Link to={'/'}>
          <BPIBadge content={8}>
            <CommentIcon fontSize={'large'} />
          </BPIBadge>
        </Link>
      </BPITooltip>
    </IconsContainerStyled>
  );
};
