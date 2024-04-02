import React from 'react';
import { FileAuditBodyItemStyled } from './FileAuditBodyItem.style';
import { Avatar, Grid } from '@mui/material';
import { IFileAudit } from '../../../types';
import { randomColor } from 'Styles';

interface IFileAuditBodyItem {
  audit: IFileAudit;
}

export const FileAuditBodyItem: React.FC<
  React.PropsWithChildren<IFileAuditBodyItem>
> = ({ audit }): React.ReactElement => {
  return (
    <FileAuditBodyItemStyled>
      <Grid container alignItems={'center'} wrap={'nowrap'}>
        <Grid item>
          <Avatar style={{ backgroundColor: randomColor() }} />
        </Grid>
        <Grid item>
          <p className={'author'}>
            {audit.lib} - <span className={'date'}>{audit.date}</span>
          </p>
          {Object.keys(audit.params).map((param, index) => {
            return <p key={index}>{param + ' : ' + audit.params[param]}</p>;
          })}
        </Grid>
      </Grid>
    </FileAuditBodyItemStyled>
  );
};
