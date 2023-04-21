import React, { useState, useEffect } from 'react';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';

const CustomCheckboxRender: React.FC<any> = ({
  props,
  field_data,
  control,
  fileId,
  jwt,
  seterrors,
}) => {
  console.log(field_data);
  const [items, setitems] = useState(field_data?.value?.split(','));

  const onChange = (event: any) => {
    console.log(event.target.checked, event.target.name);
    if (event.target.checked) {
      setitems(items.concat(event.target.name));
    } else {
      setitems(items.filter((item: any) => item !== event.target.name));
    }
    // saveValueDataGrid(
    //   fileId,
    //   control.control_id,
    //   field_data?.col_elm_id,
    //   field_data?.row_num,
    //   jwt,
    //   items.toString(),
    //   seterrors,
    //   items.toString(),
    // );
  };

  const default_value = field_data?.value?.split(',');

  useEffect(() => {
    saveValueDataGrid(
      fileId,
      control.control_id,
      field_data?.col_elm_id,
      field_data?.row_num,
      jwt,
      items.toString(),
      seterrors,
      items.toString(),
    );
  }, [items]);

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
