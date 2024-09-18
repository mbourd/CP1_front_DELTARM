import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DataGridUploadStyled } from './DataGridUpload.style';
import { Fab } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
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
import _ from 'lodash';

interface IProps {
  value: IUploadDetail[];
  fileId: string;
  controlId: string;
  columnId: number;
  rowNum: number;
  editable: boolean;
  mandatory: boolean;
}

export const DataGridUpload: React.FC<React.PropsWithChildren<IProps>> = ({
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
  const inputFileRef = useRef<any>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [newUploadFile, setNewUploadFile] = useState<File | null>(null);
  const [currentUploadFile, setCurrentUploadFile] = useState<
    IUploadDetail[] | null
  >(value);
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();
  const [trans] = useTrans('Edit');
  const [isUploading, setIsUploading] = useState(false); // Add this state
  const debouncedUpload = useCallback(
    _.debounce((file) => {
      uploadFile(
        fileId,
        controlId,
        rowNum,
        columnId,
        file,
        jwt,
        setCurrentUploadFile,
        setErrorMessage,
      );
    }, 1),
    [],
  );

  const saveFileToUpload = useCallback(
    (e: any) => {
      setNewUploadFile(e.target.files[0]);
    },
    [setNewUploadFile],
  );

  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: File) => {
      setNewUploadFile(file);
      setIsUploading(false);
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
      setIsUploading(true); // Set uploading flag
      debouncedUpload(newUploadFile);
    }
  }, [mandatory, newUploadFile, trans, debouncedUpload]);

  const handleDeleteFile = useCallback(
    (e: any, name: any) => {
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
  }, [newUploadFile, handleUploadFile, isUploading]);

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
          <label
            htmlFor={`data-grid-file-upload${controlId}`}
            onClick={() => {
              setNewUploadFile(null);
              setIsUploading(false);
              inputFileRef.current.value = null;
            }}
          >
            <input
              style={{ display: 'none' }}
              id={`data-grid-file-upload${controlId}`}
              name={`data-grid-file-upload${controlId}`}
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
        style={{ overflowY: 'auto', maxHeight: '50px' }}
        files={currentUploadFile}
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
