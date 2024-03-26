import React from 'react';
import { Card as MUICard } from '@mui/material';
import { CardStyled } from './Card.style';
import { Body } from './Body/Body';
import { Actions } from './Actions/Actions';
import { ICard } from './types';

export const Card: React.FC<React.PropsWithChildren<ICard>> = ({
  id,
  color,
  comments,
  data,
  context,
}): React.ReactElement => {
  return (
    <CardStyled $color={color}>
      <MUICard elevation={0}>
        <div className={'state'} />
        <Body data={data} />
        <Actions id={id} comments={comments} context={context} />
      </MUICard>
    </CardStyled>
  );
};
