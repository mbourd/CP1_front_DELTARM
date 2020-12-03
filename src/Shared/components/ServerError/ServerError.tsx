import React from 'react';
import { Error } from 'Shared/components';
import { useTrans } from 'Services';

export const ServerError: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Default');

  return (
    <Error title={'Oops!'} redirect={{ label: trans('serverErrorLabel'), link: '/' }}>
      {trans('serverErrorMessage')}
    </Error>
  );
};
