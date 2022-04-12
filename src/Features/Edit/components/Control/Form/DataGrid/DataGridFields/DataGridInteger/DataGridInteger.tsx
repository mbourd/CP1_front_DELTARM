import React, { useCallback, useEffect, useState } from 'react';
import { DataGridIntegerStyled } from './DataGridInteger.style';
import { FormError, InputBase } from 'Shared/components';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { useSecurity } from '../../../../../../../../Packages/Security';

interface IProps {
  value: string;
  fileId: string;
  controlId: string;
  columnId: number;
  rowNum: number;
}

export const DataGridInteger: React.FC<IProps> = ({
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

  const saveValue = useCallback(
    (value) => {
      saveValueDataGrid(
        fileId,
        controlId,
        columnId,
        rowNum,
        jwt,
        setCurrentValue,
        setErrorMessage,
        value,
      );
    },
    [controlId, jwt, fileId, columnId, rowNum],
  );

  return (
    <DataGridIntegerStyled>
      <InputBase
        id={`integer input grid`}
        placeholder={'Nombre entier'}
        disabled={false}
        defaultValue={currentValue ? currentValue : ''}
        onBlur={(e) => saveValue(e.currentTarget.value)}
      />
      {errorMessage ? (
        <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
      ) : null}
    </DataGridIntegerStyled>
  );
};
