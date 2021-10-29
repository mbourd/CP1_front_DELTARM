import React from 'react';
import { UseApiCallStateType } from './types';
import { apiStorage } from './Storage';

interface ISwitchCallState {
  callState: UseApiCallStateType;
  states?: Record<string, React.ReactElement>;
}

export const SwitchCallState: React.FC<ISwitchCallState> = ({
  callState,
  states,
  children,
}): React.ReactElement => {
  if (states && states[callState]) {
    return states[callState];
  }

  const cs = apiStorage.getCallState(callState);

  if (cs) {
    return cs;
  }

  return <>{children}</>;
};
