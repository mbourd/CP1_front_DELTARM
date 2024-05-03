import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomDeleteRenderer: React.FC<React.PropsWithChildren<any>> = ({
  props,
  rowData,
}) => {
  /* SINGLE DELETE */
  const handleDelete = () => {
    const updatedData = [...rowData];
    updatedData.splice(props.rowIndex, 1);
    props.api.applyTransaction({ remove: [props.node.data] });
  };

  return (
    <DeleteIcon
      onClick={handleDelete}
      style={{ marginTop: 25, marginLeft: 25, color: 'crimson' }}
    />
  );
};

export default CustomDeleteRenderer;
