import React, { useCallback, useEffect, useState } from 'react';
import { CheckboxStyled } from './Checkbox.style';
import { ICheckboxData, ICheckboxWrapper } from './types';
import { CheckboxContext } from './CheckboxContext';
import { CheckboxContainer } from './Container/CheckboxContainer';
import { Button } from '@material-ui/core';

export const CheckboxWrapper: React.FC<ICheckboxWrapper> = ({
  data,
  multiple = true,
  name,
  selectedValues = {},
  onInit,
  onChange,
  error = false,
  setChoiceIsKo,
  disabled,
}): React.ReactElement => {
  if (!multiple) {
    const first = Object.keys(selectedValues)[0];

    selectedValues = first ? { [first]: true } : {};
  }
  if (multiple) {
    const values = Object.keys(selectedValues)[0].split(';');
    selectedValues = {};
    if (values.includes('undefined')) {
      values.splice(values.indexOf('undefined'), 1);
    }
    values.map((key, index) => {
      if (key) {
        return (selectedValues = { ...selectedValues, [key]: true });
      }

      return selectedValues;
    });
  }
  const [selected, setSelected] = useState(selectedValues);
  const [initialValues] = useState(selectedValues);
  const [key] = useState<string>(name);

  const checkboxContainerRef = React.createRef<HTMLDivElement>();

  const onValueChange = useCallback(
    (input: HTMLInputElement, value: ICheckboxData) => {
      let selectedVal = {};

      if (!multiple && input.checked) {
        selectedVal = { [value.id]: true };
      }

      if (multiple && input.checked) {
        selected[value.id] = true;
        selectedVal = selected;
      }

      if (!input.checked) {
        delete selected[value.id];
        selectedVal = selected;
      }

      if (onChange) {
        onChange(selectedVal);
      }

      if (value.isKo && setChoiceIsKo) {
        setChoiceIsKo(true);
      } else if (!value.isKo && setChoiceIsKo) {
        setChoiceIsKo(false);
      }

      setSelected(selectedVal);
    },
    [selected, multiple, onChange, setChoiceIsKo],
  );

  useEffect(() => {
    if (onInit) {
      onInit(selected, key);
    }
  }, [onInit, selected, key]);

  useEffect(() => {
    if (error) {
      setSelected(initialValues);
    }
  }, [error, initialValues]);

  return (
    <CheckboxContext.Provider
      value={{ data, multiple, name, selectedValues: selected, onChange: onValueChange, disabled }}
    >
      <Button
        disabled={disabled}
        style={{
          backgroundColor: 'transparent',
          textTransform: 'none',
          border: '1px solid black',
          display: 'block',
          width: '100%',
          padding: '0.3em',
        }}
        disableRipple
        disableTouchRipple
        disableElevation
        disableFocusRipple
      >
        <CheckboxStyled className={'_CheckboxContainer'}>
          <CheckboxContainer ref={checkboxContainerRef} />
        </CheckboxStyled>
      </Button>
    </CheckboxContext.Provider>
  );
};
