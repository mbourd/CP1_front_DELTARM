import { DataGridDetailsRowsCell } from 'Features/Edit/types';
import { formatDecimalDigit, kFormatter, isStringNumeric } from 'Services';
import BigNumber from 'bignumber.js';
import { create as mathCreate, all as mathAll } from 'mathjs';

export function ColumnFormulaValueGetter(params) {
  const column = params.column.colDef;
  const { decimal_digit: decimalDigit = 0 } = column;
  const {
    thousand_separator: hasThousandSeparator = false,
  }: Record<string, boolean> = column;
  const { currency_symbol: currencySymbol } = column;
  const [name, fieldValue]: string[] = params.column.getId().split('.');
  const formula: string = params.data[name][fieldValue];
  const ids = new Set(formula.match(/#\d+/gu));
  let equation = formula;
  let isValidValue = true;

  if (!params.data[name]?.['_cacheRegExps'])
    params.data[name]['_cacheRegExps'] = {};

  for (const obj of Object.values<DataGridDetailsRowsCell>(params.data)) {
    const colElmId = '#' + obj.col_elm_id;
    const objValue = obj.value;

    if (ids.has(colElmId)) {
      if (!isStringNumeric(objValue)) {
        isValidValue = false;
        break;
      }
      if (!params.data[name]['_cacheRegExps']?.[colElmId])
        params.data[name]['_cacheRegExps'][colElmId] = new RegExp(
          colElmId,
          'g',
        );

      equation = equation.replace(
        params.data[name]['_cacheRegExps'][colElmId],
        objValue,
      );
    }
  }

  if (!isValidValue) return '';
  if (
    !params.data[name]?.['_computedValueBigNumber'] ||
    params.data[name]?.['_parsedEquation'] !== equation
  ) {
    const math = mathCreate(mathAll);
    math.config({ number: 'BigNumber' });
    const resultEquation = math.evaluate(equation);
    const resultEquationStr = resultEquation.toString();
    let value = formatDecimalDigit(resultEquationStr, decimalDigit);
    value = hasThousandSeparator ? kFormatter(value) : value;
    value = currencySymbol ? `${currencySymbol} ${value}` : value;
    params.data[name]['_computedValueBigNumber'] = new BigNumber(
      resultEquationStr,
    );
    params.data[name]['_parsedEquation'] = equation;
    params.data[name]['_computedValueStr'] = resultEquationStr;
    params.data[name]['_computedValueFormatStr'] = value;
  }

  return params.data[name]['_computedValueFormatStr'];
}
