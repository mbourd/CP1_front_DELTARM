import React from 'react';
import { CustomPercentRendererStyled } from './CustomPercentRender.style';
import { formatDecimalDigit, kFormatter } from 'Services';

const CustomPercentRenderer: React.FC<any> = ({
  props,
  field_data,
  control,
  fileId,
  jwt,
  seterrors,
}) => {
  const column = props.column.colDef;
  const { decimal_digit: decimalDigit = 0 } = column;
  const {
    thousand_separator: hasThousandSeparator = false,
  }: Record<string, boolean> = column;
  let value =
    props?.value !== null || undefined
      ? formatDecimalDigit(props.value, decimalDigit)
      : '';
  value = hasThousandSeparator ? kFormatter(value) : value;

  return (
    <CustomPercentRendererStyled>
      {props.value !== null || undefined ? `% ${value}` : ''}
    </CustomPercentRendererStyled>
  );
};

export { CustomPercentRenderer };
