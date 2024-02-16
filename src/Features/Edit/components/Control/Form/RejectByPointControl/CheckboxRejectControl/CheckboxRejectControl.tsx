import React, { useCallback, useContext, useState } from 'react';
import { Checkbox } from 'Shared/components';
import { EditValidationContext } from '../../../../../EditValidationContext';
import { IColor } from '../../../../../../../Packages/Design';
import { ModalRejectControl } from '../ModalRejectControl/ModalRejectControl';
import { IFileComment } from '../../../../../../Comments';

interface ICheckboxRejectedProps {
  isRejected: boolean;
  controlId: string;
  setIsRejected: React.Dispatch<React.SetStateAction<boolean>>;
  checkedColor: keyof IColor;
  uncheckedColor: keyof IColor;
  context: 'edit' | 'validate';
  setRejectComments: React.Dispatch<React.SetStateAction<IFileComment[]>>;
}

export const CheckboxRejectControl: React.FC<
  React.PropsWithChildren<ICheckboxRejectedProps>
> = ({
  isRejected,
  setIsRejected,
  controlId,
  checkedColor,
  uncheckedColor,
  context,
  setRejectComments,
}): React.ReactElement => {
  const { fileId } = useContext(EditValidationContext);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleChangeCheckbox = useCallback(() => {
    setIsRejected(!isRejected);
    setShowModal(!showModal);
  }, [setIsRejected, isRejected, showModal, setShowModal]);

  const [successCallRejection, setSuccessCallRejection] =
    useState<boolean>(false);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    if (!successCallRejection) {
      setIsRejected(!isRejected);
    }
  }, [isRejected, successCallRejection, setIsRejected]);

  switch (context) {
    case 'edit':
      return isRejected ? (
        <span style={{ color: 'red', fontWeight: 'bold' }}>Refusé</span>
      ) : (
        <span />
      );
    case 'validate':
      return (
        <>
          <Checkbox
            checkedColor={checkedColor}
            color={uncheckedColor}
            label={'Refuser'}
            onChange={handleChangeCheckbox}
            checked={isRejected}
          />
          {showModal && (
            <ModalRejectControl
              setRejectComments={setRejectComments}
              setSuccessCallRejection={setSuccessCallRejection}
              isRejected={isRejected}
              open={showModal}
              onClose={handleCloseModal}
              controlId={controlId}
              fileId={fileId}
            />
          )}
        </>
      );
  }
};
