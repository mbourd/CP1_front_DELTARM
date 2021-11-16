import React, { useContext, useEffect, useRef } from 'react';
import { Card } from '@material-ui/core';
import { BPIBadge, Popper } from 'Shared/components';
import { AuditIcon } from 'Styles';
import { router, useApi } from 'Services';
import { EditValidationContext } from 'Features/Edit';
import { IFileAudit } from '../types';
import { FileAuditBody } from './Body/FileAuditBody';
import { FileAuditStyled, FileAuditHeaderStyled } from './FileAudit.style';
export const FileAudit: React.FC = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const { request, send, data } = useApi<IFileAudit[]>();
  const context = useContext(EditValidationContext);
  const { fileId } = context;

  const iconRef = useRef<Element | null>(null);

  useEffect(() => {
    send('getFileAudit', {}, { file_id: fileId });

    return () => {
      request.abort();
    };
  }, [send, fileId, request]);

  return (
    <>
      <BPIBadge content={data?.length}>
        <AuditIcon
          fontSize={'large'}
          className={
            'audit-icon open-audits-icon' +
            (iconRef.current || anchorEl ? ' active' : '')
          }
          onClick={(e) => {
            iconRef.current = null;
            setAnchorEl(anchorEl ? null : e.currentTarget);
            router.setQueries({});
          }}
        />
      </BPIBadge>
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
            <FileAuditHeaderStyled>Audit du dossier</FileAuditHeaderStyled>
            {data ? <FileAuditBody audits={data} /> : null}
          </Card>
        </FileAuditStyled>
      </Popper>
    </>
  );
};
