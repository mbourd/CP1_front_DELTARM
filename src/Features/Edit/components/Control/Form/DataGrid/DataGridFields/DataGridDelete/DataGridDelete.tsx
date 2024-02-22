import React, { SetStateAction, useCallback, useState } from 'react';
import { BPITooltip, Button, FormError, Modal } from 'Shared/components';
import { DataGridDeleteStyled } from './DataGridDelete.style';
import { Delete } from '@mui/icons-material';
import { SearchModalFooterStyled } from '../../../../../../../Manage/components/Search/Modal/SearchModal.style';
import { deleteRow } from '../../apiRoutes/deleteRow';
import { useSecurity } from '../../../../../../../../Packages/Security';
import { useTrans } from '../../../../../../../../Services';

interface IProps {
  rowNum: number;
  fileId: string;
  controlId: string;
  setGridDetails: React.Dispatch<SetStateAction<any>>;
}

export const DataGridDelete: React.FC<React.PropsWithChildren<IProps>> = ({
  rowNum,
  fileId,
  controlId,
  setGridDetails,
}): React.ReactElement => {
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const [errorMessageDelete, setErrorMessageDelete] = useState<string>('');
  const [currentRowNum, setCurrentRowNum] = useState<string>(rowNum + '');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [trans] = useTrans('Edit');

  const handleShowModalToDelete = useCallback((row_num: string) => {
    setShowModal(true);
    setCurrentRowNum(row_num);
  }, []);

  const handleClickCloseModal = useCallback(() => {
    setShowModal(false);
    setErrorMessageDelete('');
  }, []);

  const handleClickConfirmDeleteRow = useCallback(() => {
    deleteRow(
      fileId,
      controlId,
      currentRowNum,
      jwt,
      setGridDetails,
      setErrorMessageDelete,
      setShowModal,
    );
  }, [controlId, jwt, fileId, currentRowNum, setGridDetails]);

  const deleteFooter = (
    <SearchModalFooterStyled>
      {errorMessageDelete && (
        <FormError style={{ padding: '10px' }}>{errorMessageDelete}</FormError>
      )}
      <Button color={'error'} onClick={handleClickConfirmDeleteRow}>
        Supprimer
      </Button>
    </SearchModalFooterStyled>
  );

  const deleteConfirm: any = trans('deleteConfirmation');

  return (
    <DataGridDeleteStyled>
      <BPITooltip title={trans('deleteLine')}>
        <Delete
          fontSize={'medium'}
          onClick={() => handleShowModalToDelete(rowNum + '')}
        />
      </BPITooltip>
      {showModal && (
        <Modal
          open={showModal}
          onClose={handleClickCloseModal}
          footer={deleteFooter}
        >
          {deleteConfirm}
        </Modal>
      )}
    </DataGridDeleteStyled>
  );
};
