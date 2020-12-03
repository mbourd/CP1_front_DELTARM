import React, { useContext, useState } from 'react';
import { Button, ClassifyModal } from 'Shared/components';
import { StopIcon } from 'Styles';
import { useTrans } from 'Services';
import { EditContext } from 'Features/Edit';
import { ClassifyStyled } from './Classify.style';

export const Classify: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditContext);

  return (
    <ClassifyStyled className={'action'}>
      <Button color={'error'} type={'alt'} startIcon={<StopIcon />} onClick={() => setIsModalOpen(!isModalOpen)}>
        {trans('classifyWithoutContinuation')}
      </Button>
      {isModalOpen ? <ClassifyModal open={isModalOpen} onClose={() => setIsModalOpen(false)} fileId={fileId} /> : null}
    </ClassifyStyled>
  );
};
