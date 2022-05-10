import React, { useCallback, useState } from 'react';
import { DataGridSelectStyled } from './DataGridSelect.style';
import { FormError, ISelectData, Select } from 'Shared/components';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { useSecurity } from '../../../../../../../../Packages/Security';

interface IProps {
  value: string;
  answerChoices: Record<string, ISelectData>;
  fileId: string;
  controlId: string;
  columnId: number;
  rowNum: number;
  regex: RegExp | null;
  regexMsg: string | null;
}

export const DataGridSelect: React.FC<IProps> = ({
  value,
  answerChoices,
  fileId,
  controlId,
  columnId,
  rowNum,
  regex,
  regexMsg,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [currentValue, setCurrentValue] = useState(value);
  const { user } = useSecurity();
  const jwt = user.getJwt();

  const selectedValue: Record<string, true> = {
    [currentValue || '']: true,
  };

  const saveValue = useCallback(
    (value) => {
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

  return (
    <DataGridSelectStyled>
      <Select
        closeOnSelect
        name={'select_list_data_grid'}
        data={answerChoices || {}}
        labelColor={'text'}
        labelBdc={'text'}
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
        {'Sélectionner une valeur'}
      </Select>
      {errorMessage ? (
        <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
      ) : null}
    </DataGridSelectStyled>
  );
};
