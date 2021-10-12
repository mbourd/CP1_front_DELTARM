import React, { useCallback, useContext, useState } from 'react';
import { Checkbox } from 'Shared/components';
import { EditValidationContext } from '../../../../../EditValidationContext';
import { getEnv, IUser, security } from '../../../../../../../Services';
import axios from 'axios';
import { IColor } from '../../../../../../../Packages/Design';

interface ICheckboxComplianceProps {
  label: string;
  checked: boolean;
  controlId: string;
  setIsResolved: React.Dispatch<React.SetStateAction<boolean>>;
  checkedColor: keyof IColor;
  uncheckedColor: keyof IColor;
}

export const CheckboxCompliance: React.FC<ICheckboxComplianceProps> = ({
  label,
  checked,
  controlId,
  setIsResolved,
  checkedColor,
  uncheckedColor,
}): React.ReactElement => {
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();
  const { fileId } = useContext(EditValidationContext);
  const saveResolvedCompliance = useCallback(() => {
    axios
      .post(
        `${getEnv('API_PROTOCOL')}://${getEnv(
          'API_HOST',
        )}/control/set_compliance?file_id=${fileId}&elm_id=${controlId}&compliance_resolved=${!checked}`,
        {},
        {
          headers: {
            Authorization: jwt,
          },
        },
      )
      .then(() => {
        setIsResolved(!checked);
      })
      .catch(() => {
        setIsResolved(checked);
      });
  }, [fileId, controlId, checked, setIsResolved, jwt]);

  return (
    <Checkbox
      checkedColor={checkedColor}
      color={uncheckedColor}
      label={label}
      onChange={saveResolvedCompliance}
      checked={checked}
    />
  );
};
