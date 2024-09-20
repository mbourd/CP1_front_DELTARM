import React from 'react';
import { Checkbox } from 'Shared/components';
import { useApi } from 'Services';
import { IColor } from 'Packages/Design';
import { toast } from 'sonner';
import { EditValidationContext } from 'Features';

interface ICheckboxComplianceProps {
  label: string;
  checked: boolean;
  controlId: string;
  isDisabled?: boolean;
  checkedColor: keyof IColor;
  uncheckedColor: keyof IColor;
  errorMessage: string;
  setIsResolved: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CheckboxCompliance: React.FC<
  React.PropsWithChildren<ICheckboxComplianceProps>
> = ({
  label,
  checked,
  controlId,
  isDisabled,
  setIsResolved,
  checkedColor,
  uncheckedColor,
  errorMessage,
}): React.ReactElement => {
  /**
   * -----------------------------------------------------------
   * HOOKS
   * -----------------------------------------------------------
   */
  const { fileId } = React.useContext(EditValidationContext);
  const { send } = useApi({ promise: true });

  /**
   * -----------------------------------------------------------
   * FUNCTIONS
   * -----------------------------------------------------------
   */
  const onSaveResolvedCompliance = React.useCallback(() => {
    send(
      'setComplianceValue',
      {},
      {
        file_id: fileId,
        elm_id: controlId,
        compliance_resolved: !checked + '',
      },
    )
      ?.then(() => setIsResolved(!checked))
      .catch(() => setIsResolved(checked));
  }, [send, fileId, controlId, checked, setIsResolved]);

  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
  return (
    <Checkbox
      label={label}
      checked={checked}
      disabled={isDisabled}
      color={uncheckedColor}
      checkedColor={checkedColor}
      onChange={
        isDisabled ? () => toast.error(errorMessage) : onSaveResolvedCompliance
      }
    />
  );
};
