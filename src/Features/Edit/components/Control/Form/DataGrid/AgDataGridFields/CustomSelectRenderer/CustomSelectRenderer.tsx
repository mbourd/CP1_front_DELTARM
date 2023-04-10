import React from 'react';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import {
  CustomSelectRendererStyled,
  OptionStyled,
  CustomSelectStyled,
} from './CustomSelectRenderer.style';
import './style.css';

const CustomSelectRenderer: React.FC<any> = ({
  props,
  field_data,
  control,
  fileId,
  jwt,
  seterrors,
}) => {
  const select_id_to_show = field_data?.choice_options.filter((option: any) => {
    return props.value?.toString() === option?.choice_id?.toString();
  });

  // console.log('defaultValue', select_id_to_show[0]?.choice_lib, props.value);
  const handleChange = (event: any) => {
    const select_id = field_data?.choice_options?.filter((option: any) => {
      // console.log('showing before selecting', event?.target?.value, option);

      return event?.target?.value === option?.choice_lib;
    });
    // console.log('value to save in grid', event?.target?.value, select_id);
    props.setValue(select_id[0]?.choice_id?.toString());

    // console.log('select_list', props, field_data);
    // field_data.value = event.target.value;

    saveValueDataGrid(
      fileId,
      control.control_id,
      field_data?.col_elm_id,
      field_data?.row_num,
      jwt,
      select_id[0]?.choice_id.toString(),
      seterrors,
      select_id[0]?.choice_id.toString(),
    );
  };

  return (
    <CustomSelectRendererStyled>
      <div>
        <CustomSelectStyled
          defaultValue={select_id_to_show[0]?.choice_lib}
          onChange={handleChange}
          style={{
            borderWidth: 0,
            backgroundColor: 'transparent',
            fontSize: 14,
            color: field_data?.choice_font_color
              ? field_data?.choice_font_color
              : 'black',
            fontWeight: field_data?.choice_font_weight
              ? field_data?.choice_font_weight
              : 'normal',
            // padding: 10,
          }}
        >
          {field_data?.choice_options?.map((option: any) => (
            <OptionStyled
              key={option.choice_id}
              value={option.choice_lib}
              className="custom-option"
              style={{
                fontSize: 11,
                color: option?.choice_font_color
                  ? option?.choice_font_color
                  : 'black',
                backgroundColor: option?.choice_bg_color
                  ? option?.choice_bg_color
                  : 'white',
                fontWeight: option?.choice_font_weight
                  ? option?.choice_font_weight
                  : 'normal',
              }}
            >
              &nbsp; {option.choice_lib}
            </OptionStyled>
          ))}
        </CustomSelectStyled>
      </div>
    </CustomSelectRendererStyled>
  );
};

export default CustomSelectRenderer;
