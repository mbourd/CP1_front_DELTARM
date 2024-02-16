import React from 'react';
import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';
import { DataGridDetailsRowsCell, IApiControl } from 'Features/Edit/types';

type CustomCommentAndLongTextRendererPropsType = {
  props: any;
  old_value: string;
  field_data: DataGridDetailsRowsCell;
  control: IApiControl;
  fileId: string;
  jwt: string;
  seterrors: React.Dispatch<React.SetStateAction<string>>;
  gridRef: React.MutableRefObject<any>;
};

const CustomCommentAndLongTextRenderer: React.FC<
  React.PropsWithChildren<CustomCommentAndLongTextRendererPropsType>
> = ({
  old_value,
  field_data,

  seterrors,
  fileId,
  jwt,
  control,
  gridRef,
}) => {
  return (
    <textarea
      style={{ width: '100%' }}
      // value={props.value}
      defaultValue={old_value}
      onBlur={(e: any) => {
        if (field_data?.control_regex && e?.target?.value) {
          const regexControl = new RegExp(field_data?.control_regex, 'i');
          if (
            !e?.target?.value.match(regexControl) &&
            field_data?.control_regex_msg
          ) {
            // console.log('error occured');
            seterrors(field_data?.control_regex_msg);
            gridRef.current.api.undoCellEditing();
            setTimeout(() => {
              seterrors('');
            }, 3000);

            return;
          }
        }
        saveValueDataGrid(
          fileId,
          control.control_id,
          field_data?.col_elm_id,
          field_data?.row_num,
          jwt,
          e?.target?.value.toString(),
          seterrors,
          e?.target?.value,
        );
      }}
    ></textarea>
  );
};

export default CustomCommentAndLongTextRenderer;
