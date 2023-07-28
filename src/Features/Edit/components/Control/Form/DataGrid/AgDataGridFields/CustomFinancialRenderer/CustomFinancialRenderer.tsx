import { formatDecimalDigit, kFormatter } from 'Services';
import React from 'react';
import { CustomFinancialRendererStyled } from './CustomFinancialRenderer.style';
import { EuroIcon } from 'Styles';
import { CustomFinancialSpanStyled } from './CustomFinancialRendererSpan.style';

const CustomFinancialRenderer: React.FC<any> = ({
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
    <CustomFinancialRendererStyled>
      {(props?.value !== null || undefined) && (
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
      {props?.value !== null || undefined ? value : ''}
    </CustomFinancialRendererStyled>
  );
};

export { CustomFinancialRenderer };
