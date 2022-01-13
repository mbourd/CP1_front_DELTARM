import { IApiControl } from '../../../Features/Edit/types';
import { between } from './between';

export const injectCalculatedFields = (
  formState: IApiControl[],
): IApiControl[] => {
  formState.map((field: IApiControl) => {
    if (field.formula) {
      const regex = new RegExp(/#\d+/g);
      const fieldsToReplaceInFormula = field.formula.formula.match(regex);
      let formula = field.formula.formula;

      fieldsToReplaceInFormula?.map((fieldToReplace) => {
        const foundedField = formState.find(
          (fieldToFind) => '#' + fieldToFind.control_id === fieldToReplace,
        );

        if (foundedField && !foundedField?.control_answer_choices) {
          formula = formula.replaceAll(
            fieldToReplace,
            `${foundedField.control_value}`,
          );
        }

        if (foundedField?.control_answer_choices) {
          const value = foundedField.control_answer_choices.find(
            (choice) => '' + choice.choice_id === foundedField.control_value,
          );
          formula = formula.replaceAll(
            fieldToReplace,
            `${value?.choice_value}`,
          );
        }
      });
      // eslint-disable-next-line no-eval
      field.control_value = eval(`${formula}`).toString();
    }
    if (field.formula?.map) {
      field.formula.map.map((map) => {
        if (between(field.control_value, map.min, map.max)) {
          field.control_value = map.lib;
        }
      });
    }
  });

  return formState;
};
