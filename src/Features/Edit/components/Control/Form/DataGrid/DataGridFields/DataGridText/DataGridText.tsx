import React, { useCallback, useEffect, useState } from 'react';
import { DataGridTextStyled } from './DataGridText.style';
import { FormError, InputBase } from 'Shared/components';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { useSecurity } from '../../../../../../../../Packages/Security';
interface IProps {
  value: string;
  fileId: string;
  controlId: string;
}
export const DataGridText: React.FC<IProps> = ({
  value,
  fileId,
  controlId,
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
        jwt,
        setCurrentValue,
        setErrorMessage,
        value,
      );
    },
    [controlId, jwt, fileId],
  );

  return (
    <DataGridTextStyled>
      <InputBase
        multiline={true}
        multilineRows={3}
        id={`input grid`}
        placeholder={'input grid'}
        disabled={false}
        defaultValue={currentValue ? currentValue : ''}
        onBlur={(e) => saveValue(e.currentTarget.value)}
      />
      {errorMessage ? (
        <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
      ) : null}
    </DataGridTextStyled>
  );
};
