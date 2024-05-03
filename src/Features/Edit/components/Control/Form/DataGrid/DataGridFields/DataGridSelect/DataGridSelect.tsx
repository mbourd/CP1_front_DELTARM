import React, { useCallback, useEffect, useState } from 'react';
import { DataGridSelectStyled } from './DataGridSelect.style';
import { FormError, ISelectData, Select } from 'Shared/components';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { useSecurity } from '../../../../../../../../Packages/Security';
import { useTrans } from '../../../../../../../../Services';

interface IProps {
  value: string;
  answerChoices: Record<string, ISelectData>;
  fileId: string;
  controlId: string;
  columnId: number;
  rowNum: number;
  regex: RegExp | null;
  regexMsg: string | null;
  editable: boolean;
  mandatory: boolean;
}

export const DataGridSelect: React.FC<React.PropsWithChildren<IProps>> = ({
  value,
  answerChoices,
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

  const selectedValue: Record<string, true> = {
    [currentValue || '']: true,
  };

  const saveValue = useCallback(
    (value: any) => {
      if (regex && value) {
        const regexControl = new RegExp(regex, 'i');
        if (!value.match(regexControl) && regexMsg) {
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
        value,
      );
    },
    [regexMsg, regex, controlId, jwt, fileId, columnId, rowNum],
  );

  useEffect(() => {
    if (mandatory && editable && !currentValue) {
      setErrorMessage(trans('mandatoryValue'));
    }
    if (!mandatory) {
      setErrorMessage(null);
    }
  }, [mandatory, editable, currentValue, trans]);

  return (
    <DataGridSelectStyled>
      <Select
        closeOnSelect
        name={'select_list_data_grid'}
        data={answerChoices || {}}
        labelColor={editable ? 'text' : 'disabled'}
        labelBdc={editable ? 'text' : 'disabled'}
        disabled={!editable}
        selectedValues={selectedValue}
        onChange={(selectedValues) => {
          const value =
            Object.keys(selectedValues).length >= 2
              ? Object.keys(selectedValues).join(';')
              : Object.keys(selectedValues)[0];
          const val = value ? value : '';
          saveValue('' + val);
        }}
      >
        {trans('selectValue')}
      </Select>
      {errorMessage ? (
        <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
      ) : null}
    </DataGridSelectStyled>
  );
};
