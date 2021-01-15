import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../types';
import { ActionsStyled } from './Actions.style';
import { BPIBadge, BPITooltip, ClassifyModal } from 'Shared/components';
import { CommentIcon, EditIcon, StopIcon, UserCheckedIcon } from 'Styles';
import { router, useTrans } from 'Services';

export const Actions: React.FC<Pick<ICard, 'id' | 'comments' | 'context'>> = ({
  id,
  comments,
  context,
}): React.ReactElement => {
  const [trans] = useTrans('Manage');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ActionsStyled>
      <BPITooltip title={context === 'EDIT' ? 'Editer le dossier' : 'Accéder à la validation'} placement={'left'}>
        <Link to={router.generatePath(context === 'EDIT' ? 'edit' : 'validation', { id }) || '/'}>
          {context === 'EDIT' ? <EditIcon className={'icon'} /> : <UserCheckedIcon className={'icon'} />}
        </Link>
      </BPITooltip>
      <BPITooltip title={trans('readComments')} placement={'left'}>
        <Link to={(router.generatePath(context === 'EDIT' ? 'edit' : 'validation', { id }) || '/') + '?comments=1'}>
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
        <span onClick={() => setIsModalOpen(true)} className={'classify'}>
          <StopIcon className={'icon'} />
        </span>
      </BPITooltip>
      {isModalOpen ? <ClassifyModal open={isModalOpen} onClose={() => setIsModalOpen(false)} fileId={id} /> : null}
    </ActionsStyled>
  );
};
