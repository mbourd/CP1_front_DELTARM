import React from 'react';
import { IError } from '../types';
import { Error } from '../Error';
import icon from './success.svg';
import { RequestSuccessTitleStyled } from './RequestSuccess.style';

export const RequestSuccess: React.FC<React.PropsWithChildren<IError>> = (
  props,
): React.ReactElement => {
  const title = (
    <RequestSuccessTitleStyled>{props.title}</RequestSuccessTitleStyled>
  );

  return <Error {...props} icon={icon} title={title} />;
};
