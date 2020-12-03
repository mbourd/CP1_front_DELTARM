import React, { useCallback, useContext, useEffect } from 'react';
import './apiRoutes';
import { Button, FormLabel, Modal, PageLoader, Select } from 'Shared/components';
import { router, storage, useApi, useTrans } from 'Services';
import { IData } from './apiRoutes';
import { EditContext } from 'Features/Edit';
import { ModalFooterStyled } from './SubmitForValidation.style';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const ValidationModal: React.FC<IProps> = ({ open, onClose }): React.ReactElement | null => {
  const { error, isLoading, send, data } = useApi<IData>();
  const [trans] = useTrans('Default');
  const { fileId } = useContext(EditContext);

  useEffect(() => {
    send('getValidators', {}, { file_id: fileId });
  }, [send]);

  const submit = useCallback(() => {
    const selectedValues = storage.getData<Record<string, true>>('edit.selected.validators');
    const selectedValue = Object.keys(selectedValues as Record<string, true>)[0];
    send('askValidation', {}, { file_id: fileId, ask_to_user_id: selectedValue });
  }, []);

  const storeSelectedValues = useCallback((selectedValues: Record<string, true>) => {
    storage.setData('edit.selected.validators', selectedValues);
  }, []);

  let footer = null;
  let content = <p>Valideurs non disponibles</p>;

  if (error) {
    content = <p>Le serveur ne répond pas.</p>;
  }

  if (isLoading) {
    content = <PageLoader text={trans('loading')} />;
  }

  if (data && !data.error && data.type === 'ASK_VALIDATION') {
    router.redirectTo('dashboard');

    return null;
  }

  if (data && data.error && data.type === 'ASK_VALIDATION') {
    content = <p>{data.errorMessage}</p>;
  }

  if (data && !data.error && data.type === 'GET_VALIDATORS') {
    const first = Object.keys(data.validators)[0];

    content = (
      <>
        <FormLabel>Selectionez un valideur</FormLabel>
        <Select
          name={'validators'}
          data={data.validators}
          multiple={false}
          selectedValues={{ [first]: true }}
          onInit={storeSelectedValues}
          onClose={storeSelectedValues}
        >
          Selectionez un valideur
        </Select>
      </>
    );

    footer = (
      <ModalFooterStyled>
        <Button color={'error'} onClick={onClose}>
          Annuler la soumission
        </Button>
        <Button color={'success'} onClick={submit}>
          Soumettre à validation
        </Button>
      </ModalFooterStyled>
    );
  }

  return (
    <Modal open={open} onClose={onClose} width={'sm'} height={'400px'} footer={footer}>
      {content}
    </Modal>
  );
};
