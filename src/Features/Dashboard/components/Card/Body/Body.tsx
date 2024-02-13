import React from 'react';
import { BodyStyled } from './Body.style';
import { ICardBody } from '../types';
import { Row } from './Row/Row';

export const Body: React.FC<React.PropsWithChildren<ICardBody>> = ({
  data,
}): React.ReactElement => {
  return (
    <BodyStyled>
      {data.map((datum, index) => {
        return <Row {...datum} key={index} />;
      })}
    </BodyStyled>
  );
};
