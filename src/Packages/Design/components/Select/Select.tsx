import React, { useCallback, useEffect, useState } from 'react';
import { ClickAwayListener } from '@material-ui/core';
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
  open = true,
  bdc = 'primary',
  bdr,
  children,
  data,
  multiple = true,
  name,
  selectedValues = {},
  onInit,
  onOpen,
  onClose,
}): React.ReactElement => {
  const sizing = useSizing();
  const [isOpen, setIsOpen] = useState(open);
  if (!multiple) {
    selectedValues = { [Object.keys(selectedValues)[0]]: true };
  }
  const [selected, setSelected] = useState(selectedValues);

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
    setIsOpen(false);
    if (onClose) {
      onClose(selected);
    }
  }, [onClose, selected]);

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

      setSelected(selectedVal);
    },
    [selected, multiple],
  );

  const labels = Object.keys(selected).map((id) => {
    return data[id].label;
  });

  useEffect(() => {
    if (onInit) {
      onInit(selected);
    }
  }, [onInit, selected]);

  return (
    <SelectContext.Provider value={{ data, multiple, name, selectedValues: selected, onChange: onValueChange }}>
      <SelectStyled className={'_Select'} bdc={bdc} bdr={bdr || sizing.radius}>
        <SelectLabel
          bdc={labelBdc}
          color={labelColor}
          bgc={labelBgc}
          bdr={labelBdr || sizing.radius}
          onClick={toggleSelect}
          isOpen={isOpen}
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
