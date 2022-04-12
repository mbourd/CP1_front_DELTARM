import React, { useCallback, useEffect, useState } from 'react';
import { DataGridPercentStyled } from './DataGridPercent.style';
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

export const DataGridPercent: React.FC<IProps> = ({
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
    <DataGridPercentStyled>
      <InputBase
        placeholder={'Pourcentage'}
        id={`input grid`}
        disabled={false}
        defaultValue={controlValue ? controlValue : ''}
        onBlur={(e) => saveValue(e.currentTarget.value)}
        icon={
          <i style={{ paddingLeft: '5px' }} className="material-icons">
            %
          </i>
        }
      />
      {errorMessage ? (
        <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
      ) : null}
    </DataGridPercentStyled>
  );
};
