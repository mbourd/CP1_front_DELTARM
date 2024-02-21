import { BPITooltip } from 'Shared/components';
import React from 'react';
import { CustomDateStringRendererStyled } from './CustomDateStringRenderer.style';

type CustomDateStringRendererPropsType = {
  props: any;
  fieldName: string;
};

const CustomDateStringRenderer: React.FC<
  React.PropsWithChildren<CustomDateStringRendererPropsType>
> = ({ props, fieldName }) => {
  const content = (
    <div
      style={{
        cursor: props?.data?.[fieldName].action ? 'pointer' : 'initial',
      }}
      onClick={() =>
        props?.data?.[fieldName].action
          ? props?.colDef?.triggerAction(props?.data?.[fieldName].action)
          : undefined
      }
    >
      {props?.value}
    </div>
  );

  return (
    <CustomDateStringRendererStyled>
      {props?.data?.[fieldName].hint ? (
        <BPITooltip title={props?.data?.[fieldName].hint} placement="top">
          {content}
        </BPITooltip>
      ) : (
        content
      )}
    </CustomDateStringRendererStyled>
  );
};

export { CustomDateStringRenderer };
