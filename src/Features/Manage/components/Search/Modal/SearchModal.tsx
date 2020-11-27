import React from 'react';
import { SearchModalStyled } from './SearchModal.style';
import { Modal } from 'Shared/components';

interface IProps {
  open: boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SearchModal: React.FC<IProps> = ({ open, onClose }): React.ReactElement => {
  return (
    <Modal open={open} onClose={onClose}>
      <SearchModalStyled>Hello</SearchModalStyled>
    </Modal>
  );
};
