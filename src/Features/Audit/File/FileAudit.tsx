import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Card } from '@material-ui/core';
import { BPIBadge, FormError, Popper } from 'Shared/components';
import { AuditIcon } from 'Styles';
import { IUser, security, useApi } from 'Services';
import { EditValidationContext } from 'Features/Edit';
import { IDataFileAudit } from '../types';
import { FileAuditBody } from './Body/FileAuditBody';
import { FileAuditStyled, FileAuditHeaderStyled } from './FileAudit.style';
import { ExcelIcon } from '../../../Packages/Design/icons/ExcelIcon';
import { downloadAuditExcel } from './downloadAuditExcel';

export const FileAudit: React.FC = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { request, send, data } = useApi<IDataFileAudit>();
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
    (e) => {
      e.preventDefault();
      downloadAuditExcel(fileId, jwt, setErrorMessage);
    },
    [jwt, fileId],
  );

  return (
    <>
      {data?.is_audit && (
        <BPIBadge content={data?.audits.length}>
          <AuditIcon
            fontSize={'large'}
            className={
              'audit-icon open-audits-icon' +
              (iconRef.current || anchorEl ? ' active' : '')
            }
            onClick={(e) => {
              iconRef.current = null;
              setAnchorEl(anchorEl ? null : e.currentTarget);
            }}
          />
        </BPIBadge>
      )}
      <Popper
        element={iconRef.current || anchorEl}
        placement={'bottom-start'}
        bdr={'0'}
        border={'0'}
        onClickAway={() => setAnchorEl(null)}
        zIndex={2}
      >
        <FileAuditStyled>
          <Card>
            <FileAuditHeaderStyled>
              Audit du dossier{' '}
              {data?.is_audit_xls && (
                <ExcelIcon
                  style={{ float: 'right' }}
                  fontSize={'medium'}
                  onClick={handleDownloadExcelAudit}
                />
              )}
            </FileAuditHeaderStyled>
            {data?.audits ? <FileAuditBody audits={data.audits} /> : null}
          </Card>
        </FileAuditStyled>
        {errorMessage ? (
          <p>
            <FormError>{errorMessage}</FormError>
          </p>
        ) : null}
      </Popper>
    </>
  );
};
