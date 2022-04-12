import React, { useCallback, useEffect, useState } from 'react';
import { DataGridFinancialStyled } from './DataGridFinancial.style';
import { FormError, InputBase } from 'Shared/components';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { useSecurity } from '../../../../../../../../Packages/Security';
import { EuroIcon } from '../../../../../../../../Packages/Design';

interface IProps {
  value: string;
  fileId: string;
  controlId: string;
  columnId: number;
  rowNum: number;
}

export const DataGridFinancial: React.FC<IProps> = ({
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

  const controlValue = currentValue
    ? parseFloat(currentValue)?.toFixed(2)
    : currentValue;

  return (
    <DataGridFinancialStyled>
      <InputBase
        placeholder={'Euro'}
        id={`input grid`}
        disabled={false}
        defaultValue={controlValue ? controlValue : ''}
        onBlur={(e) => saveValue(e.currentTarget.value)}
        icon={<EuroIcon />}
      />
      {errorMessage ? (
        <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
      ) : null}
    </DataGridFinancialStyled>
  );
};
