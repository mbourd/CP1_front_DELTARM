import React, { useCallback, useEffect, useState } from 'react';
import { UploadComplianceStyled, DownloadFile } from './UploadCompliance.style';
import { Grid, Fab } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { IComplianceData } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { getEnv, IUser, security } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';
import axios from 'axios';

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
  const [currentUploadedFile, setCurrentUploadedFile] = useState<File | null>(
    null,
  );
  const [previousUploadedFile, setPreviousUploadedFile] = useState<
    string | null
  >(compliance.value);
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();
  const file = previousUploadedFile?.split(';');

  const uploadFile = useCallback(() => {
    if (currentUploadedFile) {
      const formData = new FormData();
      formData.append('file', currentUploadedFile);
      const fileName = currentUploadedFile.name;
      axios
        .post(
          `${getEnv('API_PROTOCOL')}://${getEnv(
            'API_HOST',
          )}/control/set_value?file_id=${fileId}&elm_id=${controlId}&elm_val=${fileName}&control_family=${
            compliance.family
          }&compliance_id=${compliance.id}`,
          formData,
          {
            headers: {
              Authorization: jwt,
              'Content-type': 'multipart/form-data',
            },
          },
        )
        .then((res) => {
          setPreviousUploadedFile(res.data.data.file_detail);
          setErrorMessage(null);
        })
        .catch((err) => {
          setErrorMessage(err.response.data.error_msg);
        });
    }
  }, [
    fileId,
    compliance.family,
    currentUploadedFile,
    jwt,
    controlId,
    compliance.id,
  ]);

  const saveFileToUpload = useCallback(
    (e) => {
      setCurrentUploadedFile(e.target.files[0]);
    },
    [setCurrentUploadedFile],
  );
  const downloadFile = useCallback(
    (e) => {
      e.preventDefault();
      if (!file) {
        return;
      }
      axios
        .get(
          `${getEnv('API_PROTOCOL')}://${getEnv(
            'API_HOST',
          )}/control/get_upfile?file_id=${file[1]}&file_name=${file[0]}`,
          {
            headers: {
              Authorization: jwt,
            },
            responseType: 'blob',
          },
        )
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', file[0]); //or any other extension
          document.body.appendChild(link);
          link.click();
        })
        .catch(() => {
          setErrorMessage(
            'Une erreur est survenue lors du téléchargement du fichier',
          );
        });
    },
    [file, jwt],
  );

  useEffect(() => {
    if (currentUploadedFile) {
      uploadFile();
    }
  }, [currentUploadedFile, uploadFile]);

  return (
    <Grid item xs={6}>
      <ComplianceLabel compliance={compliance} />
      <UploadComplianceStyled>
        <label htmlFor={`${controlId}compliance-file-upload${compliance.id}`}>
          <input
            style={{ display: 'none' }}
            id={`${controlId}compliance-file-upload${compliance.id}`}
            name={`${controlId}compliance-file-upload${compliance.id}`}
            type="file"
            onChange={saveFileToUpload}
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
        {file && (
          <DownloadFile href={file[1]} onClick={downloadFile}>
            {file[0]}
          </DownloadFile>
        )}
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
