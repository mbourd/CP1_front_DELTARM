import React from 'react';
import { EditTitleFileStyled } from './Edit.style';
import { FolderOpenIcon } from 'Styles';
import { IData } from '../types';

interface IProps {
  title: string;
  data: IData;
}

export const SubHeader: React.FC<IProps> = ({
  title,
  data,
}): React.ReactElement => {
  return (
    <div>
      <p>{title}</p>
      <EditTitleFileStyled>
        <FolderOpenIcon />
        <span>
          {data.number} &ndash; {data.contrepartie} / {data.productType}
        </span>
      </EditTitleFileStyled>
    </div>
  );
};
