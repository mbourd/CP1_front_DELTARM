import { IControl } from '../../../Features/Edit/types';
import React, { SetStateAction } from 'react';

export const updateFormState = (
  formState: IControl[],
  controlId: string,
  currentValue: string,
  setFormState: React.Dispatch<SetStateAction<IControl[]>>,
) => {
  let change = false;
  const newControlState = formState.map((stateControl) => {
    if (controlId === stateControl.id) {
      if (stateControl.value !== currentValue) {
        change = true;
        stateControl.value = currentValue;
      }
    }

    return stateControl;
  });

  if (change) {
    setFormState(newControlState);
  }
};
