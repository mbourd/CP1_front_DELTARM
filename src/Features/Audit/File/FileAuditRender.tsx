import React from 'react';
import { Card } from '@mui/material';
import { BPIBadge, FormError, Popper } from 'Shared/components';
import { AuditIcon } from 'Styles';
import { IDataFileAudit } from '../types';
import { FileAuditBody } from './Body/FileAuditBody';
import { FileAuditStyled, FileAuditHeaderStyled } from './FileAudit.style';
import { ExcelIcon } from '../../../Packages/Design/icons/ExcelIcon';

type FileAuditRenderProps = {
  data: IDataFileAudit | null;
  iconRef: React.MutableRefObject<Element | null>;
  anchorEl: SVGSVGElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<SVGSVGElement | null>>;
  handleDownloadExcelAudit: (e: any) => void;
  errorMessage: string | null;
};

const FileAuditRender: React.FC<
  React.PropsWithChildren<FileAuditRenderProps>
> = ({
  data,
  iconRef,
  anchorEl,
  setAnchorEl,
  handleDownloadExcelAudit,
  errorMessage,
}) => {
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
                  className="excel-icon"
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

export { FileAuditRender };
