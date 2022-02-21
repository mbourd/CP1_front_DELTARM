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
}
export const DataGridSelect: React.FC<IProps> = ({
  value,
  answerChoices,
  fileId,
  controlId,
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
    <DataGridSelectStyled>
      <Select
        closeOnSelect
        name={'select_list_data_grid'}
        data={answerChoices || {}}
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
