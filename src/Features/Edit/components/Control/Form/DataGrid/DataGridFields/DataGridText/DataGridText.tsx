import React, { useCallback, useEffect, useState } from 'react';
import { DataGridTextStyled } from './DataGridText.style';
import { FormError, InputBase } from 'Shared/components';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { useSecurity } from '../../../../../../../../Packages/Security';
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

export const DataGridText: React.FC<React.PropsWithChildren<IProps>> = ({
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

  useEffect(() => {
    if (value) {
      setCurrentValue(value.toString());
    }
  }, [value]);

  const saveValue = useCallback(
    (value: any) => {
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
      mandatory,
      currentValue,
    ],
  );

  useEffect(() => {
    if (mandatory && editable && !currentValue) {
      setErrorMessage('Valeur obligatoire');
    }
    if (mandatory) {
      setErrorMessage(null);
    }
  }, [mandatory, editable, currentValue]);

  return (
    <DataGridTextStyled>
      <InputBase
        placeholder={'Texte'}
        id={`input grid`}
        disabled={!editable}
        color={editable ? 'text' : 'disabled'}
        defaultValue={currentValue ? currentValue : ''}
        onBlur={(e) => saveValue(e.currentTarget.value)}
      />
      {errorMessage ? (
        <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
      ) : null}
    </DataGridTextStyled>
  );
};
