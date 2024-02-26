import { RowNode } from 'ag-grid-community';
import React, { useCallback, useEffect, useState } from 'react';
// import { saveValueDataGrid } from '../../apiRoutes/saveValueDataGrid';

type CustomSingleCheckboxRenderPropsType = {
  props: Record<any, any>;
  selectedRows: RowNode[];
  setSelectedRows: React.Dispatch<React.SetStateAction<RowNode[]>>;
};

const CustomSingleCheckboxRender: React.FC<
  React.PropsWithChildren<CustomSingleCheckboxRenderPropsType>
> = ({ props, selectedRows, setSelectedRows }) => {
  const [isChecked, setIsChecked] = useState(selectedRows.includes(props.node));
  const onChange = useCallback(() => {
    if (props.value === '1') {
      props.setValue('0');
    } else {
      props.setValue('1');
    }

    // setSelectedRows((selected) => {
    //   const foundIndex = selected.indexOf(props.node);
    //   const n: RowNode[] = [];

    //   if (foundIndex !== -1) {
    //     n.push(...selected);
    //     n.splice(foundIndex, 1);

    //     return n;
    //   }

    //   return [...selected, props.node];
    // });
  }, [props /*, setSelectedRows*/]);

  // useEffect(() => {
  //   setIsChecked(selectedRows.includes(props.node));
  // }, [props.node, selectedRows]);

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
              checked={props?.value === '1'}
              style={{ height: 14, width: 15, borderRadius: 0, borderWidth: 1 }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomSingleCheckboxRender;
