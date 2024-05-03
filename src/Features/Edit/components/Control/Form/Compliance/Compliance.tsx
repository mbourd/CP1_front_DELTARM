import React, { useCallback, useState } from 'react';
import { ICompliance } from '../../../../types';
import { CheckboxCompliance } from './CheckboxCompliance/CheckboxCompliance';
import { ModalCompliance } from './ModalCompliance/ModalCompliance';
import { InsertDriveFile } from '@mui/icons-material';
import { ActionsComplianceContainer } from './Compliance.style';

interface IComplianceProps {
  label: string;
  checked: boolean;
  controlId: string;
  fileId: string;
  setIsResolved: React.Dispatch<React.SetStateAction<boolean>>;
  choiceIsKo: boolean;
  compliance: ICompliance;
}

export const Compliance: React.FC<
  React.PropsWithChildren<IComplianceProps>
> = ({
  choiceIsKo,
  controlId,
  fileId,
  checked,
  setIsResolved,
  compliance,
  label,
}): React.ReactElement | null => {
  const [showComplianceFields, setShowComplianceFields] =
    useState<boolean>(false);
  const handleClickDetailsCompliance = useCallback(() => {
    setShowComplianceFields(!showComplianceFields);
  }, [setShowComplianceFields, showComplianceFields]);

  return (
    <>
      <ActionsComplianceContainer>
        {choiceIsKo ? (
          <CheckboxCompliance
            checkedColor={compliance?.complianceCheckColor}
            uncheckedColor={compliance?.complianceUncheckColor}
            label={label}
            checked={checked}
            controlId={controlId}
            setIsResolved={setIsResolved}
          />
        ) : null}
        {choiceIsKo && checked ? (
          <span
            onClick={handleClickDetailsCompliance}
            className={'resolved-compliance'}
          >
            <InsertDriveFile />
          </span>
        ) : null}
      </ActionsComplianceContainer>
      {showComplianceFields && (
        <ModalCompliance
          open={showComplianceFields}
          onClose={() => setShowComplianceFields(false)}
          controlId={controlId}
          fileId={fileId}
        />
      )}
    </>
  );
};
