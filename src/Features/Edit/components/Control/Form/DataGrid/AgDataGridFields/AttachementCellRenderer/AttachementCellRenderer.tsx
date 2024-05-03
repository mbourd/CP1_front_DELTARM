import { CloudUpload } from '@mui/icons-material';
import React, { FC, useState } from 'react';

const AttachmentCellRenderer: FC<React.PropsWithChildren<any>> = ({
  props,
  field_data,
  field_name,
}) => {
  const [file, setFile] = useState<any>(null);
  const [errors, setErrors] = useState<string>('');

  /* HANDLE FILE CHANGE */
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const reader: any = new FileReader();

    reader.onloadend = () => {
      setFile(reader?.result);
      const fileName = file.name;

      if (fileName.split('.')[1] !== 'png') {
        setErrors('Invalid File Format');
        setTimeout(() => {
          setErrors('');
        }, 1500);

        return;
      }
      field_data.value = fileName;
      props.setValue(fileName);
    };

    reader?.readAsDataURL(file);
  };

  return (
    <div>
      <label
        htmlFor="inputTag"
        style={{
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <CloudUpload style={{ marginRight: 10, color: 'teal' }} />
        <input
          type="file"
          onChange={handleFileChange}
          id="inputTag"
          hidden
          // defaultValue={props.value}
        />
        <span style={{ fontSize: 14 }}>{props.value}</span>
      </label>
      {/* {file && <img src={file} alt="attachment" width="35" height="35" />} */}
    </div>
  );
};

export default AttachmentCellRenderer;
