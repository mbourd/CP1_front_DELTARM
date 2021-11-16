import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightAltIcon } from 'Styles';
import { FooterStyled } from './Footer.style';
import { ICardFooter } from '../types';
import { router } from 'Services';

export const Footer: React.FC<ICardFooter> = ({
  children,
  color,
  state,
  role,
}): React.ReactElement => {
  const path = router.generatePath(
    'manage',
    {},
    { state_id: state, state_role: role },
  );

  return (
    <FooterStyled color={color}>
      <Link to={path || '/manage'}>{children}</Link>
      <ArrowRightAltIcon />
    </FooterStyled>
  );
};
