import React, { useCallback, useEffect, useState } from 'react';
import { IElementModal } from '../types';
import { FieldName } from 'react-hook-form/dist/types/fields';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { useTransEdit } from 'Features/Edit';
import { FormError, InputBase } from '../../../../Packages/Design/components';

type DatePickerModalDynamicPropsType = {
  element: IElementModal;
  index: number;
  handleChangeValue: (id: any, value: any) => void;
  register: (name: FieldName<any>, rules?: RegisterOptions) => void;
  defaultDate: string;
};

const DatePickerModalDynamic: React.FC<DatePickerModalDynamicPropsType> = ({
  element,
  index,
  handleChangeValue,
  register,
  defaultDate,
}) => {
  const { trans } = useTransEdit();
  const [value, setValue] = useState(element.value);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (element.attribute?.mandatory && !value) {
      setErrorMessage(trans('mandatoryValue'));
    }
    if (element.attribute?.mandatory && value) {
      setErrorMessage('');
    }
  }, [value, element.attribute.mandatory, trans]);

  const checkMandatory = useCallback((value: any) => {
    setValue(value);
  }, []);

  return (
    <>
      <InputBase
        border={element.attribute.type === 'hidden' ? 0 : 1}
        key={index}
        type={'date'}
        placeholder={element.attribute?.placeholder}
        id={element.attribute?.id}
        name={element.attribute?.id}
        multiline={element.attribute?.multiline}
        multilineRows={
          element.attribute?.multilineRows
            ? element.attribute.multilineRows
            : undefined
        }
        required={element.attribute?.mandatory}
        defaultValue={(element?.value as string) ?? defaultDate}
        onChange={(e) =>
          handleChangeValue(e.currentTarget.id, e.currentTarget.value)
        }
        onBlur={(e) => checkMandatory(e.currentTarget.value)}
        {...(register(`${element.attribute?.id}`, {
          required: element.attribute?.mandatory,
        }) as any as Record<string | number | symbol, any>)}
      />
      {errorMessage ? <FormError>{errorMessage}</FormError> : null}
    </>
  );
};

export { DatePickerModalDynamic };
