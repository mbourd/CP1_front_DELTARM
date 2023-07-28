import React from 'react';
import { Card as MUICard } from '@material-ui/core';
import { CardStyled } from './Card.style';
import { Header } from './Header/Header';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import { ICard } from './types';
import { AppActionContextType } from 'Shared/types';

interface ICardContext {
  context: AppActionContextType;
}

export const CardContext = React.createContext<ICardContext>({
  context: 'EDIT',
});

export const Card: React.FC<ICard> = ({
  header,
  body,
  footer,
  context,
}): React.ReactElement => {
  return (
    <CardContext.Provider value={{ context }}>
      <CardStyled $cardColor={header.color}>
        <MUICard elevation={0}>
          <Header {...header}>{header.children}</Header>
          <Body {...body} />
          <Footer {...footer}>{footer.children}</Footer>
        </MUICard>
      </CardStyled>
    </CardContext.Provider>
  );
};
