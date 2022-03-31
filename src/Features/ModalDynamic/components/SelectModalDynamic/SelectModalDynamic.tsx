import React, { useCallback, useEffect, useState } from 'react';
import {
  FormError,
  ISelectData,
  Select,
} from '../../../../Packages/Design/components';
import { IElementModal } from '../types';
import { FieldName } from 'react-hook-form/dist/types/fields';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

interface InputModalDynamicProps {
  element: IElementModal;
  options: Record<string, ISelectData>;
  selectedValue: Record<string, true> | undefined;
  handleChangeValue: (id: any, value: any) => void;
  register: (name: FieldName<any>, rules?: RegisterOptions) => void;
}

export const SelectModalDynamic: React.FC<InputModalDynamicProps> = ({
  element,
  options,
  selectedValue,
  handleChangeValue,
  register,
}) => {
  const [value, setValue] = useState(element.value);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (element.attribute.mandatory && !value) {
      setErrorMessage('Valeur obligatoire');
    }
    if (element.attribute.mandatory && value) {
      setErrorMessage('');
    }
  }, [value, element.attribute.mandatory]);

  const checkMandatory = useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <>
      <Select
        labelBdc={'text'}
        closeOnSelect
        name={'select_list' + element.attribute?.id}
        data={options || {}}
        selectedValues={selectedValue}
        onChange={(selectedValues) => {
          const value =
            Object.keys(selectedValues).length >= 2
              ? Object.keys(selectedValues).join(';')
              : Object.keys(selectedValues)[0];
          handleChangeValue(element.attribute?.id, value ? value : '');
          checkMandatory(value ? value : '');

          return value ? value : '';
        }}
        {...register(`${element.attribute?.id}`, {
          required: element.attribute?.mandatory,
        })}
      >
        {'Sélectionner une valeur'}
      </Select>
      {errorMessage ? <FormError>{errorMessage}</FormError> : null}
    </>
  );
};
