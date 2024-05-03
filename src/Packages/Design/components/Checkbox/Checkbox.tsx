import React from 'react';
import { IRadio, Radio } from '../Radio';

export const Checkbox: React.FC<
  React.PropsWithChildren<Omit<IRadio, 'type'>>
> = (props) => {
  return <Radio {...props} type={'checkbox'} />;
};
