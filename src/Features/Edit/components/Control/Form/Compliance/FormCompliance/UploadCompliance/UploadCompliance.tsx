import React from 'react';
import { UploadComplianceStyled } from './UploadCompliance.style';
import { Container, Fab, Grid } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { IApiComplianceFields, IUploadDetail } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { IUser, security, useApi, useTrans } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';
import { useDropzone } from 'react-dropzone';
import { uploadComplianceFile } from './apiRoutes/uploadComplianceFile';
import { UploadList } from 'Shared/components/UploadList/UploadList';

interface IProps {
  fileId: string;
  controlId: string;
  compliance: IApiComplianceFields;
}

export const UploadCompliance: React.FC<React.PropsWithChildren<IProps>> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  /**
   * -----------------------------------------------------------
   * HOOKS
   * -----------------------------------------------------------
   */
  const [trans] = useTrans('Edit');
  const { send } = useApi({ promise: true });
  const { send: sendReturnBlob } = useApi({
    promise: true,
    responseType: 'blob',
  });

  /**
   * -----------------------------------------------------------
   * STATES
   * -----------------------------------------------------------
   */
  const [user] = React.useState<IUser>(security.getUser());
  const [isMandatory] = React.useState(compliance.compliance_elm_mandatory);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [newUploadFile, setNewUploadFile] = React.useState<File | null>(null);
  const [currentUploadFile, setCurrentUploadFile] = React.useState<
    IUploadDetail[] | null
  >(compliance.compliance_file_detail);

  /**
   * -----------------------------------------------------------
   * VARIABLES
   * -----------------------------------------------------------
   */
  const jwt = user.getJwt();
  const inputFileRef = React.useRef<any>();

  /**
   * -----------------------------------------------------------
   * FUNCTIONS
   * -----------------------------------------------------------
   */
  const saveFileToUpload = React.useCallback((e: any) => {
    setNewUploadFile(e.target.files[0]);
  }, []);

  const onDrop = React.useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: File) => {
      setNewUploadFile(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUploadFile = React.useCallback(() => {
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

  const handleDeleteFile = React.useCallback(
    (e: React.MouseEvent<Element, MouseEvent>, name: string) => {
      e.preventDefault();
      send(
        'deleteUploadedFile',
        {},
        {
          file_id: fileId,
          control_id: controlId,
          file_name: name,
          control_family: compliance.compliance_elm_family,
          compliance_id: compliance.compliance_id,
        },
      )
        ?.then((res) => {
          setErrorMessage(null);

          return setCurrentUploadFile(res.body.data.file_detail);
        })
        .catch(() => {
          return setErrorMessage(
            'Une erreur est survenue lors de la suppression du fichier',
          );
        });
    },
    [
      send,
      fileId,
      controlId,
      compliance.compliance_elm_family,
      compliance.compliance_id,
    ],
  );

  const handleDownloadFile = React.useCallback(
    (e: React.MouseEvent<Element, MouseEvent>, id: string, name: string) => {
      e.preventDefault();
      sendReturnBlob(
        'downloadUploadedFile',
        {},
        { file_id: id, file_name: name },
      )
        ?.then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.body]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', name);
          document.body.appendChild(link);
          link.click();
        })
        .catch(() => {
          return setErrorMessage(
            'Une erreur est survenue lors du téléchargement du fichier',
          );
        });
    },
    [sendReturnBlob],
  );

  /**
   * -----------------------------------------------------------
   * CYCLE LIFE
   * -----------------------------------------------------------
   */
  React.useEffect(() => {
    if (newUploadFile) {
      handleUploadFile();
    }
  }, [newUploadFile, handleUploadFile]);

  React.useEffect(() => {
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

  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
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
          <label
            htmlFor={`compliance-file-upload${controlId}`}
            onClick={() => {
              inputFileRef.current.value = null;
            }}
          >
            <input
              style={{ display: 'none' }}
              id={`compliance-file-upload${controlId}`}
              name={`compliance-file-upload${controlId}`}
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
        <UploadList
          files={currentUploadFile}
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
