import React, { useCallback, useEffect, useState } from 'react';
import { UploadControlStyled, DownloadFile } from './UploadControl.style';
import { Grid, Fab } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { IApiControl } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { getEnv, IUser, security } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import axios from 'axios';

interface IProps {
  control: IApiControl;
  fileId: string;
}

export const UploadControl: React.FC<IProps> = ({
  control,
  fileId,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentUploadedFile, setCurrentUploadedFile] = useState<File | null>(
    null,
  );
  const [previousUploadedFile, setPreviousUploadedFile] = useState<
    string | null
  >(control.control_value);
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();

  const file = previousUploadedFile?.split(';');

  const uploadFile = useCallback(() => {
    if (control.control_mandatory && !uploadFile) {
      setErrorMessage('Valeur obligatoire');

      return;
    }
    if (currentUploadedFile) {
      const formData = new FormData();
      formData.append('file', currentUploadedFile);
      const fileName = currentUploadedFile.name;
      axios
        .post(
          `${getEnv('API_PROTOCOL')}://${getEnv(
            'API_HOST',
          )}/control/set_value?file_id=${fileId}&elm_id=${
            control.control_id
          }&elm_val=${fileName}&control_family=${control.control_family}`,
          formData,
          {
            headers: {
              Authorization: jwt,
              'Content-type': 'multipart/form-data',
            },
          },
        )
        .then((res) => {
          setErrorMessage(null);
          setPreviousUploadedFile(res.data.data.file_detail);
        })
        .catch((err) => {
          setErrorMessage(err.response.data.error_msg);
        });
    }
  }, [
    fileId,
    control.control_mandatory,
    control.control_family,
    currentUploadedFile,
    jwt,
    control.control_id,
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
      <ControlLabel control={control} />
      <UploadControlStyled>
        <label htmlFor={`compliance-file-upload${control.control_id}`}>
          <input
            style={{ display: 'none' }}
            id={`compliance-file-upload${control.control_id}`}
            name={`compliance-file-upload${control.control_id}`}
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
