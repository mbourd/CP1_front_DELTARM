import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, Fab } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { UploadControlStyled } from 'Features/Edit/components/Control/Form/Upload/UploadControl.style';
import { UploadList } from 'Shared/components/UploadList/UploadList';
import { useDropzone } from 'react-dropzone';
import { IUser, security } from 'Services';
import { deleteFile } from 'Shared/components/UploadList/apiRoutes/deleteFile';
import { downloadFile } from 'Shared/components/UploadList/apiRoutes/downloadFile';
import { FieldName, RegisterOptions } from 'react-hook-form';
import { IElementModal } from '../types';

type UploadModalDynamicPropsType = {
  element: any;
  index: number;
  handleChangeValue: (id: any, value: any) => void;
  register: (name: FieldName<any>, rules?: RegisterOptions) => void;
};

const UploadFileModalDynamic: React.FC<UploadModalDynamicPropsType> = ({
  element,
  index,
  handleChangeValue,
  register,
}) => {
  const [newUploadFile, setNewUploadFile] = useState<File | any>(null);
  const [currentUploadFile, setCurrentUploadFile] = useState<any[] | null>(
    null,
  );
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();

  useEffect(() => {
    console.log(newUploadFile);
    handleChangeValue(element.attribute.id, newUploadFile);
  }, [element.attribute.id, handleChangeValue, newUploadFile]);

  const saveFileToUpload = useCallback(
    (e: any) => {
      setNewUploadFile(e.target.files[0]);
    },
    [setNewUploadFile],
  );
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: File) => {
      setNewUploadFile(file);
    });
  }, []);

  const handleDeleteFile = useCallback((e: any, name: any) => {
    e.preventDefault();
    // deleteFile(
    //   fileId,
    //   control.control_id,
    //   name,
    //   jwt,
    //   setErrorMessage,
    //   setCurrentUploadFile,
    // );
  }, []);
  const handleDownloadFile = useCallback((e: any, id: any, name: any) => {
    e.preventDefault();
    // downloadFile(id, name, jwt, setErrorMessage);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <UploadControlStyled>
      <Button
        key={index}
        disableRipple
        disableTouchRipple
        disableFocusRipple
        disableElevation
        disabled={!element.editable}
        id={`upload-id${element.attribute.id}`}
        style={{
          display: 'block',
          width: '100%',
          padding: '0',
          margin: '0',
          opacity: `${element.editable ? '1' : '0.5'}`,
        }}
      >
        <Container
          style={{
            padding: '5px',
            border: '1px solid #E0DDDC',
            borderRadius: '5px',
            backgroundColor: `${isDragActive ? 'white' : '#f0f0f0'}`,
            transition: '.1s ease-in-out',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
          }}
          {...getRootProps({
            onClick: (event: any) => event.stopPropagation(),
          })}
        >
          <label htmlFor={`${element.attribute.id}`}>
            <input
              style={{ display: 'none' }}
              id={`${element.attribute.id}`}
              name={`${element.attribute.id}`}
              type="file"
              onChange={saveFileToUpload}
              {...getInputProps()}
              {...(register(`${element.attribute?.id}`, {
                required: element.attribute?.mandatory,
              }) as any as Record<string | number | symbol, any>)}
            />
            <Fab
              color="secondary"
              size="small"
              component="span"
              aria-label="upload"
            >
              <CloudUpload color={'action'} />
            </Fab>
          </label>
        </Container>
      </Button>
      <UploadList
        currentUploadFile={currentUploadFile}
        handleDeleteFile={handleDeleteFile}
        handleDownloadFile={handleDownloadFile}
        disabled={!element.editable}
      />
    </UploadControlStyled>
  );
};

export { UploadFileModalDynamic };
