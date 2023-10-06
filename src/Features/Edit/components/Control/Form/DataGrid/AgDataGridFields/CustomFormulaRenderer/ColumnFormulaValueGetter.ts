import { IRdg } from 'Features/Edit/types';
import { formatDecimalDigit, kFormatter } from 'Services';
import { evaluate as mathEval } from 'mathjs';

export function ColumnFormulaValueGetter(params) {
  const column = params.column.colDef;
  const { decimal_digit: decimalDigit = 0 } = column;
  const {
    thousand_separator: hasThousandSeparator = false,
  }: Record<string, boolean> = column;
  const { currency_symbol: currencySymbol } = column;
  const [name, fieldValue]: string[] = params.column.getId().split('.');
  const formula: string = params.data[name][fieldValue];
  const cellValue = (d: Record<string, IRdg>, id: string) => {
    return (
      Object.values(d).find((rdg) => rdg.col_elm_id === parseInt(id))?.value ||
      ''
    );
  };
  const ids = [...new Set(formula.match(/#\d+/gu) || [])];
  let equation = formula;

  for (const id of ids) {
    const cellVal = cellValue(params.data, id.replace('#', ''));

    if (!cellVal) return '';

    equation = equation.replaceAll(id, cellVal);
  }

  let value = formatDecimalDigit(mathEval(equation), decimalDigit);
  value = hasThousandSeparator ? kFormatter(value) : value;
  value = currencySymbol ? `${currencySymbol} ${value}` : value;

  return value;
}
