import React, { useState } from 'react';
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
  const [canSendApi, setCanSendApi] = useState<boolean>(true);
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

    if (canSendApi)
      saveValueDataGrid(
        fileId,
        props?.data?.row_uuid,
        field_data?.col_elm_id,
        field_data?.row_num,
        jwt,
        select_id[0]?.choice_id.toString(),
        seterrors,
        select_id[0]?.choice_id.toString(),
      );
  };

  // expose for Cypress API
  if (window?.['Cypress']) {
    // import('bignumber.js').then((v) => console.log(v));
    window[
      `Features_Edit_Control_DataGridControlAgGrid_CustomSelectRenderer${field_data?.row_num}-${field_data?.col_elm_id}`
    ] = {
      setCanSendApi,
    };
  }

  return (
    <CustomSelectRendererStyled>
      <div>
        <CustomSelectStyled
          value={select_id_to_show[0]?.choice_lib}
          onChange={handleChange}
          disabled={
            !props?.data?.row_editable && field_data?.control_editable === false
              ? true
              : field_data?.control_editable === false
              ? true
              : false
          }
          // displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            fontSize: control?.data_grid_detail?.datagrid_options
              ?.datagrid_font_size
              ? Number(
                  control?.data_grid_detail?.datagrid_options
                    ?.datagrid_font_size,
                )
              : 12,
            borderWidth: 0,
            backgroundColor: 'transparent',
            color: control?.data_grid_detail?.datagrid_options
              ?.datagrid_font_color
              ? control?.data_grid_detail?.datagrid_options?.datagrid_font_color
              : 'black',
            fontWeight: field_data?.choice_font_weight
              ? field_data?.choice_font_weight
              : 'normal',

            border: 0,
          }}
        >
          {field_data?.choice_options?.map((option: any) => (
            <OptionStyled
              key={option.choice_id}
              value={option.choice_lib}
              // bg_color={option?.choice_bg_color}
              // font_weight={option?.choice_font_weight}
              // font_color={option?.choice_font_color}
              className="custom-option"
            >
              {option.choice_lib}
            </OptionStyled>
          ))}
        </CustomSelectStyled>
      </div>
    </CustomSelectRendererStyled>
  );
};

export default CustomSelectRenderer;
