import React from 'react';
// import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { useApi } from 'Services';

const CustomDateRenderer: React.FC<React.PropsWithChildren<any>> = ({
  props,
  control,
  fileId,
  jwt,
  seterrors,
}) => {
  const { send } = useApi({ promise: true });
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
  const checkedHandler = (event: any) => {
    props.setValue(event.target.value);
    const p = send(
      'saveDataGridAgGridValues',
      {},
      {
        fileId,
        row_uuid: props?.data?.row_uuid,
        elm_val: event.target.value,
        col_elm_id: field_data?.col_elm_id,
      },
    );

    if (p instanceof Promise) {
      p.catch(() => {
        seterrors('Une erreur est survenue');
      });
    }

    // saveValueDataGrid(
    //   fileId,
    //   props?.data?.row_uuid,
    //   field_data?.col_elm_id,
    //   field_data?.row_num,
    //   jwt,
    //   event.target.value,
    //   seterrors,
    //   event.target.value,
    // );
  };

  return (
    <div
      style={{
        marginTop: 0,
      }}
    >
      <input
        type="date"
        onChange={checkedHandler}
        disabled={!props?.data?.row_editable || !field_data?.control_editable}
        style={{
          backgroundColor: 'transparent',
          fontSize: `${control?.data_grid_detail?.datagrid_options?.datagrid_font_size}px`,
        }}
        defaultValue={props.value}
        min={
          field_data?.control_options?.min_date
            ? field_data?.control_options?.min_date
            : '1970-05-12'
        }
        max={
          field_data?.control_options?.max_date
            ? field_data?.control_options?.max_date
            : '2270-05-12'
        }
      />
    </div>
  );
};

export default CustomDateRenderer;
