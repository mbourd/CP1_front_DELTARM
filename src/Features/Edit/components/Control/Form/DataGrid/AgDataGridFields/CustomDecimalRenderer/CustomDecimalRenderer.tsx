import { formatDecimalDigit, kFormatter } from 'Services';
import React from 'react';
import { CustomDecimalRendererStyled } from './CustomDecimalRenderer.style';

const CustomDecimalRenderer: React.FC<any> = ({
  props,
  field_data,
  control,
  fileId,
  jwt,
  seterrors,
}) => {
  const column = props.column.colDef;
  const decimalDigit = column?.decimal_digit || 0;
  const hasThousandSeparator: boolean = column?.thousand_separator || false;
  let value =
    props?.value !== null || undefined
      ? formatDecimalDigit(props.value, decimalDigit)
      : '';
  value = hasThousandSeparator ? kFormatter(value) : value;

  return (
    <CustomDecimalRendererStyled>
      {props?.value !== null || undefined ? value : ''}
    </CustomDecimalRendererStyled>
  );
};

export { CustomDecimalRenderer };
