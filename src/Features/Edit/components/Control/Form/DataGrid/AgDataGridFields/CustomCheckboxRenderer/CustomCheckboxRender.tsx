import React, { useState } from 'react';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { DataGridDetailsRowsCell, IApiControl } from 'Features/Edit/types';

type CustomCheckboxRenderPropsType = {
  props: any;
  field_data?: DataGridDetailsRowsCell;
  control?: IApiControl;
  fileId: string;
  jwt: string | null;
  seterrors: React.Dispatch<React.SetStateAction<string>>;
};

const CustomCheckboxRender: React.FC<
  React.PropsWithChildren<CustomCheckboxRenderPropsType>
> = ({ props, fileId, jwt, seterrors }) => {
  // console.log(field_data);
  const data: any = props?.colDef?.field?.split('.')[0];
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
  const [items, setitems] = useState(field_data?.value?.split(','));
  const onChange = (event: any) => {
    if (event.target.checked) {
      setitems(items.concat(event.target.name));
      saveValueDataGrid(
        fileId,
        props?.data?.row_uuid,
        field_data?.col_elm_id,
        field_data?.row_num,
        jwt,
        items.concat(event.target.name)?.toString(),
        seterrors,
        items.concat(event.target.name)?.toString(),
      );
    } else {
      setitems(items.filter((item: any) => item !== event.target.name));
      saveValueDataGrid(
        fileId,
        props?.data?.row_uuid,
        field_data?.col_elm_id,
        field_data?.row_num,
        jwt,
        items.filter((item: any) => item !== event.target.name)?.toString(),
        seterrors,
        items.filter((item: any) => item !== event.target.name)?.toString(),
      );
    }
  };

  const default_value = field_data?.value?.split(',');

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {field_data?.choice_options?.map((option: any, index: any) => {
        return (
          <div
            key={index}
            style={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}
          >
            <input
              type="checkbox"
              onChange={onChange}
              defaultChecked={
                default_value?.includes(option?.choice_id?.toString())
                  ? true
                  : false
              }
              disabled={
                !props?.data?.row_editable || !field_data?.control_editable
              }
              name={option?.choice_id}
              // id="date"
              style={{ height: 14, width: 15, borderRadius: 0, borderWidth: 1 }}
            />
            <span style={{ fontSize: 12 }}>{option?.choice_lib}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CustomCheckboxRender;
