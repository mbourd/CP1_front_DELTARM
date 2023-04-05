import React from 'react';

const CustomDateRenderer: React.FC<any> = ({ props, field_data }) => {
  const checkedHandler = (event: any) => {
    props.setValue(event.target.value);
  };

  return (
    <div
      style={{
        marginTop: 17,
      }}
    >
      <input
        type="date"
        onChange={checkedHandler}
        id="date"
        style={{ backgroundColor: 'transparent', fontSize: 14 }}
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
