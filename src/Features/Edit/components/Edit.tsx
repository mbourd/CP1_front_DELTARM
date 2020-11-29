import React from 'react';
import { Grid, List } from '@material-ui/core';
import { EditStyled, EditTitleFileStyled } from './Edit.style';
import { router, useTrans } from 'Services';
import { HeadingOne } from 'Shared/components';
import { FolderOpenIcon } from 'Styles';
import { NavItem } from './NavItem/NavItem';

export const Edit: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const { id } = router.getParams();

  return (
    <EditStyled>
      <HeadingOne>
        <p>{trans('edit')}</p>
        <EditTitleFileStyled>
          <FolderOpenIcon />
          <span>{id}</span>
        </EditTitleFileStyled>
      </HeadingOne>

      <Grid container wrap={'nowrap'}>
        <Grid item className={'nav'}>
          <List>
            <NavItem label={'Informations'} active />
            <NavItem label={'Mise en place'} />
            <NavItem label={'Décaissement'} locked />
            <NavItem label={'Post Décaissement'} locked />
            <NavItem label={'Cloture'} locked />
          </List>
        </Grid>
        <Grid item className={'content'}>
          Content
        </Grid>
      </Grid>
    </EditStyled>
  );
};
