import React from 'react';

const CustomCheckBoxRenderer: React.FC<any> = ({ props }) => {
  const checkedHandler = (event: any) => {
    const checked = event.target.checked;
    props.setValue(checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        onClick={checkedHandler}
        defaultChecked={props.value}
        style={{ width: 17, height: 17, marginTop: 30, marginLeft: 25 }}
      />
    </div>
  );
};

export default CustomCheckBoxRenderer;
