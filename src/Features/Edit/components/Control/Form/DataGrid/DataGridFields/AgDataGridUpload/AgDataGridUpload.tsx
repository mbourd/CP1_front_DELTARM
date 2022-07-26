import React, { useCallback, useEffect, useState } from 'react';
import { DataGridUploadStyled } from './AgDataGridUpload.style';
import { Fab } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { FormError } from 'Shared/components';
import { IUser, security } from 'Services';
import { Button, Container } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { IUploadDetail } from '../../../../../../types';
import { uploadFile } from '../../apiRoutes/upload/uploadFile';
import { downloadFile } from '../../apiRoutes/upload/downloadFile';
import { deleteFile } from '../../apiRoutes/upload/deleteFile';
import { UploadList } from '../../../../../../../../Shared/components/UploadList/UploadList';
import { useTrans } from '../../../../../../../../Services';

interface IProps {
  value: IUploadDetail[];
  fileId: string;
  controlId: string;
  columnId: number;
  rowNum: number;
  editable: boolean;
  mandatory: boolean;
}

export const AgDataGridUpload: React.FC<IProps> = ({
  value,
  fileId,
  controlId,
  columnId,
  rowNum,
  editable,
  mandatory,
}): React.ReactElement => {
  if (editable === undefined) {
    editable = true;
  }
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [newUploadFile, setNewUploadFile] = useState<File | null>(null);
  const [trans] = useTrans('Edit');
  const [currentUploadFile, setCurrentUploadFile] = useState<
    IUploadDetail[] | null
  >(value);
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();

  const saveFileToUpload = useCallback(
    (e) => {
      setNewUploadFile(e.target.files[0]);
    },
    [setNewUploadFile],
  );

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: File) => {
      setNewUploadFile(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUploadFile = useCallback(() => {
    if (mandatory && !newUploadFile) {
      setErrorMessage(trans('mandatoryValue'));

      return;
    }
    if (!mandatory) {
      setErrorMessage(null);
    }
    if (newUploadFile) {
      uploadFile(
        fileId,
        controlId,
        rowNum,
        columnId,
        newUploadFile,
        jwt,
        setCurrentUploadFile,
        setErrorMessage,
      );
    }
  }, [
    fileId,
    controlId,
    newUploadFile,
    jwt,
    rowNum,
    columnId,
    mandatory,
    trans,
  ]);

  const handleDeleteFile = useCallback(
    (e, name) => {
      e.preventDefault();
      deleteFile(
        fileId,
        controlId,
        rowNum,
        columnId,
        name,
        jwt,
        setErrorMessage,
        setCurrentUploadFile,
      );
    },
    [jwt, controlId, fileId, rowNum, columnId],
  );

  const handleDownloadFile = useCallback(
    (e, id, name) => {
      e.preventDefault();
      downloadFile(id, name, jwt, setErrorMessage);
    },
    [jwt],
  );

  useEffect(() => {
    if (newUploadFile) {
      handleUploadFile();
    }
  }, [newUploadFile, handleUploadFile]);

  return (
    <DataGridUploadStyled>
      <Button
        disableRipple
        disableTouchRipple
        disableFocusRipple
        disableElevation
        disabled={!editable}
        id={`data-grid-upload${controlId}`}
        style={{
          display: 'block',
          width: '100%',
          padding: '0',
          margin: '0',
          opacity: `${editable ? '1' : '0.5'}`,
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
            height: '30px',
          }}
          {...getRootProps({ onClick: (event) => event.stopPropagation() })}
        >
          <label htmlFor={`data-grid-file-upload${controlId}`}>
            <input
              style={{ display: 'none' }}
              id={`data-grid-file-upload${controlId}`}
              name={`data-grid-file-upload${controlId}`}
              type="file"
              onChange={saveFileToUpload}
              {...getInputProps()}
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
        disabled={!editable}
      />
      {errorMessage ? (
        <p>
          <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
        </p>
      ) : null}
    </DataGridUploadStyled>
  );
};
