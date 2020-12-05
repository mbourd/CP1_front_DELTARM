import React from 'react';
import { useTrans } from 'Services';
import { HeadingOne, PageLoader } from 'Shared/components';
import { FolderOpenIcon } from 'Styles';
import { EditStyled, EditTitleFileStyled } from '../Edit.style';

interface IProps {
  id: string;
}

export const IsLoading: React.FC<IProps> = ({ id }): React.ReactElement => {
  const [trans] = useTrans('Edit');

  return (
    <EditStyled>
      <HeadingOne>
        <p>{trans('pageTitle')}</p>
        <EditTitleFileStyled>
          <FolderOpenIcon />
          <span>{id}</span>
        </EditTitleFileStyled>
      </HeadingOne>
      <div>
        <PageLoader text={trans('loading', { ns: 'Default' })} />
      </div>
    </EditStyled>
  );
};
