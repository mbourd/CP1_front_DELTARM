import React from 'react';
import { BPITooltip } from 'Shared/components';
import { CustomTextAltRendererStyled } from './CustomTextAltRenderer.style';

type CustomTextAltRendererPropsType = {
  props: any;
  fieldName: string;
};

const CustomTextAltRenderer: React.FC<
  React.PropsWithChildren<CustomTextAltRendererPropsType>
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
    <CustomTextAltRendererStyled>
      {props?.data?.[fieldName].hint ? (
        <BPITooltip title={props?.data?.[fieldName].hint} placement="top">
          {content}
        </BPITooltip>
      ) : (
        content
      )}
    </CustomTextAltRendererStyled>
  );
};

export { CustomTextAltRenderer };
