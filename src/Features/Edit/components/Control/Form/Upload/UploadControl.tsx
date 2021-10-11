import React, { useCallback, useEffect, useState } from 'react';
import { UploadControlStyled, DownloadFile } from './UploadControl.style';
import { Grid, Fab } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import { IControl } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { getEnv, IUser, security } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import axios from 'axios';

interface IProps {
  control: IControl;
  fileId: string;
}

export const UploadControl: React.FC<IProps> = ({ control, fileId }): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentUploadedFile, setCurrentUploadedFile] = useState<File | null>(null);
  const [previousUploadedFile, setPreviousUploadedFile] = useState<string | null>(control.value);
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();

  const file = previousUploadedFile?.split(';');

  const uploadFile = useCallback(() => {
    if (control.mandatory && !uploadFile) {
      setErrorMessage('Valeur obligatoire');

      return;
    }
    if (currentUploadedFile) {
      const formData = new FormData();
      formData.append('file', currentUploadedFile);
      const fileName = currentUploadedFile.name;
      axios
        .post(
          `${getEnv('API_PROTOCOL')}://${getEnv('API_HOST')}/control/set_value?file_id=${fileId}&elm_id=${
            control.id
          }&elm_val=${fileName}&control_family=${control.family}`,
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
  }, [fileId, control.mandatory, control.family, currentUploadedFile, jwt, control.id]);

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
          `${getEnv('API_PROTOCOL')}://${getEnv('API_HOST')}/control/get_upfile?file_id=${file[1]}&file_name=${
            file[0]
          }`,
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
          setErrorMessage('Une erreur est survenue lors du téléchargement du fichier');
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
      <UploadControlStyled>
        <ControlLabel control={control} />
        <label htmlFor="upload-file">
          <input
            style={{ display: 'none' }}
            id="upload-file"
            name="upload-file"
            type="file"
            onChange={saveFileToUpload}
          />
          <Fab color="secondary" size="small" component="span" aria-label="upload">
            <CloudUpload color={'action'} />
          </Fab>
        </label>
        {file && (
          <DownloadFile href={file[1]} onClick={downloadFile}>
            {file[0]}
          </DownloadFile>
        )}
        {errorMessage ? (
          <p>
            <FormError>{errorMessage}</FormError>
          </p>
        ) : null}
        <ControlFooter control={control} />
      </UploadControlStyled>
    </Grid>
  );
};
