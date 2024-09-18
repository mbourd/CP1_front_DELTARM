import React from 'react';
import { UploadControlStyled } from './UploadControl.style';
import { Button, Container, Fab, Grid } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { IApiControl, IUploadDetail } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { security, useApi, useTrans } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { useDropzone } from 'react-dropzone';
import { uploadFile } from './apiRoutes/uploadFile';
import { RejectControl } from '../RejectByPointControl/RejectControl';
import { UploadList } from 'Shared/components/UploadList/UploadList';

interface IProps {
  fileId: string;
  control: IApiControl;
  context: 'edit' | 'validate';
}

const errors = {
  create: 'Une erreur est survenue lors du téléchargement du fichier',
  delete: 'Une erreur est survenue lors de la suppression du fichier',
};

const styles = {
  container: {
    height: '50px',
    padding: '5px',
    display: 'flex',
    borderRadius: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #E0DDDC',
    transition: '.1s ease-in-out',
  },
  cta: {
    display: 'block',
    width: '100%',
    padding: '0',
    margin: '0',
  },
};

export const UploadControl: React.FC<React.PropsWithChildren<IProps>> = ({
  fileId,
  control,
  context,
}): React.ReactElement => {
  /**
   * -----------------------------------------------------------
   * HOOKS
   * -----------------------------------------------------------
   */
  const [trans] = useTrans('Edit');

  const { send } = useApi({ promise: true });

  const { send: sendWithBlob } = useApi({
    promise: true,
    responseType: 'blob',
  });

  /**
   * -----------------------------------------------------------
   * STATES
   * -----------------------------------------------------------
   */
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const [currentUploadedFiles, setCurrentUploadedFiles] = React.useState<
    IUploadDetail[] | null
  >(control.upload_detail);

  const [isRejected, setIsRejected] = React.useState(
    Boolean(control?.control_rejectable?.is_rejected),
  );

  /**
   * -----------------------------------------------------------
   * VARIABLES
   * -----------------------------------------------------------
   */
  const jwt = security.getUser().getJwt();

  /**
   * -----------------------------------------------------------
   * FUNCTIONS
   * -----------------------------------------------------------
   */
  const onDrop = React.useCallback((acceptedFiles: any) => {
    onUploadFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onUploadFiles = React.useCallback(
    async (filesToUpload: File[]) => {
      if (control.mandatory && filesToUpload.length === 0) {
        setErrorMessage(trans('mandatoryValue'));
        return;
      }

      if (!control.mandatory) {
        setErrorMessage(null);
      }

      if (filesToUpload.length > 0) {
        filesToUpload.forEach((file, index) => {
          uploadFile(
            fileId,
            control,
            file,
            jwt,
            setCurrentUploadedFiles,
            setErrorMessage,
          );
        });
      }
    },
    [control.mandatory, trans],
  );

  const onDeleteFile = React.useCallback(
    (e: React.MouseEvent<SVGSVGElement, MouseEvent>, name: string) => {
      e.preventDefault();
      send(
        'deleteUploadedFile',
        {},
        { file_id: fileId, control_id: control.control_id, file_name: name },
      )
        ?.then((response) => {
          setErrorMessage(null);
          setCurrentUploadedFiles(response.body.data.file_detail);
        })
        .catch(() => setErrorMessage(errors.delete));
    },
    [send, fileId, control.control_id],
  );

  const onDownloadFile = React.useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      id: string,
      name: string,
    ) => {
      e.preventDefault();
      sendWithBlob('downloadUploadedFile', {}, { file_id: id, file_name: name })
        ?.then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.body]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', name);
          document.body.appendChild(link);
          link.click();
        })
        .catch(() => setErrorMessage(errors.create));
    },
    [sendWithBlob],
  );

  /**
   * -----------------------------------------------------------
   * CYCLE LIFE
   * -----------------------------------------------------------
   */
  React.useEffect(() => {
    if (control.mandatory && currentUploadedFiles?.length === 0) {
      setErrorMessage(trans('mandatoryValue'));
    }
  }, [control.mandatory, trans, currentUploadedFiles]);

  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
  return (
    <Grid item xs={6}>
      <ControlLabel control={control} />
      <UploadControlStyled>
        <Button
          disableRipple
          disableElevation
          disableTouchRipple
          disableFocusRipple
          disabled={!control.editable}
          id={`upload-id${control.control_id}`}
          style={{
            opacity: `${control.editable ? '1' : '0.5'}`,
            ...styles.cta,
          }}
        >
          <Container
            style={{
              ...styles.container,
              backgroundColor: `${isDragActive ? 'white' : '#f0f0f0'}`,
            }}
            {...getRootProps({
              onClick: (event: any) => event.stopPropagation(),
            })}
          >
            <label htmlFor={`compliance-file-upload${control.control_id}`}>
              <input
                type="file"
                style={{ display: 'none' }}
                id={`compliance-file-upload${control.control_id}`}
                name={`compliance-file-upload${control.control_id}`}
                {...getInputProps()}
              />
              <Fab
                size="small"
                color="error"
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
          files={currentUploadedFiles}
          handleDeleteFile={onDeleteFile}
          handleDownloadFile={onDownloadFile}
          disabled={!control.control_editable}
        />
      </UploadControlStyled>
      {control.useRejection && control.control_rejectable ? (
        <RejectControl
          context={context}
          isRejected={isRejected}
          setIsRejected={setIsRejected}
          controlId={control.control_id}
          controlRejectable={control.useRejection}
        />
      ) : (
        <></>
      )}
      {errorMessage ? (
        <p>
          <FormError>{errorMessage}</FormError>
        </p>
      ) : (
        <></>
      )}
      <ControlFooter control={control} />
    </Grid>
  );
};
