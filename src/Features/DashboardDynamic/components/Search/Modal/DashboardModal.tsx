import React, { FC } from 'react';
import { Button, Modal } from 'Shared/components';
import { SearchModalFooterStyled } from './SearchModal.style';

interface IDashboardModalProps {
  route: string;
  onClose: () => void;
  open: boolean;
}
export const DashboardModal: FC<IDashboardModalProps> = ({
  open,
  onClose,
  route,
}): React.ReactElement => {
  console.log(route);

  const footer = (
    <SearchModalFooterStyled>
      <Button color={'error'} onClick={onClose}>
        Annuler la recherche
      </Button>
    </SearchModalFooterStyled>
  );

  return (
    <Modal open={open} onClose={onClose} header={'header'} footer={footer}>
      Content + {route} + to get data
    </Modal>
  );
};
