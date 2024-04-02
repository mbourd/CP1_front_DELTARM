import React from 'react';
import { Grid } from '@mui/material';
import { BreadCrumbStyled } from './BreadCrumb.style';
import {
  ArrowRightAltIcon,
  FolderIcon,
  HomeIcon,
  PenIcon,
  UserCheckedIcon,
} from 'Styles';
import { Link } from 'react-router-dom';
import { router } from '../../../Packages/Router';
import { useTrans } from '../../../Services';

type BreadCrumbType =
  | 'Dashboard'
  | 'Manage'
  | 'Edit'
  | 'Validation'
  | 'Tableau de bord'
  | 'Gestion';

interface IBreadCrumb {
  values: BreadCrumbType[];
}

export const BreadCrumb: React.FC<React.PropsWithChildren<IBreadCrumb>> = ({
  values,
}): React.ReactElement => {
  const queries = router.getQueries();
  const { id } = router.getParams();
  const isComment = queries.comments === '1';
  const [trans] = useTrans('Dashboard');

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
                    <span>{trans('pageTitle')}</span>
                  ) : (
                    <Link to={router.generatePath('dashboard') || '/'}>
                      {trans('pageTitle')}
                    </Link>
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
                      <span>{trans('manage')}</span>
                    ) : (
                      <Link to={router.generatePath('manage') || '/'}>
                        {trans('manage')}
                      </Link>
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
                    {id && isComment ? (
                      <a href={router.generatePath('edit', { id }) || '/'}>
                        Edition
                      </a>
                    ) : (
                      <span>Edition</span>
                    )}
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
                    {id && isComment ? (
                      <a href={router.generatePath('edit', { id }) || '/'}>
                        Validation
                      </a>
                    ) : (
                      <span>Validation</span>
                    )}
                  </Grid>
                </React.Fragment>
              );
          }

          return value;
        })}
      </Grid>
    </BreadCrumbStyled>
  );
};
