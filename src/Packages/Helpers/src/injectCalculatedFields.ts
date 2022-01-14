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
      let oneOfValueIsMissing = false;

      fieldsToReplaceInFormula?.map((fieldToReplace) => {
        const foundedField = formState.find(
          (fieldToFind) => '#' + fieldToFind.control_id === fieldToReplace,
        );

        if (foundedField && !foundedField?.control_answer_choices) {
          if (foundedField.control_value) {
            formula = formula.replaceAll(
              fieldToReplace,
              `${foundedField.control_value}`,
            );
          }
          if (!foundedField.control_value) {
            oneOfValueIsMissing = true;
          }
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

      if (!oneOfValueIsMissing) {
        // eslint-disable-next-line no-eval
        const calculatedValue = eval(`${formula}`).toString();
        if (
          calculatedValue &&
          !isNaN(calculatedValue) &&
          isFinite(calculatedValue)
        ) {
          field.control_value = calculatedValue;
        }
      }
      if (oneOfValueIsMissing) {
        field.control_value = '';
      }
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
