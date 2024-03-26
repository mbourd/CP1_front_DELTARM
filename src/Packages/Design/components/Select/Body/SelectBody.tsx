import React, { useContext } from 'react';
import { ListItem } from '@mui/material';
import { SelectBodyStyled } from './SelectBody.style';
import { Radio } from '../../Radio';
import { SelectContext } from '../SelectContext';

export const SelectBody: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const { data, selectedValues, multiple, name, onChange } =
    useContext(SelectContext);

  return (
    <SelectBodyStyled className={'_SelectBody'}>
      {Object.values(data).map((datum) => {
        return (
          <ListItem
            className={'_SelectItem'}
            disableGutters
            key={datum.id}
            style={{ backgroundColor: `#${datum.background}` }}
          >
            <Radio
              value={datum.value}
              font_color={datum.font_color}
              font_style={datum.font_style}
              background={datum.background}
              id={datum.id}
              checked={(selectedValues && selectedValues[datum.id]) || false}
              type={multiple ? 'checkbox' : 'radio'}
              name={name}
              onChange={(e) => {
                if (onChange) {
                  onChange(e.currentTarget, datum);
                }
              }}
            >
              {datum?.label ?? datum?.value}
            </Radio>
          </ListItem>
        );
      })}
    </SelectBodyStyled>
  );
};
