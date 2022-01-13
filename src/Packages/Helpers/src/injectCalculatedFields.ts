import { IApiControl } from '../../../Features/Edit/types';

export const injectCalculatedFields = (
  formState: IApiControl[],
): IApiControl[] => {
  formState.map((field: IApiControl) => {
    if (field.formula) {
      const regex = new RegExp(/#\d+/g);
      const fieldsToReplaceInFormula = field.formula.formula.match(regex);
      let formula = field.formula.formula;

      fieldsToReplaceInFormula?.map((fieldToReplace) => {
        const valueToReplace = formState.find(
          (fieldToFind) => '#' + fieldToFind.control_id === fieldToReplace,
        );
        if (valueToReplace) {
          formula = formula.replaceAll(
            fieldToReplace,
            `${valueToReplace.control_value}`,
          );
        }
      });

      // eslint-disable-next-line no-eval
      field.control_value = eval(`${formula}`).toString();
    }
  });

  return formState;
};
