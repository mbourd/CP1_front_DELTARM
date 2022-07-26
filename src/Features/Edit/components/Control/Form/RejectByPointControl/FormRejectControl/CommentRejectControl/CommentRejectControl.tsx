import React, { useCallback } from 'react';
import { CommentRejectControlStyled } from './CommentRejectControl.style';
import { Grid } from '@material-ui/core';
import { FormError, InputBase } from 'Shared/components';
import { useTrans } from '../../../../../../../../Services';

interface IProps {
  setCommentValue: React.Dispatch<React.SetStateAction<string | null>>;
  errorMessage: string | null;
}

export const CommentRejectControl: React.FC<IProps> = ({
  setCommentValue,
  errorMessage,
}): React.ReactElement => {
  const handleChangeValue = useCallback(
    (value) => {
      setCommentValue(value);
    },
    [setCommentValue],
  );
  const [trans] = useTrans('Edit');

  return (
    <Grid item xs={12}>
      <CommentRejectControlStyled>
        <InputBase
          multiline
          multilineRows={7}
          placeholder={trans('explainReasonRejection')}
          onChange={(e) => handleChangeValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
      </CommentRejectControlStyled>
    </Grid>
  );
};
