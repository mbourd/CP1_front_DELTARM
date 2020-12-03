import React from 'react';
import { Button } from 'Shared/components';
import { UserCheckedIcon } from 'Styles';
import { useTrans } from 'Services';
import { SubmitForValidationStyled } from './SubmitForValidation.style';

export const SubmitForValidation: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');

  // url : /validate/ask

  return (
    <SubmitForValidationStyled className={'action'}>
      <Button color={'success'} type={'alt'} startIcon={<UserCheckedIcon />}>
        {trans('submitForValidation')}
      </Button>
    </SubmitForValidationStyled>
  );
};
