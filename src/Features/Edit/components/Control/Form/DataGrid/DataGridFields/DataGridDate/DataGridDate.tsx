import React, { useCallback, useEffect, useState } from 'react';
import { DataGridDateStyled } from './DataGridDate.style';
import { FormError, InputBase } from 'Shared/components';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { useSecurity } from '../../../../../../../../Packages/Security';
import { checkIfSameValues } from '../../../../../../../../Packages/Helpers/src/checkIfSameValues';
import { useTrans } from '../../../../../../../../Services';

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

export const DataGridDate: React.FC<IProps> = ({
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
  if (editable === undefined) {
    editable = true;
  }
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const [currentValue, setCurrentValue] = useState(value);
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const [trans] = useTrans('Edit');

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
          setErrorMessage(trans('mandatoryValue'));
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
      trans,
    ],
  );

  useEffect(() => {
    if (mandatory && editable && !currentValue) {
      setErrorMessage('Valeur obligatoire');
    }
    if (!mandatory) {
      setErrorMessage(null);
    }
  }, [mandatory, editable, currentValue]);

  return (
    <DataGridDateStyled>
      <InputBase
        id={`input date grid`}
        disabled={!editable}
        color={editable ? 'text' : 'disabled'}
        defaultValue={currentValue ? currentValue : ''}
        onBlur={(e) => saveValue(e.currentTarget.value)}
        type={'date'}
      />
      {errorMessage ? (
        <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
      ) : null}
    </DataGridDateStyled>
  );
};
