import { IApiControl } from '../../../Features/Edit/types';

export const injectCalculatedFields = (
  formState: IApiControl[],
): IApiControl[] => {
  formState.map((field: IApiControl) => {
    if (field.field_is_formula) {
      // @TODO
    }
  });

  return formState;
};
