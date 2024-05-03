import React, { useCallback } from 'react';
import { BPITooltip } from 'Shared/components';
import * as icons from '@mui/icons-material';
import { IActionButton } from 'Features/DashboardDynamic/components/types';
import { CustomIconRendererStyled } from './CustomIconRenderer.style';

const CustomIconRenderer: React.FC<React.PropsWithChildren<any>> = ({
  props,
  // control,
  // fileId,
  // jwt,
  // seterrors,
}) => {
  const data = props?.colDef?.field?.split('.')[0];
  const field_data = Object.entries(props?.data).reduce(
    (accum: any, current: any) => {
      const [key, value] = current;
      if (key.match(data)) {
        return value;
      }

      return accum;
    },
    [],
  );
  const generateMaterialIcon = useCallback(
    (
      iconName: string,
      color: string,
      size: string | number,
      action: IActionButton | null,
      hint: string,
    ): React.ReactElement | null => {
      const Icon = icons?.[iconName];

      if (!Icon) return null;

      const renderIcon = (
        <Icon
          style={{
            color,
            size: size,
            cursor: action ? 'pointer' : 'initial',
            marginTop: '4px',
          }}
          onClick={() =>
            props?.colDef?.triggerAction
              ? props?.colDef?.triggerAction(action)
              : undefined
          }
        />
      );

      return hint ? (
        <BPITooltip title={hint} placement={'top'}>
          {renderIcon}
        </BPITooltip>
      ) : (
        renderIcon
      );
    },
    [props],
  );

  return (
    <CustomIconRendererStyled>
      {field_data?.value?.split(';')[0] !== ''
        ? generateMaterialIcon(
            field_data?.value?.split(';')[0],
            field_data?.value?.split(';')[1]
              ? field_data?.value?.split(';')[1]
              : '#000000',
            field_data?.value?.split(';')[2]
              ? Number(field_data?.value?.split(';')[2])
              : 32,
            field_data?.action ? field_data?.action : null,
            field_data?.value?.split(';')[4]
              ? field_data?.value?.split(';')[4]
              : '',
          )
        : null}
    </CustomIconRendererStyled>
  );
};

export default CustomIconRenderer;
