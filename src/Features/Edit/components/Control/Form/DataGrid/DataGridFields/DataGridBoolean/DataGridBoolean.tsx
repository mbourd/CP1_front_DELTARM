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
  columnId: number;
  rowNum: number;
  regex: RegExp | null;
  regexMsg: string | null;
}

export const DataGridBoolean: React.FC<IProps> = ({
  value,
  fileId,
  controlId,
  columnId,
  rowNum,
  regex,
  regexMsg,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [currentValue, setCurrentValue] = useState<boolean>(
    stringToBoolean(value),
  );
  const { user } = useSecurity();
  const jwt = user.getJwt();

  const toggleAndSaveValue = useCallback(() => {
    const toggledValue = !currentValue;
    setCurrentValue(toggledValue);

    if (regex && currentValue) {
      const regexControl = new RegExp(regex, 'i');
      if (!currentValue.toString().match(regexControl) && regexMsg) {
        setErrorMessage(regexMsg);

        return;
      }
    }
    saveValueDataGrid(
      fileId,
      controlId,
      columnId,
      rowNum,
      jwt,
      setCurrentValue,
      setErrorMessage,
      toggledValue?.toString(),
    );
  }, [regexMsg, regex, controlId, jwt, fileId, currentValue, columnId, rowNum]);

  return (
    <DataGridBooleanStyled>
      <Checkbox
        id={`checkbox-boolean`}
        title={'Validation'}
        style={{ paddingLeft: '0', display: 'block', textAlign: 'center' }}
        disableRipple
        disabled={false}
        checked={currentValue ? currentValue : false}
        onClick={() => toggleAndSaveValue()}
      />
      {errorMessage ? (
        <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
      ) : null}
    </DataGridBooleanStyled>
  );
};
