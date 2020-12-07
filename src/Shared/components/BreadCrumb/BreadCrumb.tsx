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
  // const values = ['Dashboard', 'Manage', 'Edit', 'Validation'];

  return (
    <BreadCrumbStyled>
      <Grid container alignItems={'center'}>
        {values.map((value, index) => {
          switch (value) {
            case 'Dashboard':
              return (
                <Grid item>
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
                <>
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
                </>
              );
            case 'Edit':
              return (
                <>
                  <Grid item>
                    <ArrowRightAltIcon fontSize={'small'} />
                  </Grid>
                  <Grid item>
                    <PenIcon fontSize={'small'} />
                    <span>Edition</span>
                  </Grid>
                </>
              );
            case 'Validation':
              return (
                <>
                  <Grid item>
                    <ArrowRightAltIcon fontSize={'small'} />
                  </Grid>
                  <Grid item>
                    <UserCheckedIcon fontSize={'small'} />
                    <span>Validation</span>
                  </Grid>
                </>
              );
          }
        })}
      </Grid>
    </BreadCrumbStyled>
  );
};
