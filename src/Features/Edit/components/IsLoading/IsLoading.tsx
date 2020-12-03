import React from 'react';
import { Grid } from '@material-ui/core';
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
      <Grid container wrap={'nowrap'}>
        <Grid item className={'nav'} />
        <Grid item className={'content'}>
          <PageLoader text={trans('loading', { ns: 'Default' })} />
        </Grid>
      </Grid>
    </EditStyled>
  );
};
