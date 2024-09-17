import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, Fab } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { UploadControlStyled } from 'Features/Edit/components/Control/Form/Upload/UploadControl.style';
import { UploadList } from 'Shared/components/UploadList/UploadList';
import { useDropzone } from 'react-dropzone';
// import { IUser, security } from 'Services';
// import { deleteFile } from 'Shared/components/UploadList/apiRoutes/deleteFile';
// import { downloadFile } from 'Shared/components/UploadList/apiRoutes/downloadFile';
import { FieldName, RegisterOptions } from 'react-hook-form';
import { FormError } from 'Shared/components';
import { useTransEdit } from 'Features/Edit';

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
  const { trans } = useTransEdit();
  const [errorMessage, setErrorMessage] = useState('');
  const [newUploadFile, setNewUploadFile] = useState<File | null>(null);
  const [listFile, setListFile] = useState<File[]>([]);

  useEffect(() => {
    // console.log(newUploadFile);
    handleChangeValue(element.attribute.id, listFile);
  }, [element.attribute.id, handleChangeValue, listFile]);

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
    setNewUploadFile(null);
    setListFile((listFile) => {
      if (listFile.some((f) => f.name === name)) {
        const _listFile = [...listFile];
        const index = _listFile.findIndex((f) => f.name === name);

        _listFile.splice(index, 1);

        return _listFile;
      }

      return listFile;
    });
    // deleteFile(
    //   fileId,
    //   control.control_id,
    //   name,
    //   jwt,
    //   setErrorMessage,
    //   setCurrentUploadFile,
    // );
  }, []);
  // const handleDownloadFile = useCallback((e: any, id: any, name: any) => {
  //   e.preventDefault();
  //   // downloadFile(id, name, jwt, setErrorMessage);
  // }, []);

  useEffect(() => {
    if (newUploadFile) {
      setListFile((listFile) => {
        if (element?.attribute?.mode && element.attribute.mode === 'multiple') {
          if (!listFile.some((f) => newUploadFile.name === f.name)) {
            return [...listFile, newUploadFile];
          }

          return listFile;
        }

        return [newUploadFile];
      });
    }
  }, [element.attribute.mode, newUploadFile]);

  useEffect(() => {
    setErrorMessage('');

    if (!listFile.length) {
      setErrorMessage(trans('mandatoryValue'));
    }
  }, [listFile, trans]);

  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
  });

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
        onClick={() => {
          if (inputRef.current) inputRef.current.value = '';
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
          <label
            htmlFor={`${element.attribute.id}`}
            onClick={() => {
              if (inputRef.current) inputRef.current.value = '';
            }}
          >
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
              color="error"
              size="small"
              component="span"
              aria-label="upload"
              style={{ position: 'inherit' }}
            >
              <CloudUpload color={'action'} />
            </Fab>
          </label>
        </Container>
      </Button>
      <UploadList
        files={listFile.map((f) => {
          return { file_id: '', file_name: f.name };
        })}
        handleDeleteFile={handleDeleteFile}
        disabled={!element.editable}
      />
      <FormError className={'_Message'}>
        {errorMessage ? errorMessage : ' '}
      </FormError>
    </UploadControlStyled>
  );
};

export { UploadFileModalDynamic };
