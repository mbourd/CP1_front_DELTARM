import React from 'react';
// import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';

const CustomSingleCheckboxRender: React.FC<any> = ({ props }) => {
  const onChange = () => {
    if (props.value === '1') {
      props.setValue('0');
    } else {
      props.setValue('1');
    }
  };

  return (
    <>
      {props?.data?.row_editable && (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
              marginTop: 10,
            }}
          >
            <input
              type="checkbox"
              onChange={onChange}
              checked={props.value === '1' ? true : false}
              // id="date"
              style={{ height: 14, width: 15, borderRadius: 0, borderWidth: 1 }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomSingleCheckboxRender;
