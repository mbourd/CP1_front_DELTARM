import React from 'react';
import { GenericActionModal } from 'Shared/components/GenericActionModal/GenericActionModal';

interface IProps {
  open: boolean;
  onClose: () => void;
  fileId: string;
}

export const ClassifyModal: React.FC<IProps> = ({ open, onClose, fileId }): React.ReactElement | null => {
  return (
    <GenericActionModal
      open={open}
      onClose={onClose}
      fileId={fileId}
      actionLabel={'Classer sans suite'}
      successMessage={'Le dossier a bien été classé'}
      message={'Souhaitez-vous classer ce dossier sans suite ?'}
      postRouteName={'actionClassify'}
    />
  );
};
