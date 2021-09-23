import React from 'react';
import { FileAuditBodyStyled } from './FileAuditBody.style';
import { FileAuditBodyItem } from './Item/FileAuditBodyItem';
import { IFileAudit } from '../../types';

interface IFileAuditBody {
  audits: IFileAudit[];
}

export const FileAuditBody: React.FC<IFileAuditBody> = ({ audits }): React.ReactElement => {
  return (
    <FileAuditBodyStyled>
      {audits.map((audit, index) => {
        return <FileAuditBodyItem audit={audit} key={index} />;
      })}
    </FileAuditBodyStyled>
  );
};
