import React, { useCallback, useEffect, useRef, useState } from 'react';
import { UploadControlStyled } from './UploadControl.style';
import { Grid, Fab } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
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

import _ from 'lodash';

interface IProps {
  control: IApiControl;
  fileId: string;
  context: 'edit' | 'validate';
}

export const UploadControl: React.FC<React.PropsWithChildren<IProps>> = ({
  control,
  fileId,
  context,
}): React.ReactElement => {
  const inputFileRef = useRef<any>();
  const [trans] = useTrans('Edit');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [newUploadFile, setNewUploadFile] = useState<File | any>(null);
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
  const [isUploading, setIsUploading] = useState(false); // Add this state
  const debouncedUpload = useCallback(
    _.debounce((file) => {
      uploadFile(
        fileId,
        control,
        file,
        jwt,
        setCurrentUploadFile,
        setErrorMessage,
      );
    }, 1),
    [],
  );

  const saveFileToUpload = useCallback((e: any) => {
    setNewUploadFile(e.target.files[0]);
  }, []);

  useEffect(() => {
    if (
      control.mandatory &&
      (currentUploadFile?.length === 0 || !currentUploadFile)
    ) {
      setErrorMessage(trans('mandatoryValue'));
    }
  }, [control, newUploadFile, trans, currentUploadFile]);

  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: File) => {
      setNewUploadFile(file);
      setIsUploading(false);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUploadFile = useCallback(() => {
    if (control.mandatory && !newUploadFile) {
      setErrorMessage(trans('mandatoryValue'));

      return;
    }
    if (!control.mandatory) {
      setErrorMessage(null);
    }
    if (newUploadFile) {
      setIsUploading(true); // Set uploading flag
      debouncedUpload(newUploadFile);
      // setNewUploadFile(() => {
      //   setTimeout(() => {
      //     uploadFile(
      //       fileId,
      //       control,
      //       newUploadFile,
      //       jwt,
      //       setCurrentUploadFile,
      //       setErrorMessage,
      //     );
      //   }, 1500);

      //   return null;
      // });
    }
  }, [control.mandatory, newUploadFile, trans, debouncedUpload]);

  const handleDeleteFile = useCallback(
    (e: any, name: any) => {
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
    (e: any, id: any, name: any) => {
      e.preventDefault();
      downloadFile(id, name, jwt, setErrorMessage);
    },
    [jwt],
  );

  useEffect(() => {
    if (newUploadFile && !isUploading) {
      handleUploadFile();
    }
    // setNewUploadFile(null);
  }, [newUploadFile, handleUploadFile, isUploading]);

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
            <label
              htmlFor={`compliance-file-upload${control.control_id}`}
              onClick={() => {
                setNewUploadFile(null);
                setIsUploading(false);
                inputFileRef.current.value = null;
              }}
            >
              <input
                style={{ display: 'none' }}
                id={`compliance-file-upload${control.control_id}`}
                name={`compliance-file-upload${control.control_id}`}
                type="file"
                onChange={saveFileToUpload}
                {...getInputProps()}
                ref={(el) => (inputFileRef.current = el)}
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
