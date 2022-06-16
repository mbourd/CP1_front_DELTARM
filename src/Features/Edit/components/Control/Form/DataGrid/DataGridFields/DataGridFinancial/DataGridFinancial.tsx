import React, { useCallback, useEffect, useState } from 'react';
import { DataGridFinancialStyled } from './DataGridFinancial.style';
import { FormError, InputBase } from 'Shared/components';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { useSecurity } from '../../../../../../../../Packages/Security';
import { EuroIcon } from '../../../../../../../../Packages/Design';
import { checkIfSameValues } from '../../../../../../../../Packages/Helpers/src/checkIfSameValues';

interface IProps {
  value: string;
  fileId: string;
  controlId: string;
  columnId: number;
  rowNum: number;
  regex: RegExp | null;
  regexMsg: string | null;
  editable: boolean;
  mandatory: boolean;
}

export const DataGridFinancial: React.FC<IProps> = ({
  value,
  fileId,
  controlId,
  columnId,
  rowNum,
  regex,
  regexMsg,
  editable,
  mandatory,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>('');
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
      if (regex && value) {
        const regexControl = new RegExp(regex, 'i');
        if (!value.match(regexControl) && regexMsg) {
          setErrorMessage(regexMsg);

          return;
        }
      }

      if (!checkIfSameValues(value, currentValue)) {
        setErrorMessage(null);
        if (mandatory && !value.trim()) {
          setErrorMessage('Valeur obligatoire');
        }

        return;
      }
      setErrorMessage(null);

      if (mandatory && !value.trim()) {
        setErrorMessage('Valeur obligatoire');
      }

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
    [
      regexMsg,
      regex,
      controlId,
      jwt,
      fileId,
      columnId,
      rowNum,
      currentValue,
      mandatory,
    ],
  );

  const controlValue = currentValue
    ? parseFloat(currentValue)?.toFixed(2)
    : currentValue;

  useEffect(() => {
    if (mandatory && editable && !currentValue) {
      setErrorMessage('Valeur obligatoire');
    }
    if (!mandatory) {
      setErrorMessage(null);
    }
  }, [mandatory, editable, currentValue]);

  return (
    <DataGridFinancialStyled>
      <InputBase
        placeholder={'Euro'}
        id={`input grid`}
        disabled={!editable}
        color={editable ? 'text' : 'disabled'}
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
