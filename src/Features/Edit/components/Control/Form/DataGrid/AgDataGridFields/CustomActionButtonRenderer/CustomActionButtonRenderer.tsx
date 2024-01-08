import { Button } from '@material-ui/core';
import axios from 'axios';
import { DataGridDetailsRowsCell, IApiControl } from 'Features/Edit/types';
import React from 'react';
import { getEnv } from 'Services';

type CustomActionButtonRendererPropsType = {
  props: any;
  field_data?: DataGridDetailsRowsCell;
  control?: IApiControl;
  fileId?: string;
  jwt?: string | null;
  seterrors?: React.Dispatch<React.SetStateAction<string>>;
};

const CustomActionButtonRenderer: React.FC<
  CustomActionButtonRendererPropsType
> = ({ props, control, jwt }) => {
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
  const onClickAction = async () => {
    // console.log(field_data?.value?.split(';')[1]);
    // try {
    if (field_data?.value?.split(';')[1] === 'GET') {
      await axios.get(
        `${getEnv('API_PROTOCOL')}://${getEnv('API_HOST')}/${
          field_data?.value?.split(';')[2]
        }?control_id=${control?.control_id}&row_num=${
          field_data?.row_num
        }&col_elm_id=${field_data?.col_elm_id}`,
        {
          headers: {
            Authorization: jwt,
          },
          responseType: 'json',
        },
      );

      return;
    } else if (field_data?.value?.split(';')[1] === 'POST') {
      await axios.post(
        `${getEnv('API_PROTOCOL')}://${getEnv('API_HOST')}/${
          field_data?.value?.split(';')[2]
        }?control_id=${control?.control_id}&row_num=${
          field_data?.row_num
        }&col_elm_id=${field_data?.col_elm_id}`,
        {
          headers: {
            Authorization: jwt,
          },
          responseType: 'json',
        },
      );

      return;
    } else {
      await axios.get(
        `${getEnv('API_PROTOCOL')}://${getEnv('API_HOST')}/${
          field_data?.value?.split(';')[2]
        }?control_id=${control?.control_id}&row_num=${
          field_data?.row_num
        }&col_elm_id=${field_data?.col_elm_id}`,
        {
          headers: {
            Authorization: jwt,
          },
          responseType: 'json',
        },
      );

      return;
    }
    // } catch (error) {
    //   seterrors("Une erreur est survenue lors de l'ajout de la ligne");
    //   setTimeout(() => {
    //     seterrors('');
    //   }, 3000);
    // }
  };

  return (
    <div style={{ alignItems: 'center', justifyContent: 'center' }}>
      {field_data?.value?.split(';')[2] ? (
        <button
          onClick={onClickAction}
          style={{
            // backgroundColor: 'teal',
            border: 0,
            color: 'black',
            borderRadius: 5,
            fontSize: `${
              `${control?.data_grid_detail?.datagrid_options?.datagrid_font_size}`
                ? `${control?.data_grid_detail?.datagrid_options?.datagrid_font_size}px`
                : '12px'
            }`,
            marginBottom: 5,
            padding: '5px 10px',
            cursor: `${
              field_data?.control_editable === false ? 'none' : 'pointer'
            }`,
          }}
          disabled={field_data?.control_editable === false ? true : false}
        >
          {field_data?.value?.split(';')[0]
            ? field_data?.value?.split(';')[0]
            : 'Action'}
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CustomActionButtonRenderer;
