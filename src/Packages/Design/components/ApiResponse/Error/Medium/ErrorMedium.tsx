import React from 'react';
import { ErrorMediumStyled } from './ErrorMedium.style';
import { IError } from '../../types';

export const ErrorMedium: React.FC<Omit<IError, 'size'>> = ({
  title,
  children,
  message,
  icon,
}): React.ReactElement => {
  return (
    <ErrorMediumStyled className={'_Error'}>
      {title ? (
        <div className={'_ErrorTitle'} style={{ textAlign: 'center' }}>
          {title}
        </div>
      ) : null}
      {icon ? (
        <p className={'_ErrorIcon'}>
          <img src={icon} alt={''} className={'_ErrorPicture'} />
        </p>
      ) : null}
      {message || children ? (
        <p className={'_ErrorMessage'}>{message || children}</p>
      ) : null}
    </ErrorMediumStyled>
  );
};
