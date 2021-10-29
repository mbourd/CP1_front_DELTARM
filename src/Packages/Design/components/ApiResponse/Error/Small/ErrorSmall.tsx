import React from 'react';
import { ErrorSmallStyled } from './ErrorSmall.style';
import { IError } from '../../types';

export const ErrorSmall: React.FC<Omit<IError, 'size'>> = ({
  title,
  children,
  message,
  icon,
}): React.ReactElement => {
  return (
    <ErrorSmallStyled className={'_Error'}>
      {title ? <div className={'_ErrorTitle'}>{title}</div> : null}
      {icon ? (
        <p className={'_ErrorIcon'}>
          <img src={icon} alt={''} className={'_ErrorPicture'} />
        </p>
      ) : null}
      {message || children ? (
        <p className={'_ErrorMessage'}>{message || children}</p>
      ) : null}
    </ErrorSmallStyled>
  );
};
