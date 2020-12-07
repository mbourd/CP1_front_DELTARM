import React from 'react';
import { Grid } from '@material-ui/core';
import { BreadCrumbStyled } from './BreadCrumb.style';
import { ArrowRightAltIcon, FolderIcon, HomeIcon, PenIcon, UserCheckedIcon } from 'Styles';
import { Link } from 'react-router-dom';
import { router } from '../../../Packages/Router';

type BreadCrumbType = 'Dashboard' | 'Manage' | 'Edit' | 'Validation';

interface IBreadCrumb {
  values: BreadCrumbType[];
}

export const BreadCrumb: React.FC<IBreadCrumb> = ({ values }): React.ReactElement => {
  return (
    <BreadCrumbStyled>
      <Grid container alignItems={'center'}>
        {values.map((value, index) => {
          switch (value) {
            case 'Dashboard':
              return (
                <Grid item key={index}>
                  <HomeIcon fontSize={'small'} />
                  {index === values.length - 1 ? (
                    <span>Tableau de board</span>
                  ) : (
                    <Link to={router.generatePath('dashboard') || '/'}>Tableau de board</Link>
                  )}
                </Grid>
              );
            case 'Manage':
              return (
                <React.Fragment key={index}>
                  <Grid item>
                    <ArrowRightAltIcon fontSize={'small'} />
                  </Grid>
                  <Grid item>
                    <FolderIcon fontSize={'small'} />
                    {index === values.length - 1 ? (
                      <span>Gestion</span>
                    ) : (
                      <Link to={router.generatePath('manage') || '/'}>Gestion</Link>
                    )}
                  </Grid>
                </React.Fragment>
              );
            case 'Edit':
              return (
                <React.Fragment key={index}>
                  <Grid item>
                    <ArrowRightAltIcon fontSize={'small'} />
                  </Grid>
                  <Grid item>
                    <PenIcon fontSize={'small'} />
                    <span>Edition</span>
                  </Grid>
                </React.Fragment>
              );
            case 'Validation':
              return (
                <React.Fragment key={index}>
                  <Grid item>
                    <ArrowRightAltIcon fontSize={'small'} />
                  </Grid>
                  <Grid item>
                    <UserCheckedIcon fontSize={'small'} />
                    <span>Validation</span>
                  </Grid>
                </React.Fragment>
              );
          }
        })}
      </Grid>
    </BreadCrumbStyled>
  );
};
