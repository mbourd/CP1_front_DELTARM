import React from 'react';
import { UseApiCallStateType } from '../types';

export interface IApiStorage {
  addCallState: (
    code: UseApiCallStateType,
    value: React.ReactElement,
  ) => IApiStorage;
  getCallState: (code: UseApiCallStateType) => React.ReactElement | undefined;
}
