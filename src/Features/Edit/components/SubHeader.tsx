import React from 'react';
import { EditTitleFileStyled } from './Edit.style';
import { FolderOpenIcon } from 'Styles';
import { IData } from '../types';

interface IProps {
  data: IData;
}

export const SubHeader: React.FC<React.PropsWithChildren<IProps>> = ({
  data,
}): React.ReactElement => {
  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <EditTitleFileStyled>
        <FolderOpenIcon />
        {data.title ? (
          <span>
            {data.title.split('\r').map((line, index) => {
              return (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              );
            })}
          </span>
        ) : (
          <span>
            {data.number} &ndash; {data.contrepartie} / {data.productType}
          </span>
        )}
      </EditTitleFileStyled>
    </div>
  );
};
