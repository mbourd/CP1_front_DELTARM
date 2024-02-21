import React, { useCallback, useEffect, useState } from 'react';
import { UploadComplianceStyled } from './UploadCompliance.style';
import { Grid, Fab } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { IApiComplianceFields, IUploadDetail } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { IUser, security, useTrans } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';
import { useDropzone } from 'react-dropzone';
import { uploadComplianceFile } from './apiRoutes/uploadComplianceFile';
import { Container } from '@mui/material';
import { UploadList } from '../../../../../../../../Shared/components/UploadList/UploadList';
import { deleteComplianceFile } from '../../../../../../../../Shared/components/UploadList/apiRoutes/deleteComplianceFile';
import { downloadFile } from '../../../../../../../../Shared/components/UploadList/apiRoutes/downloadFile';

interface IProps {
  compliance: IApiComplianceFields;
  fileId: string;
  controlId: string;
}

export const UploadCompliance: React.FC<React.PropsWithChildren<IProps>> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [newUploadFile, setNewUploadFile] = useState<File | null>(null);
  const [currentUploadFile, setCurrentUploadFile] = useState<
    IUploadDetail[] | null
  >(compliance.compliance_file_detail);
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();
  const [isMandatory] = useState(compliance.compliance_elm_mandatory);

  const saveFileToUpload = useCallback((e: any) => {
    const file = e.target.files[0];

    setNewUploadFile(file);
  }, []);

  const onDrop = useCallback((acceptedFiles: any) => {
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
    (e: any, name: any) => {
      e.preventDefault();
      deleteComplianceFile(
        fileId,
        controlId,
        name,
        jwt,
        setErrorMessage,
        setCurrentUploadFile,
        compliance,
      );
    },
    [jwt, controlId, fileId, compliance],
  );

  const handleDownloadFile = useCallback(
    (e: any, id: any, name: any) => {
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

  useEffect(() => {
    if (isMandatory && !currentUploadFile && !compliance.compliance_elm_value) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [isMandatory, currentUploadFile, trans, compliance.compliance_elm_value]);

  //expose for Cypress API
  if (window?.['Cypress']) {
    window['Features_Edit_Control_Form_Compliance_UploadCompliance'] = {
      setErrorMessage,
    };
  }

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
