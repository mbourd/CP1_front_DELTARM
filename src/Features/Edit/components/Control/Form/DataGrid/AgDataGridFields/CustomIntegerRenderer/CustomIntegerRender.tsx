import React from 'react';
import { CustomIntegerRendererStyled } from './CustomIntegerRenderer.style';
import { formatDecimalDigit, kFormatter } from 'Services';
import BigNumber from 'bignumber.js';

const CustomIntegerRenderer: React.FC<any> = ({
  props,
  // field_data,
  // control,
  // fileId,
  // jwt,
  // seterrors,
}) => {
  const column = props.column.colDef;
  const {
    thousand_separator: hasThousandSeparator = false,
  }: Record<string, boolean> = column;
  const [name]: string[] = props.column.getId().split('.');
  let val = '';
  const decimalFormat = formatDecimalDigit(props.value, 0);

  if (decimalFormat !== 'NaN' && props.value) {
    val = hasThousandSeparator ? kFormatter(decimalFormat) : decimalFormat;
    props.data[name]['_computedValueBigNumber'] = new BigNumber(props.value);
  }

  return <CustomIntegerRendererStyled>{val}</CustomIntegerRendererStyled>;
};

export { CustomIntegerRenderer };
