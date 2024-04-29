import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IUser, security, useApi } from 'Services';
import { EditValidationContext } from 'Features/Edit';
import { IDataFileAudit } from '../types';
// import { downloadAuditExcel } from './downloadAuditExcel';
import { FileAuditRender } from './FileAuditRender';
import { AppContext, AppContextType } from 'AppContext';

export const FileAudit: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const appContext: AppContextType & Record<any, any> = useContext(AppContext);
  const { canSend } = appContext?.ForCompTests?.FileAudit || {};
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { request, send, data } = useApi<IDataFileAudit>({ canSend });
  const context = useContext(EditValidationContext);
  const { fileId } = context;
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();
  const { send: sendReturnBlob } = useApi({
    promise: true,
    responseType: 'blob',
  });

  const iconRef = useRef<Element | null>(null);

  useEffect(() => {
    send('getFileAudit', {}, { file_id: fileId });

    return () => {
      request.abort();
    };
  }, [send, fileId, request]);

  const handleDownloadExcelAudit = useCallback(
    (e: React.MouseEvent<Element, MouseEvent>) => {
      e.preventDefault();
      sendReturnBlob('downloadUploadedAuditFile', {}, { file_id: fileId })
        ?.then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.body]));
          const name = response.body.name;
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
      // downloadAuditExcel(fileId, jwt, setErrorMessage);
    },
    [sendReturnBlob, fileId],
  );

  return (
    <FileAuditRender
      data={data}
      iconRef={iconRef}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      handleDownloadExcelAudit={handleDownloadExcelAudit}
      errorMessage={errorMessage}
    />
  );
};
