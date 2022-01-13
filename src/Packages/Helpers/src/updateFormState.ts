import { IApiControl } from '../../../Features/Edit/types';
import React, { SetStateAction } from 'react';

export const updateFormState = (
  formState: IApiControl[],
  controlId: string,
  currentValue: string | null,
  setFormState: React.Dispatch<SetStateAction<IApiControl[]>>,
) => {
  let change = false;
  const newControlState = formState.map((control) => {
    if (controlId === control.control_id) {
      if (control.control_value !== currentValue) {
        change = true;
        control.control_value = currentValue;
      }
    }

    return control;
  });

  if (change) {
    setFormState(newControlState);
  }
};
