import React, { useCallback, useState } from 'react';
import { DataGridBooleanStyled } from './DataGridBoolean.style';
import { FormError } from 'Shared/components';
import { Checkbox } from '@mui/material';
import { stringToBoolean } from '../../../../../../../../Packages/Helpers/src/stringToBoolean';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { useSecurity } from '../../../../../../../../Packages/Security';
interface IProps {
  value: string;
  fileId: string;
  controlId: string;
}
export const DataGridBoolean: React.FC<IProps> = ({
  value,
  fileId,
  controlId,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [currentValue, setCurrentValue] = useState(value);
  const { user } = useSecurity();
  const jwt = user.getJwt();

  const toogleAndSaveValue = useCallback(() => {
    const booleanValue = !stringToBoolean(currentValue);

    saveValueDataGrid(
      fileId,
      controlId,
      jwt,
      setCurrentValue,
      setErrorMessage,
      value,
    );
  }, [controlId, jwt, fileId, currentValue, value]);

  const booleanValue = stringToBoolean(currentValue);

  return (
    <DataGridBooleanStyled>
      <Checkbox
        id={`checkbox-boolean`}
        title={'Validation'}
        style={{ paddingLeft: '0' }}
        disableRipple
        placeholder={'Validation'}
        disabled={false}
        checked={booleanValue ? booleanValue : false}
        onClick={() => toogleAndSaveValue()}
      />
      {errorMessage ? <FormError>{errorMessage}</FormError> : null}
    </DataGridBooleanStyled>
  );
};
