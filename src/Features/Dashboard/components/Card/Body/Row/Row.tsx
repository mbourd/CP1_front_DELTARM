import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { RowStyled } from './Row.style';
import { ICardBodyRow } from '../../types';
import { router, useTrans } from 'Services';

export const Row: React.FC<ICardBodyRow> = ({
  count,
  text,
  stage,
  stageName,
  color,
  state,
  role,
}): React.ReactElement => {
  const [trans] = useTrans('Dashboard');

  const path = router.generatePath(
    'manage',
    {},
    { stage_id: stage, state_id: state, state_role: role },
  );

  return (
    <RowStyled color={color}>
      <Grid container wrap={'nowrap'} alignItems={'center'}>
        <Grid className={'number'} component={'span'}>
          {count}
        </Grid>
        <Grid className={'text'} component={'span'}>
          {trans(text, { count })} :{' '}
          <span className={'stage'}>
            <Link to={path || '/manage'}>{stageName}</Link>
          </span>
        </Grid>
      </Grid>
    </RowStyled>
  );
};
