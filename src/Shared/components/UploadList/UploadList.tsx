import { Container } from '@mui/material';
import { HighlightOff } from '@mui/icons-material';
import React from 'react';
import { IUploadDetail } from '../../../Features/Edit/types';
import { DownloadFile } from './UploadList.style';

interface IProps {
  currentUploadFile: IUploadDetail[] | null;
  handleDeleteFile: (e: any, name: any) => void;
  handleDownloadFile: (e: any, name: any) => void;
}

export const UploadList: React.FC<IProps> = ({
  currentUploadFile,
  handleDeleteFile,
  handleDownloadFile,
}): React.ReactElement => {
  return (
    <Container style={{ padding: '0', overflow: 'hidden' }}>
      {currentUploadFile?.map((file) => {
        return (
          <Container
            key={file.file_id}
            style={{
              margin: '10px 0',
              padding: '0',
              alignItems: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <DownloadFile
              href={file.file_id}
              onClick={(e) => handleDownloadFile(e, file.file_name)}
              style={{
                margin: '5px',
                marginRight: '0',
              }}
            >
              {file.file_name.length > 30 ? (
                <span>{file.file_name.substring(0, 45) + '...'}</span>
              ) : (
                <span>{file.file_name}</span>
              )}
            </DownloadFile>
            <HighlightOff
              onClick={(e) => handleDeleteFile(e, file.file_name)}
              style={{
                color: '#f50057',
                cursor: 'pointer',
                fontSize: '15px',
                marginLeft: '2px',
              }}
            />
          </Container>
        );
      })}
    </Container>
  );
};
