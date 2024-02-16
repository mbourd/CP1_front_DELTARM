import React from 'react';
import { TabContentStyled } from './TabContent.style';

export const TabContent: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}): React.ReactElement => {
  return <TabContentStyled>{children}</TabContentStyled>;
};
