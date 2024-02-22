import React, { useCallback, useEffect, useState } from 'react';
import { DataGridPercentStyled } from './DataGridPercent.style';
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

export const DataGridPercent: React.FC<React.PropsWithChildren<IProps>> = ({
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
      currentValue,
      mandatory,
      trans,
    ],
  );

  const controlValue = currentValue
    ? parseFloat(currentValue)?.toFixed(2)
    : currentValue;

  useEffect(() => {
    if (mandatory && editable && !currentValue) {
      setErrorMessage(trans('mandatoryValue'));
    }
    if (!mandatory) {
      setErrorMessage(null);
    }
  }, [mandatory, editable, currentValue, trans]);

  return (
    <DataGridPercentStyled>
      <InputBase
        placeholder={trans('percentage')}
        id={`input grid`}
        disabled={!editable}
        color={editable ? 'text' : 'disabled'}
        defaultValue={controlValue ? controlValue : ''}
        onBlur={(e) => saveValue(e.currentTarget.value)}
        icon={
          <i
            style={{
              paddingLeft: '5px',
              color: editable ? 'text' : 'disabled',
            }}
            className="material-icons"
          >
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
