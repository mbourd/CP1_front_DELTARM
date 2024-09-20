import React from 'react';
import { IApiCompliance, ICompliance } from '../../../../types';
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
  profilRestrictCode?: IApiCompliance['compliance_profil_restrict'];
}

const profil_restrict_labels = {
  1: 'déclarants',
  2: 'contrôleurs',
  3: 'superviseurs',
};

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
  profilRestrictCode,
}): React.ReactElement | null => {
  /**
   * -----------------------------------------------------------
   * STATES
   * -----------------------------------------------------------
   */
  const [showComplianceFields, setShowComplianceFields] =
    React.useState<boolean>(false);

  const errorMessage = React.useMemo(() => {
    const profilLabel = (
      profilRestrictCode ? profil_restrict_labels[profilRestrictCode] : null
    ) as keyof typeof profil_restrict_labels | null;

    return `Action non autorisée ${profilLabel ? `(réservée au profil ${profilLabel})` : ''}`;
  }, [profilRestrictCode]);

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
            errorMessage={errorMessage}
            setIsResolved={setIsResolved}
            checkedColor={compliance?.complianceCheckColor}
            uncheckedColor={compliance?.complianceUncheckColor}
          />
        ) : null}
        {choiceIsKo && checked ? (
          <span
            onClick={
              isDisabled
                ? () => toast.error(errorMessage)
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
