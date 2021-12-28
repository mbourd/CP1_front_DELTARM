import { IControl } from '../../../Features/Edit/types';

export const injectDisabledFields = (formState: IControl[]): IControl[] => {
  formState.map((field: IControl) => {
    if (field.isConditional) {
      if (field.conditional?.conditionalInitState) {
        field.editable = true;
      }

      if (!field.conditional?.conditionalInitState) {
        field.editable = false;
      }

      // Find the listened field
      const fieldToTest = formState.find(
        (fieldToFind) => fieldToFind.id === field.conditional?.byField,
      );

      let condition = field.conditional?.formula;
      if (fieldToTest) {
        if (fieldToTest.value) {
          condition = condition?.replaceAll('$', `'${fieldToTest.value}'`);
        }
        if (!fieldToTest.value) {
          condition = condition?.replaceAll('$', `null`);
        }
        if (condition) {
          // eslint-disable-next-line no-eval
          if (eval(condition)) {
            field.editable = true;
          }
          // eslint-disable-next-line no-eval
          if (!eval(condition)) {
            field.editable = false;
          }
        }
      }
    }
  });

  return formState;
};
