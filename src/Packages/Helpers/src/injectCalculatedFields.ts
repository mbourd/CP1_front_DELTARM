import { IControl } from '../../../Features/Edit/types';

export const injectCalculatedFields = (formState: IControl[]): IControl[] => {
  formState.map((field: IControl) => {
    if (field.isCalculated) {
      console.log(field.calculated);
    }
  });

  return formState;
};
