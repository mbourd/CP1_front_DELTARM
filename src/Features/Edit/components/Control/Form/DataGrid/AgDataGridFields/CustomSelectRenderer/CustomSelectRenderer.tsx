import React from 'react';

const CustomSelectRenderer: React.FC<any> = ({ props, field_data }) => {
  const handleChange = (event: any) => {
    props.setValue(event.target.value);
    field_data.value = event.target.value;
  };

  return (
    <div
      style={{
        marginTop: 17,
      }}
    >
      <select
        value={props.value}
        onChange={handleChange}
        style={{
          borderWidth: 0,
          backgroundColor: 'transparent',
          fontSize: 14,
          padding: 10,
        }}
      >
        {field_data?.answer_choices.map((option: any) => (
          <option
            key={option.id}
            value={option.value}
            style={{
              padding: 10,
              margin: 10,
              paddingBottom: 30,
              marginBottom: 30,
            }}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelectRenderer;
