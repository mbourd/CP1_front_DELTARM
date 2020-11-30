import React from 'react';
import { ContentTitleStyled } from './ContentTitle.style';

export const ContentTitle: React.FC = ({ children }): React.ReactElement => {
  return <ContentTitleStyled>{children}</ContentTitleStyled>;
};
