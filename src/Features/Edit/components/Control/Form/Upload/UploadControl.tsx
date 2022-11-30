import React, { useCallback, useEffect, useState } from 'react';
import { UploadControlStyled } from './UploadControl.style';
import { Grid, Fab } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { IApiControl, IUploadDetail } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { IUser, security } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { Button, Container } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { uploadFile } from './apiRoutes/uploadFile';
import { UploadList } from '../../../../../../Shared/components/UploadList/UploadList';
import { deleteFile } from '../../../../../../Shared/components/UploadList/apiRoutes/deleteFile';
import { downloadFile } from '../../../../../../Shared/components/UploadList/apiRoutes/downloadFile';
import { RejectControl } from '../RejectByPointControl/RejectControl';
import { useTrans } from '../../../../../../Services';

interface IProps {
  control: IApiControl;
  fileId: string;
  context: 'edit' | 'validate';
}

export const UploadControl: React.FC<IProps> = ({
  control,
  fileId,
  context,
}): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [newUploadFile, setNewUploadFile] = useState<File | null>(null);
  const [currentUploadFile, setCurrentUploadFile] = useState<
    IUploadDetail[] | null
  >(control.upload_detail);
  const [isRejected, setIsRejected] = useState(
    control.control_rejectable?.is_rejected
      ? control.control_rejectable.is_rejected
      : false,
  );
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();

  const saveFileToUpload = useCallback(
    (e) => {
      setNewUploadFile(e.target.files[0]);
    },
    [setNewUploadFile],
  );

  useEffect(() => {
    if (
      control.mandatory &&
      (currentUploadFile?.length === 0 || !currentUploadFile)
    ) {
      setErrorMessage(trans('mandatoryValue'));
    }
    if (!control.mandatory) {
      setErrorMessage(null);
    }
  }, [control, newUploadFile, trans, currentUploadFile]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: File) => {
      setNewUploadFile(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUploadFile = useCallback(() => {
    if (control.mandatory && !newUploadFile) {
      setErrorMessage(trans('mandatoryValue'));
    }
    if (!control.mandatory) {
      setErrorMessage(null);
    }
    if (newUploadFile !== null) {
      uploadFile(
        fileId,
        control,
        newUploadFile,
        jwt,
        setCurrentUploadFile,
        setErrorMessage,
        setNewUploadFile,
      );
    }
    setNewUploadFile(null);
  }, [fileId, control, newUploadFile, jwt, trans]);

  const handleDeleteFile = useCallback(
    (e, name) => {
      e.preventDefault();
      deleteFile(
        fileId,
        control.control_id,
        name,
        jwt,
        setErrorMessage,
        setCurrentUploadFile,
      );
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
    if (newUploadFile !== null) {
      handleUploadFile();
    }
    // setNewUploadFile(null);
  }, [newUploadFile, handleUploadFile]);

  useEffect(() => {
    if (!isRejected) {
      setIsRejected(false);
    }
  }, [isRejected]);

  return (
    <Grid item xs={6}>
      <ControlLabel control={control} />
      <UploadControlStyled>
        <Button
          disableRipple
          disableTouchRipple
          disableFocusRipple
          disableElevation
          disabled={!control.editable}
          id={`upload-id${control.control_id}`}
          style={{
            display: 'block',
            width: '100%',
            padding: '0',
            margin: '0',
            opacity: `${control.editable ? '1' : '0.5'}`,
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
        </Button>
        <UploadList
          currentUploadFile={currentUploadFile}
          handleDeleteFile={handleDeleteFile}
          handleDownloadFile={handleDownloadFile}
          disabled={!control.control_editable}
        />
      </UploadControlStyled>
      {control.useRejection && control.control_rejectable && (
        <RejectControl
          isRejected={isRejected}
          setIsRejected={setIsRejected}
          controlId={control.control_id}
          context={context}
          controlRejectable={control.useRejection}
        />
      )}
      {errorMessage ? (
        <p>
          <FormError>{errorMessage}</FormError>
        </p>
      ) : null}
      <ControlFooter control={control} />
    </Grid>
  );
};
