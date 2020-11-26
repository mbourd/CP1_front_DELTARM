import React from 'react';
import img from './error404.svg';
import { Error } from '../Error';

export const Error404: React.FC = (): React.ReactElement => {
  return <Error title={'Oops!'} image={img} />;
};
