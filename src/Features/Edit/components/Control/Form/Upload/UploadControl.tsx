import React, { useCallback, useEffect, useState } from 'react';
import { UploadControlStyled, DownloadFile } from './UploadControl.style';
import { Grid, Fab } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { IApiControl, IUploadDetails } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { IUser, security } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { HighlightOff } from '@mui/icons-material';
import { Container } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { uploadFile } from './apiRoutes/uploadFile';
import { deleteFile } from './apiRoutes/deleteFile';
import { downloadFile } from './apiRoutes/downloadFile';

interface IProps {
  control: IApiControl;
  fileId: string;
}

export const UploadControl: React.FC<IProps> = ({
  control,
  fileId,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [newUploadFile, setNewUploadFile] = useState<File | null>(null);
  const [currentUploadFile, setCurrentUploadFile] = useState<
    IUploadDetails[] | null
  >(control.upload_details);
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();

  // @TODO
  // mock api call to tests api calls
  // handle control editable: read-only when true
  // handle comments in upload file
  // re-cut components to make it more clear and concise (styles for example)

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
    if (control.mandatory && !newUploadFile) {
      setErrorMessage('Valeur obligatoire');

      return;
    }
    if (!control.mandatory) {
      setErrorMessage(null);
    }
    if (newUploadFile) {
      uploadFile(
        fileId,
        control,
        newUploadFile,
        jwt,
        setCurrentUploadFile,
        setErrorMessage,
      );
    }
  }, [fileId, control, newUploadFile, jwt]);

  const handleDeleteFile = useCallback(
    (e, id, name) => {
      e.preventDefault();
      deleteFile(fileId, control, name, jwt, setErrorMessage);
    },
    [jwt, control, fileId],
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
    <Grid item xs={6}>
      <ControlLabel control={control} />
      <UploadControlStyled>
        <Container
          style={{
            padding: '5px',
            border: '1px solid grey',
            borderRadius: '5px',
            backgroundColor: `${isDragActive ? 'white' : '#f0f0f0'}`,
            transition: '.1s ease-in-out',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxHeight: '100px',
          }}
          {...getRootProps({ onClick: (event) => event.stopPropagation() })}
        >
          <label htmlFor={`compliance-file-upload${control.control_id}`}>
            <input
              style={{ display: 'none' }}
              id={`compliance-file-upload${control.control_id}`}
              name={`compliance-file-upload${control.control_id}`}
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
        <Container
          style={{ padding: '0', maxWidth: '50%', overflow: 'hidden' }}
        >
          {currentUploadFile?.map((file) => {
            return (
              <Container
                key={file.id}
                style={{
                  display: 'flex',
                  margin: '5px 0',
                  padding: '0',
                  alignItems: 'center',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <DownloadFile
                  key={file.id}
                  href={file.id}
                  onClick={(e) => handleDownloadFile(e, file.name, file.id)}
                >
                  <span>{file.name}</span>
                </DownloadFile>
                <HighlightOff
                  onClick={(e) => handleDeleteFile(e, file.name, file.id)}
                  style={{
                    color: '#f50057',
                    cursor: 'pointer',
                    fontSize: '15px',
                  }}
                />
              </Container>
            );
          })}
        </Container>
      </UploadControlStyled>
      {errorMessage ? (
        <p>
          <FormError>{errorMessage}</FormError>
        </p>
      ) : null}
      <ControlFooter control={control} />
    </Grid>
  );
};
