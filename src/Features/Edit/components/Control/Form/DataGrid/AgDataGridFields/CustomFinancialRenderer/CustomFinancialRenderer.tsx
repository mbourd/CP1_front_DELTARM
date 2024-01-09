import { formatDecimalDigit, kFormatter } from 'Services';
import React from 'react';
import { CustomFinancialRendererStyled } from './CustomFinancialRenderer.style';
import { EuroIcon } from 'Styles';
import { CustomFinancialSpanStyled } from './CustomFinancialRendererSpan.style';
import BigNumber from 'bignumber.js';
import { DataGridDetailsRowsCell, IApiControl } from 'Features/Edit/types';

type CustomFinancialRendererPropsType = {
  props: any;
  field_data?: DataGridDetailsRowsCell;
  control?: IApiControl;
  fileId?: string;
  jwt?: string;
  seterrors?: React.Dispatch<React.SetStateAction<string>>;
};

const CustomFinancialRenderer: React.FC<CustomFinancialRendererPropsType> = ({
  props,
  control,
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

  return (
    <CustomFinancialRendererStyled>
      {val !== '' && (
        <>
          {column?.currency_symbol ? (
            <CustomFinancialSpanStyled
              $font_size={
                control?.data_grid_detail?.datagrid_options?.datagrid_font_size
                  ? control?.data_grid_detail?.datagrid_options
                      ?.datagrid_font_size + 'px'
                  : '15px'
              }
              $margin_right={2 + 'px'}
            >
              {column?.currency_symbol}
            </CustomFinancialSpanStyled>
          ) : (
            <EuroIcon
              style={{
                fontSize: control?.data_grid_detail?.datagrid_options
                  ?.datagrid_font_size
                  ? control?.data_grid_detail?.datagrid_options
                      ?.datagrid_font_size
                  : '15',
                marginLeft: 2,
                marginBottom: -1,
              }}
            />
          )}
        </>
      )}
      {val}
    </CustomFinancialRendererStyled>
  );
};

export { CustomFinancialRenderer };
