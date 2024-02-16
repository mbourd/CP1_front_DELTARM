import React, { useCallback } from 'react';
import { CommentRejectControlStyled } from './CommentRejectControl.style';
import { Grid } from '@material-ui/core';
import { FormError, InputBase } from 'Shared/components';

interface IProps {
  setCommentValue: React.Dispatch<React.SetStateAction<string | null>>;
  errorMessage: string | null;
}

export const CommentRejectControl: React.FC<
  React.PropsWithChildren<IProps>
> = ({ setCommentValue, errorMessage }): React.ReactElement => {
  const handleChangeValue = useCallback(
    (value: any) => {
      setCommentValue(value);
    },
    [setCommentValue],
  );

  return (
    <Grid item xs={12}>
      <CommentRejectControlStyled>
        <InputBase
          multiline
          multilineRows={7}
          placeholder={'Expliquer la raison du rejet'}
          onChange={(e) => handleChangeValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
      </CommentRejectControlStyled>
    </Grid>
  );
};
