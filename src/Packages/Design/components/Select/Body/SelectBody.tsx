import React, { useContext } from 'react';
import { ListItem } from '@material-ui/core';
import { SelectBodyStyled } from './SelectBody.style';
import { Radio } from '../../Radio';
import { SelectContext } from '../SelectContext';

export const SelectBody: React.FC = (): React.ReactElement => {
  const { data, selectedValues, multiple, name, onChange } =
    useContext(SelectContext);

  return (
    <SelectBodyStyled className={'_SelectBody'}>
      {Object.values(data).map((datum) => {
        return (
          <ListItem className={'_SelectItem'} disableGutters key={datum.id}>
            <Radio
              value={datum.value}
              checked={(selectedValues && selectedValues[datum.id]) || false}
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
    </SelectBodyStyled>
  );
};
