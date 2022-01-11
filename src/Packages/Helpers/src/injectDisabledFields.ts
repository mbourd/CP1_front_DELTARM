import { IApiControl } from '../../../Features/Edit/types';

export const injectDisabledFields = (
  formState: IApiControl[],
): IApiControl[] => {
  formState.map((field: IApiControl) => {
    if (field.control_conditional) {
      if (field.conditional?.conditional_init_state) {
        field.control_editable = true;
      }

      if (!field.conditional?.conditional_init_state) {
        field.control_editable = false;
      }

      // Find the listened field
      const fieldToTest = formState.find(
        (fieldToFind) =>
          fieldToFind.control_id ==
          field.conditional?.conditional_by_field_id + '',
      );

      let condition = field.conditional?.conditional_formula;
      if (fieldToTest) {
        if (fieldToTest.control_value) {
          condition = condition?.replaceAll(
            '$',
            `'${fieldToTest.control_value}'`,
          );
        }
        if (!fieldToTest.control_value) {
          condition = condition?.replaceAll('$', `null`);
        }
        if (condition) {
          // eslint-disable-next-line no-eval
          if (eval(condition)) {
            field.control_editable = true;
          }
          // eslint-disable-next-line no-eval
          if (!eval(condition)) {
            field.control_editable = false;
          }
        }
      }
    }
  });

  return formState;
};
