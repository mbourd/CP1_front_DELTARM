import { formatDecimalDigit, kFormatter } from 'Services';
import React from 'react';
import { CustomDecimalRendererStyled } from './CustomDecimalRenderer.style';
import BigNumber from 'bignumber.js';
import { DataGridDetailsRowsCell, IApiControl } from 'Features/Edit/types';

type CustomDecimalRendererPropsType = {
  props: any;
  field_data?: DataGridDetailsRowsCell;
  control?: IApiControl;
  fileId?: string;
  jwt?: string;
  seterrors?: React.Dispatch<React.SetStateAction<string>>;
};

const CustomDecimalRenderer: React.FC<CustomDecimalRendererPropsType> = ({
  props,
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
    val = hasThousandSeparator ? kFormatter(decimalFormat) : decimalFormat;
    props.data[name]['_computedValueBigNumber'] = new BigNumber(props.value);
  }

  return <CustomDecimalRendererStyled>{val}</CustomDecimalRendererStyled>;
};

export { CustomDecimalRenderer };
