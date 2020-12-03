import React from 'react';
import { Button } from 'Shared/components';
import { StopIcon } from 'Styles';
import { useTrans } from 'Services';
import { WithoutContinuationStyled } from './WithoutContinuation.style';

export const WithoutContinuation: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');

  // url : /file/noncase

  return (
    <WithoutContinuationStyled className={'action'}>
      <Button color={'error'} type={'alt'} startIcon={<StopIcon />}>
        {trans('classifyWithoutContinuation')}
      </Button>
    </WithoutContinuationStyled>
  );
};
