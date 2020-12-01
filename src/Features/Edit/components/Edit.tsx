import React from 'react';
import { Grid, List } from '@material-ui/core';
import { EditStyled, EditTitleFileStyled } from './Edit.style';
import { router, useTrans } from 'Services';
import { HeadingOne } from 'Shared/components';
import { FolderOpenIcon } from 'Styles';
import { NavItem } from './NavItem/NavItem';
import { Information } from './Information/Information';

export const Edit: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const { id } = router.getParams();

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
        <Grid item className={'nav'}>
          <List>
            <NavItem label={trans('information', { ns: 'Default' })} active />
            <NavItem label={trans('settingUp', { ns: 'Default' })} />
            <NavItem label={trans('disbursement', { ns: 'Default' })} locked />
            <NavItem label={trans('postDisbursement', { ns: 'Default' })} locked />
            <NavItem label={trans('cloture', { ns: 'Default' })} locked />
          </List>
        </Grid>
        <Grid item className={'content'}>
          <Information />
        </Grid>
      </Grid>
    </EditStyled>
  );
};
