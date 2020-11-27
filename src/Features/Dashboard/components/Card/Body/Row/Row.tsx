import React from 'react';
import { Grid } from '@material-ui/core';
import { RowStyled } from './Row.style';
import { ICardBodyRow } from '../../types';
import { router, useTrans } from 'Services';
import { Link } from 'Shared/components';

export const Row: React.FC<ICardBodyRow> = ({ count, text, stage, stageName, color }): React.ReactElement => {
  const [trans] = useTrans('Dashboard');

  const path = router.generatePath('manage', {}, { stage_id: stage });

  return (
    <RowStyled color={color}>
      <Grid container wrap={'nowrap'} alignItems={'center'}>
        <Grid className={'number'} component={'span'}>
          {count}
        </Grid>
        <Grid className={'text'} component={'span'}>
          {trans(text, { count })} :{' '}
          <span className={'stage'}>
            <Link to={path || '/manage'} reload>
              {stageName}
            </Link>
          </span>
        </Grid>
      </Grid>
    </RowStyled>
  );
};
