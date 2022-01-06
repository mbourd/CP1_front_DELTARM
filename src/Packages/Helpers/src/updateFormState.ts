import { IApiControl } from '../../../Features/Edit/types';
import React, { SetStateAction } from 'react';

export const updateFormState = (
  formState: IApiControl[],
  controlId: string,
  currentValue: string | null,
  setFormState: React.Dispatch<SetStateAction<IApiControl[]>>,
) => {
  let change = false;
  const newControlState = formState.map((stateControl) => {
    if (controlId === stateControl.control_id) {
      if (stateControl.control_value !== currentValue) {
        change = true;
        stateControl.control_value = currentValue;
      }
    }

    return stateControl;
  });

  if (change) {
    setFormState(newControlState);
  }
};
