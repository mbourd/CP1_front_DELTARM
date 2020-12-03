import React, { useContext, useState } from 'react';
import { Button, WithoutContinuationModal } from 'Shared/components';
import { StopIcon } from 'Styles';
import { useTrans } from 'Services';
import { WithoutContinuationStyled } from './WithoutContinuation.style';
import { EditContext } from '../../../EditContext';

export const WithoutContinuation: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditContext);

  return (
    <WithoutContinuationStyled className={'action'}>
      <Button color={'error'} type={'alt'} startIcon={<StopIcon />} onClick={() => setIsModalOpen(!isModalOpen)}>
        {trans('classifyWithoutContinuation')}
      </Button>
      <WithoutContinuationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} fileId={fileId} />
    </WithoutContinuationStyled>
  );
};
