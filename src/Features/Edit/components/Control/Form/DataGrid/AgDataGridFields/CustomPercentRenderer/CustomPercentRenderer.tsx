import React from 'react';
import { CustomPercentRendererStyled } from './CustomPercentRender.style';
import { formatDecimalDigit, kFormatter } from 'Services';
import BigNumber from 'bignumber.js';

const CustomPercentRenderer: React.FC<React.PropsWithChildren<any>> = ({
  props,
  // field_data,
  // control,
  // fileId,
  // jwt,
  // seterrors,
}) => {
  const column = props.column.colDef;
  const { decimal_digit: decimalDigit = 0 } = column;
  const {
    thousand_separator: hasThousandSeparator = false,
  }: Record<string, boolean> = column;
  const [name]: string[] = props.column.getId().split('.');
  let val = '';
  const decimalFormat = formatDecimalDigit(props.value, decimalDigit);

  if (decimalFormat !== 'NaN' && props.value) {
    val =
      '% ' + (hasThousandSeparator ? kFormatter(decimalFormat) : decimalFormat);
    props.data[name]['_computedValueBigNumber'] = new BigNumber(props.value);
  }

  return <CustomPercentRendererStyled>{val}</CustomPercentRendererStyled>;
};

export { CustomPercentRenderer };
