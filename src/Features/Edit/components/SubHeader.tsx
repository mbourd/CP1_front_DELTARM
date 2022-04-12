import React from 'react';
import { EditTitleFileStyled } from './Edit.style';
import { FolderOpenIcon } from 'Styles';
import { IData } from '../types';

interface IProps {
  data: IData;
}

export const SubHeader: React.FC<IProps> = ({ data }): React.ReactElement => {
  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <EditTitleFileStyled>
        <FolderOpenIcon />
        {data.title ? (
          <span>{data.title}</span>
        ) : (
          <span>
            {data.number} &ndash; {data.contrepartie} / {data.productType}
          </span>
        )}
      </EditTitleFileStyled>
    </div>
  );
};
