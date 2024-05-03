import React from 'react';
import { ErrorLargeStyled } from './ErrorLarge.style';
import { IError } from '../../types';

export const ErrorLarge: React.FC<
  React.PropsWithChildren<Omit<IError, 'size'>>
> = ({ title, children, message, icon }): React.ReactElement => {
  return (
    <ErrorLargeStyled className={'_Error'}>
      {title ? <div className={'_ErrorTitle'}>{title}</div> : null}
      {icon ? (
        <p className={'_ErrorIcon'}>
          <img src={icon} alt={''} className={'_ErrorPicture'} />
        </p>
      ) : null}
      {message || children ? (
        <p className={'_ErrorMessage'}>{message || children}</p>
      ) : null}
    </ErrorLargeStyled>
  );
};
