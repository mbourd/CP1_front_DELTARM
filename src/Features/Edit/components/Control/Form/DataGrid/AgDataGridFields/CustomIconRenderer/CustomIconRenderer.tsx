import { SvgIconComponent } from '@material-ui/icons';
import { AddLocationAltOutlined } from '@mui/icons-material';
import React, { useCallback } from 'react';
import { BPITooltip } from 'Shared/components';
import * as icons from '@mui/icons-material';

const CustomIconRenderer: React.FC<any> = ({
  props,
  control,
  fileId,
  jwt,
  seterrors,
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
    (iconName: any, color, size, action, hint): React.ReactElement | null => {
      // @ts-ignore
      const Icon = icons[iconName];
      if (!Icon) {
        return null;
      }
      // if (hint) {
      //   return (
      //     <BPITooltip title={hint}>
      //       <Icon
      //         style={{
      //           color,
      //           fontSize: size,
      //           cursor: action ? 'pointer' : 'initial',
      //         }}
      //         //   onClick={() => triggerAction(action)}
      //       />
      //     </BPITooltip>
      //   );
      // }

      return <Icon style={{ color, fontSize: size, marginTop: 4 }} />;
    },
    [],
  );

  return (
    <div>
      {field_data?.value?.split(';')[0] !== null || undefined ? (
        <div>
          {generateMaterialIcon(
            field_data?.value?.split(';')[0],
            field_data?.value?.split(';')[1]
              ? field_data?.value?.split(';')[1]
              : '#000000',
            field_data?.value?.split(';')[2]
              ? Number(field_data?.value?.split(';')[2])
              : 32,
            '',
            '',
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CustomIconRenderer;
