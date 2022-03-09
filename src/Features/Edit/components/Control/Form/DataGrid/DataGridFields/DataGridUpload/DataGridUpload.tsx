import React, { useCallback, useEffect, useState } from 'react';
import { DataGridUploadStyled } from './DataGridUpload.style';
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
interface IProps {
  value: IUploadDetail[];
  fileId: string;
  controlId: string;
}
export const DataGridUpload: React.FC<IProps> = ({
  value,
  fileId,
  controlId,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [newUploadFile, setNewUploadFile] = useState<File | null>(null);
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
    if (newUploadFile) {
      uploadFile(
        fileId,
        controlId,
        newUploadFile,
        jwt,
        setCurrentUploadFile,
        setErrorMessage,
      );
    }
  }, [fileId, controlId, newUploadFile, jwt]);

  const handleDeleteFile = useCallback(
    (e, name) => {
      e.preventDefault();
      deleteFile(
        fileId,
        controlId,
        name,
        jwt,
        setErrorMessage,
        setCurrentUploadFile,
      );
    },
    [jwt, controlId, fileId],
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
        disabled={false}
        id={`upload-id${123}`}
        style={{
          display: 'block',
          width: '100%',
          padding: '0',
          margin: '0',
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
            height: '80px',
          }}
          {...getRootProps({ onClick: (event) => event.stopPropagation() })}
        >
          <label htmlFor={`compliance-file-upload`}>
            <input
              style={{ display: 'none' }}
              id={`compliance-file-upload`}
              name={`compliance-file-upload`}
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
        style={{ overflowY: 'auto', maxHeight: '50px' }}
        currentUploadFile={currentUploadFile}
        handleDeleteFile={handleDeleteFile}
        handleDownloadFile={handleDownloadFile}
      />
      {errorMessage ? (
        <p>
          <FormError style={{ paddingLeft: '0' }}>{errorMessage}</FormError>
        </p>
      ) : null}
    </DataGridUploadStyled>
  );
};
