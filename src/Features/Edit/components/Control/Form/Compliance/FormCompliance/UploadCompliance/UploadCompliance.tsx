import React, { useCallback, useEffect, useState } from 'react';
import { UploadComplianceStyled } from './UploadCompliance.style';
import { Grid, Fab } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { IComplianceData, IUploadDetail } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { IUser, security } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';
import { useDropzone } from 'react-dropzone';
import { uploadComplianceFile } from './apiRoutes/uploadComplianceFile';
import { Container } from '@mui/material';
import { UploadList } from '../../../../../../../../Shared/components/UploadList/UploadList';
import { deleteFile } from '../../../../../../../../Shared/components/UploadList/apiRoutes/deleteFile';
import { downloadFile } from '../../../../../../../../Shared/components/UploadList/apiRoutes/downloadFile';

interface IProps {
  compliance: IComplianceData;
  fileId: string;
  controlId: string;
}

export const UploadCompliance: React.FC<IProps> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [newUploadFile, setNewUploadFile] = useState<File | null>(null);
  const [currentUploadFile, setCurrentUploadFile] = useState<
    IUploadDetail[] | null
  >(compliance.uploadDetail);
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
      uploadComplianceFile(
        fileId,
        controlId,
        compliance,
        newUploadFile,
        jwt,
        setCurrentUploadFile,
        setErrorMessage,
      );
    }
  }, [fileId, compliance, newUploadFile, jwt, controlId]);

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
    (e, name) => {
      e.preventDefault();
      downloadFile(fileId, name, jwt, setErrorMessage);
    },
    [fileId, jwt],
  );

  useEffect(() => {
    if (newUploadFile) {
      handleUploadFile();
    }
  }, [newUploadFile, handleUploadFile]);

  return (
    <Grid item xs={6}>
      <ComplianceLabel compliance={compliance} />
      <UploadComplianceStyled>
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
          <label htmlFor={`compliance-file-upload${controlId}`}>
            <input
              style={{ display: 'none' }}
              id={`compliance-file-upload${controlId}`}
              name={`compliance-file-upload${controlId}`}
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
        <UploadList
          currentUploadFile={currentUploadFile}
          handleDeleteFile={handleDeleteFile}
          handleDownloadFile={handleDownloadFile}
        />
      </UploadComplianceStyled>
      {errorMessage ? (
        <p>
          <FormError>{errorMessage}</FormError>
        </p>
      ) : null}
      <ComplianceFooter compliance={compliance} />
    </Grid>
  );
};
