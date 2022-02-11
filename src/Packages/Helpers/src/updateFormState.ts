import { IChapter } from '../../../Features/Edit/types';
import React, { SetStateAction } from 'react';

export const updateFormState = (
  formState: IChapter[],
  controlId: string,
  currentValue: string | null,
  setFormState: React.Dispatch<SetStateAction<IChapter[]>>,
) => {
  let change = false;
  const newControlState = formState.map((chapter) => {
    chapter.controls.map((control) => {
      if (controlId === control.control_id) {
        if (control.control_value !== currentValue) {
          change = true;
          control.control_value = currentValue;
        }
      }

      return control;
    });

    return chapter;
  });

  if (change) {
    setFormState(newControlState);
  }
};
