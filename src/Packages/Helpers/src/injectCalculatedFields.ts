import { IApiControl } from '../../../Features/Edit/types';

export const injectCalculatedFields = (
  formState: IApiControl[],
): IApiControl[] => {
  formState.map((field: IApiControl) => {
    if (field.formula) {
      // @TODO
      console.log(field);
    }
  });

  return formState;
};
