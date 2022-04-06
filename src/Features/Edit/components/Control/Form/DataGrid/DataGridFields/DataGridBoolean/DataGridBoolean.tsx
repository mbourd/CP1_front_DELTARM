import React, { useCallback, useEffect, useState } from 'react';
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
  columnId: number;
  rowNum: number;
}

export const DataGridBoolean: React.FC<IProps> = ({
  value,
  fileId,
  controlId,
  columnId,
  rowNum,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [currentValue, setCurrentValue] = useState(value);
  const { user } = useSecurity();
  const jwt = user.getJwt();

  useEffect(() => {
    if (value) {
      setCurrentValue(value.toString());
    }
  }, [value]);

  const toggleAndSaveValue = useCallback(() => {
    saveValueDataGrid(
      fileId,
      controlId,
      columnId,
      rowNum,
      jwt,
      setCurrentValue,
      setErrorMessage,
      currentValue,
    );
  }, [controlId, jwt, fileId, currentValue, columnId, rowNum]);

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
        onClick={() => toggleAndSaveValue()}
      />
      {errorMessage ? (
        <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
      ) : null}
    </DataGridBooleanStyled>
  );
};
