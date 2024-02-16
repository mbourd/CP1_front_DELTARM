import React from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../types';
import { ActionsStyled } from './Actions.style';
import { BPIBadge, BPITooltip } from 'Shared/components';
import { CommentIcon, EditIcon, UserCheckedIcon } from 'Styles';
import { router, useTrans } from 'Services';

export const Actions: React.FC<
  React.PropsWithChildren<Pick<ICard, 'id' | 'comments' | 'context'>>
> = ({ id, comments, context }): React.ReactElement => {
  const [trans] = useTrans('Manage');

  return (
    <ActionsStyled>
      <BPITooltip
        title={
          context === 'EDIT' ? 'Editer le dossier' : 'Accéder à la validation'
        }
        placement={'left'}
      >
        <Link
          to={
            router.generatePath(context === 'EDIT' ? 'edit' : 'validation', {
              id,
            }) || '/'
          }
        >
          {context === 'EDIT' ? (
            <EditIcon className={'icon'} />
          ) : (
            <UserCheckedIcon className={'icon'} />
          )}
        </Link>
      </BPITooltip>
      <BPITooltip title={trans('numberComments')} placement={'left'}>
        <a>
          {comments && comments > 0 ? (
            <span className={'icon'}>
              <BPIBadge content={comments}>
                <CommentIcon />
              </BPIBadge>
            </span>
          ) : (
            <CommentIcon className={'icon'} />
          )}
        </a>
      </BPITooltip>
    </ActionsStyled>
  );
};
