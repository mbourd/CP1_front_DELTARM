import { Container } from '@mui/material';
import { HighlightOff } from '@mui/icons-material';
import React from 'react';
import { IUploadDetail } from 'Features/Edit/types';
import { DownloadFile } from './UploadList.style';

export interface IUploadListProps {
  disabled?: boolean;
  style?: React.CSSProperties;
  files: IUploadDetail[] | null;
  handleDeleteFile: (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    name: string,
  ) => void;
  handleDownloadFile?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    name: string,
    id: string,
  ) => void;
}

const styles = {
  container: {
    padding: '0',
    margin: '10px 0',
    overflow: 'hidden',
    alignItems: 'center',
    textOverflow: 'ellipsis',
  },
  delete: {
    fontSize: '15px',
    color: '#f50057',
    marginLeft: '2px',
    cursor: 'pointer',
  },
  download: {
    margin: '5px',
    marginRight: '0',
  },
};

export const UploadList: React.FC<
  React.PropsWithChildren<IUploadListProps>
> = ({
  style,
  files,
  disabled = false,
  handleDeleteFile,
  handleDownloadFile,
}): React.ReactElement => {
  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
  return (
    <Container style={{ padding: '0', overflow: 'hidden', ...style }}>
      {(files || []).map((file) => {
        return (
          <Container
            key={file?.file_id || file.file_name}
            style={styles.container}
          >
            <DownloadFile
              style={styles.download}
              {...(handleDownloadFile ? { href: file.file_id } : {})}
              onClick={(e) => {
                if (handleDownloadFile)
                  handleDownloadFile(e, file.file_id, file.file_name);
              }}
            >
              <span>
                {file.file_name.length > 30
                  ? file.file_name.substring(0, 45).concat('...')
                  : file.file_name}
              </span>
            </DownloadFile>
            {!disabled ? (
              <HighlightOff
                style={styles.delete}
                data-testid="delete_icon_uploadfile"
                onClick={(e) => handleDeleteFile(e, file.file_name)}
              />
            ) : (
              <></>
            )}
          </Container>
        );
      })}
    </Container>
  );
};
