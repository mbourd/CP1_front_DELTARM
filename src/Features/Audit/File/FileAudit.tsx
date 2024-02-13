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
import { downloadAuditExcel } from './downloadAuditExcel';
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

  const iconRef = useRef<Element | null>(null);

  useEffect(() => {
    send('getFileAudit', {}, { file_id: fileId });

    return () => {
      request.abort();
    };
  }, [send, fileId, request]);

  const handleDownloadExcelAudit = useCallback(
    (e: any) => {
      e.preventDefault();
      downloadAuditExcel(fileId, jwt, setErrorMessage);
    },
    [jwt, fileId],
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
