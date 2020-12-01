import React from 'react';
import { TextEllipsisStyled } from './TextEllipsis.style';

export const TextEllipsis: React.FC = ({ children }): React.ReactElement => {
  return <TextEllipsisStyled className={'_TextEllipsis'}>{children}</TextEllipsisStyled>;
};
