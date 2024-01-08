import React from 'react';
import { BPITooltip } from 'Shared/components';
import { CustomInnerHTMLRendererStyled } from './CustomInnerHTMLRenderer.style';
import DOMPurify from 'dompurify';

type CustomInnerHTMLRendererPropsType = {
  props: any;
  fieldName: string;
};

const CustomInnerHTMLRenderer: React.FC<CustomInnerHTMLRendererPropsType> = ({
  props,
  fieldName,
}) => {
  const content = (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(props.value as string),
      }}
      style={{
        cursor: props?.data?.[fieldName].action ? 'pointer' : 'initial',
      }}
      onClick={() =>
        props?.data?.[fieldName].action
          ? props?.colDef?.triggerAction(props?.data?.[fieldName].action)
          : undefined
      }
    />
  );

  return (
    <CustomInnerHTMLRendererStyled>
      {props?.data?.[fieldName].hint ? (
        <BPITooltip title={props?.data?.[fieldName].hint} placement="top">
          {content}
        </BPITooltip>
      ) : (
        content
      )}
    </CustomInnerHTMLRendererStyled>
  );
};

export { CustomInnerHTMLRenderer };
