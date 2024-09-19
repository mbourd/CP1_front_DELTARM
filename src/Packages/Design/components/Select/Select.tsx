import React from 'react';
import { ClickAwayListener } from '@mui/material';
import { SelectStyled } from './Select.style';
import { ISelect, ISelectData } from './types';
import { SelectLabel } from './Label/SelectLabel';
import { useSizing } from '../../hooks';
import { SelectContainer } from './Container/SelectContainer';
import { SelectContext } from './SelectContext';

export const Select: React.FC<React.PropsWithChildren<ISelect>> = ({
  bdc = 'primary',
  bdr,
  data,
  open = false,
  name,
  label,
  error = false,
  onInit,
  onOpen,
  onClose,
  labelBdc = 'disabled',
  multiple = false,
  children,
  labelBdr,
  labelBgc = 'transparent',
  onChange,
  closable = true,
  disabled = false,
  labelColor = 'text',
  closeOnSelect = false,
  setChoiceIsKo,
  selectedValues = {},
}): React.ReactElement => {
  /**
   * -----------------------------------------------------------
   * HOOKS
   * -----------------------------------------------------------
   */
  const sizing = useSizing();

  if (!multiple) {
    const first = Object.keys(selectedValues)[0];
    selectedValues = first ? { [first]: true } : {};
  }

  const current_value_styles: any = Object.values(data).filter((d) => {
    return Number(d.id) === Number(Object.keys(selectedValues)[0]);
  });

  if (multiple) {
    const values = Object.keys(selectedValues)[0].split(';');
    selectedValues = {};
    if (values.includes('undefined')) {
      values.splice(values.indexOf('undefined'), 1);
    }
    values.map((key) => {
      return key
        ? (selectedValues = { ...selectedValues, [key]: true })
        : selectedValues;
    });
  }

  /**
   * -----------------------------------------------------------
   * STATES
   * -----------------------------------------------------------
   */
  const [selected, setSelected] = React.useState(selectedValues);
  const [initialValues] = React.useState(selectedValues);
  const [isOpen, setIsOpen] = React.useState(open);
  const [key] = React.useState(name);

  /**
   * -----------------------------------------------------------
   * VARIABLES
   * -----------------------------------------------------------
   */
  const selectContainerRef = React.createRef<HTMLDivElement>();

  const labels = Object.keys(selected).map((id) => {
    return data[id] ? data[id]?.label ?? data[id]?.value : null;
  });

  /**
   * -----------------------------------------------------------
   * FUNCTIONS
   * -----------------------------------------------------------
   */
  const toggleSelect = React.useCallback(() => {
    setIsOpen(!isOpen);

    if (isOpen && onClose) {
      onClose(selected);
    }

    if (!isOpen && onOpen) {
      onOpen(selected);
    }
  }, [onClose, onOpen, selected, isOpen]);

  const closeSelect = React.useCallback(() => {
    if (!closable) {
      return;
    }

    setIsOpen(false);
    if (onClose) {
      onClose(selected, key);
    }
  }, [onClose, selected, closable, key]);

  const onValueChange = React.useCallback(
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

  /**
   * -----------------------------------------------------------
   * CYCLE LIFE
   * -----------------------------------------------------------
   */
  React.useEffect(() => {
    if (onInit) {
      onInit(selected, key);
    }
  }, [onInit, selected, key]);

  React.useEffect(() => {
    if (error) {
      setSelected(initialValues);
    }
  }, [error, initialValues]);

  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
  return (
    <SelectContext.Provider
      value={{
        data,
        name,
        multiple,
        onChange: onValueChange,
        selectedValues: selected,
      }}
    >
      <SelectStyled
        $bdc={bdc}
        className={'_Select'}
        $bdr={bdr || sizing.radius}
      >
        <SelectLabel
          bgc={labelBgc}
          bdc={labelBdc}
          isOpen={isOpen}
          color={labelColor}
          containerBdc={bdc}
          isDisabled={disabled}
          bdr={labelBdr || sizing.radius}
          current_value_styles={current_value_styles}
          onClick={closable ? toggleSelect : undefined}
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
