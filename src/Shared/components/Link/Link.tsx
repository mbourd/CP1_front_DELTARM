import React from 'react';
import { Link as DOMLink } from 'react-router-dom';

export interface ILink {
  to: string;
  reload?: boolean;
}

export const Link: React.FC<ILink> = ({ children, to, reload = false }): React.ReactElement => {
  if (!reload) {
    return <DOMLink to={to}>{children}</DOMLink>;
  }

  return <a href={to}>{children}</a>;
};
