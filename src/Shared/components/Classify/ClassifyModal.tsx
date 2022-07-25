import React from 'react';
import { GenericActionModal } from 'Shared/components/GenericActionModal/GenericActionModal';
import { useTrans } from '../../../Services';

interface IProps {
  open: boolean;
  onClose: () => void;
  fileId: string;
}

export const ClassifyModal: React.FC<IProps> = ({
  open,
  onClose,
  fileId,
}): React.ReactElement | null => {
  const [trans] = useTrans('SharedComponents');

  return (
    <GenericActionModal
      open={open}
      onClose={onClose}
      fileId={fileId}
      actionLabel={trans('classifyFollowup')}
      successMessage={trans('fileClassified')}
      message={trans('confirmClassificationWithoutContinuation')}
      postRouteName={'actionClassify'}
      comment
      commentRequired
      commentParam="reject_comment"
    />
  );
};
