import React, { useCallback, useEffect, useState } from 'react';
import { ClickAwayListener } from '@mui/material';
import { SelectStyled } from './Select.style';
import { ISelect, ISelectData } from './types';
import { SelectLabel } from './Label/SelectLabel';
import { useSizing } from '../../hooks';
import { SelectContainer } from './Container/SelectContainer';
import { SelectContext } from './SelectContext';

export const Select: React.FC<ISelect> = ({
  labelColor = 'text',
  labelBdc = 'disabled',
  labelBgc = 'transparent',
  labelBdr,
  label,
  open = false,
  disabled = false,
  closable = true,
  bdc = 'primary',
  bdr,
  children,
  data,
  multiple = false,
  name,
  selectedValues = {},
  onInit,
  onOpen,
  onClose,
  onChange,
  closeOnSelect = false,
  error = false,
  setChoiceIsKo,
}): React.ReactElement => {
  const sizing = useSizing();
  const [isOpen, setIsOpen] = useState(open);
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
    values.map((key) => {
      if (key) {
        return (selectedValues = { ...selectedValues, [key]: true });
      }

      return selectedValues;
    });
  }
  const [selected, setSelected] = useState(selectedValues);
  const [initialValues] = useState(selectedValues);
  const [key] = useState<string>(name);

  const selectContainerRef = React.createRef<HTMLDivElement>();

  const toggleSelect = useCallback(() => {
    setIsOpen(!isOpen);

    if (isOpen && onClose) {
      onClose(selected);
    }

    if (!isOpen && onOpen) {
      onOpen(selected);
    }
  }, [onClose, onOpen, selected, isOpen]);

  const closeSelect = useCallback(() => {
    if (!closable) {
      return;
    }

    setIsOpen(false);
    if (onClose) {
      onClose(selected, key);
    }
  }, [onClose, selected, closable, key]);

  const onValueChange = useCallback(
    (input: HTMLInputElement, value: ISelectData) => {
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

      if (closeOnSelect && !multiple) {
        closeSelect();
      }
    },
    [selected, multiple, onChange, closeOnSelect, closeSelect, setChoiceIsKo],
  );

  const labels = Object.keys(selected).map((id) => {
    return data[id] ? data[id].label : null;
  });

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
    <SelectContext.Provider
      value={{
        data,
        multiple,
        name,
        selectedValues: selected,
        onChange: onValueChange,
      }}
    >
      <SelectStyled className={'_Select'} bdc={bdc} bdr={bdr || sizing.radius}>
        <SelectLabel
          bdc={labelBdc}
          color={labelColor}
          bgc={labelBgc}
          bdr={labelBdr || sizing.radius}
          onClick={closable ? toggleSelect : undefined}
          isOpen={isOpen}
          isDisabled={disabled}
          containerBdc={bdc}
        >
          {labels.length > 0 ? labels.join(' | ') : label || children}
        </SelectLabel>
        {isOpen ? (
          <ClickAwayListener onClickAway={closeSelect}>
            <SelectContainer ref={selectContainerRef} />
          </ClickAwayListener>
        ) : null}
      </SelectStyled>
    </SelectContext.Provider>
  );
};
