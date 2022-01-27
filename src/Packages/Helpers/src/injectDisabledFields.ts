import { IApiControl } from '../../../Features/Edit/types';

export const injectDisabledFields = (
  formState: IApiControl[],
): IApiControl[] => {
  formState.map((field: IApiControl) => {
    if (field.control_conditional) {
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
            field.editable = true;
            if (field.control_mandatory) {
              field.mandatory = true;
            }
          }
          // eslint-disable-next-line no-eval
          if (!eval(condition)) {
            field.editable = false;
            if (field.control_mandatory) {
              field.mandatory = false;
            }
          }
          // 2 props : editable is use in component and control_editable is the initial api state
          if (!field.control_editable) {
            field.editable = false;
          }
        }
      }
    }
  });

  return formState;
};
