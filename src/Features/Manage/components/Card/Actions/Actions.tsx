import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../types';
import { ActionsStyled } from './Actions.style';
import { BPIBadge, BPITooltip } from 'Shared/components';
import { CommentIcon, EditIcon, StopIcon } from 'Styles';
import { useTrans } from 'Services';

export const Actions: React.FC<Pick<ICard, 'id' | 'comments'>> = ({ id, comments }): React.ReactElement => {
  const [trans] = useTrans('Manage');

  return (
    <ActionsStyled>
      <BPITooltip title={trans('edit')} placement={'left'}>
        <Link to={'/?' + id}>
          <EditIcon className={'icon'} />
        </Link>
      </BPITooltip>
      <BPITooltip title={trans('readComments')} placement={'left'}>
        <Link to={'/?' + id}>
          {comments && comments > 0 ? (
            <span className={'icon'}>
              <BPIBadge content={comments}>
                <CommentIcon />
              </BPIBadge>
            </span>
          ) : (
            <CommentIcon className={'icon'} />
          )}
        </Link>
      </BPITooltip>
      <BPITooltip title={trans('classify')} placement={'left'}>
        <Link to={'/?' + id}>
          <StopIcon className={'icon'} />
        </Link>
      </BPITooltip>
    </ActionsStyled>
  );
};
