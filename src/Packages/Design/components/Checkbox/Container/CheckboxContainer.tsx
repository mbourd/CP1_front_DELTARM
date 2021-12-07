import React, { useContext } from 'react';
import { ListItem } from '@material-ui/core';
import { CheckboxContainerStyled } from './CheckboxContainer.style';
import { Radio } from '../../Radio';
import { CheckboxContext } from '../CheckboxContext';

// eslint-disable-next-line react/display-name
export const CheckboxContainer = React.forwardRef<HTMLDivElement>(
  (props, ref): React.ReactElement => {
    const {
      data,
      selectedValues,
      multiple,
      name,
      onChange,
      disabled,
    } = useContext(CheckboxContext);

    return (
      <div ref={ref}>
        <CheckboxContainerStyled>
          {Object.values(data).map((datum) => {
            return (
              <ListItem
                className={'_CheckboxItem'}
                disableGutters
                key={datum.id}
              >
                <Radio
                  color={disabled ? 'disabled' : 'text'}
                  value={datum.value}
                  checked={
                    (selectedValues && selectedValues[datum.id]) || false
                  }
                  type={multiple ? 'checkbox' : 'radio'}
                  name={name}
                  onChange={(e) => {
                    if (onChange) {
                      onChange(e.currentTarget, datum);
                    }
                  }}
                >
                  {datum.label}
                </Radio>
              </ListItem>
            );
          })}
        </CheckboxContainerStyled>
      </div>
    );
  },
);
