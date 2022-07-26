import React, { useCallback, useEffect, useState } from 'react';
import { DataGridTextStyled } from './DataGridText.style';
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

export const DataGridText: React.FC<IProps> = ({
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
        setErrorMessage(trans('mandatoryValue'));
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
      trans,
    ],
  );

  useEffect(() => {
    if (mandatory && editable && !currentValue) {
      setErrorMessage(trans('mandatoryValue'));
    }
    if (mandatory) {
      setErrorMessage(null);
    }
  }, [mandatory, editable, currentValue, trans]);

  return (
    <DataGridTextStyled>
      <InputBase
        placeholder={trans('text')}
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
