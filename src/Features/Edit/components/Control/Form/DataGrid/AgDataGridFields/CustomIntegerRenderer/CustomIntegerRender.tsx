import React from 'react';
import { CustomIntegerRendererStyled } from './CustomIntegerRenderer.style';
import { kFormatter } from 'Services';

const CustomIntegerRenderer: React.FC<any> = ({
  props,
  field_data,
  control,
  fileId,
  jwt,
  seterrors,
}) => {
  const { colDef: column } = props.column;
  const hasThousandSeparator: boolean = column?.thousand_separator || false;
  const { value } = props;
  // const data = props?.colDef?.field?.split('.')[0];

  // const field_data = Object.entries(props?.data).reduce(
  //   (accum: any, current: any) => {
  //     const [key, value] = current;
  //     if (key.match(data)) {
  //       return value;
  //     }

  //     return accum;
  //   },
  //   [],
  // );

  return (
    <CustomIntegerRendererStyled>
      {value !== null || undefined
        ? hasThousandSeparator
          ? kFormatter(value)
          : value
        : ''}
    </CustomIntegerRendererStyled>
  );
};

export { CustomIntegerRenderer };
