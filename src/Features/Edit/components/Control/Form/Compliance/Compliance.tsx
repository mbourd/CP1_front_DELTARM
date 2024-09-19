import React from 'react';
import { ICompliance } from '../../../../types';
import { CheckboxCompliance } from 'Features/Edit/components/Control';
import { ModalCompliance } from './ModalCompliance/ModalCompliance';
import { InsertDriveFile } from '@mui/icons-material';
import { ActionsComplianceContainer } from './Compliance.style';
import { toast } from 'sonner';

interface IComplianceProps {
  label: string;
  fileId: string;
  checked: boolean;
  controlId: string;
  choiceIsKo: boolean;
  isDisabled?: boolean;
  compliance: ICompliance;
  setIsResolved: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Compliance: React.FC<
  React.PropsWithChildren<IComplianceProps>
> = ({
  label,
  fileId,
  checked,
  controlId,
  isDisabled,
  choiceIsKo,
  compliance,
  setIsResolved,
}): React.ReactElement | null => {
  /**
   * -----------------------------------------------------------
   * STATES
   * -----------------------------------------------------------
   */
  const [showComplianceFields, setShowComplianceFields] =
    React.useState<boolean>(false);

  /**
   * -----------------------------------------------------------
   * FUNCTIONS
   * -----------------------------------------------------------
   */
  const handleClickDetailsCompliance = React.useCallback(() => {
    setShowComplianceFields(!showComplianceFields);
  }, [setShowComplianceFields, showComplianceFields]);

  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
  return (
    <>
      <ActionsComplianceContainer>
        {choiceIsKo ? (
          <CheckboxCompliance
            label={label}
            checked={checked}
            controlId={controlId}
            isDisabled={isDisabled}
            setIsResolved={setIsResolved}
            checkedColor={compliance?.complianceCheckColor}
            uncheckedColor={compliance?.complianceUncheckColor}
          />
        ) : null}
        {choiceIsKo && checked ? (
          <span
            onClick={
              isDisabled
                ? () => toast.error('Action non autorisée')
                : handleClickDetailsCompliance
            }
            className={
              isDisabled
                ? 'resolved-compliance-disabled'
                : 'resolved-compliance'
            }
          >
            <InsertDriveFile />
          </span>
        ) : null}
      </ActionsComplianceContainer>
      {showComplianceFields && (
        <ModalCompliance
          fileId={fileId}
          controlId={controlId}
          open={showComplianceFields}
          onClose={() => setShowComplianceFields(false)}
        />
      )}
    </>
  );
};
