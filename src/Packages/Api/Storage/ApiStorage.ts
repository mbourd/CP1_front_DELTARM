import React from 'react';
import { IApiStorage } from './types';
import { UseApiCallStateType } from '../types';

class ApiStorage implements IApiStorage {
  private _callState: Record<string, React.ReactElement> = {};

  addCallState(code: UseApiCallStateType, value: React.ReactElement): this {
    this._callState[code] = value;

    return this;
  }

  getCallState(code: UseApiCallStateType): React.ReactElement | undefined {
    return this._callState[code];
  }
}

export const apiStorage = new ApiStorage();
