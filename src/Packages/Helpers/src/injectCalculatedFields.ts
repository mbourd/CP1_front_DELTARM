import { IChapter } from '../../../Features/Edit/types';
import { between } from './between';

export const injectCalculatedFields = (formState: IChapter[]): IChapter[] => {
  formState.map((chapter: IChapter) => {
    chapter.controls.map((field) => {
      if (field.formula) {
        const regex = new RegExp(/#\d+/g);
        const fieldsToReplaceInFormula = field.formula.formula.match(regex);
        let formula = field.formula.formula;
        let oneOfValueIsMissing = false;

        formState.map((chapter) => {
          chapter.controls.map(() => {
            fieldsToReplaceInFormula?.map((fieldToReplace) => {
              const foundedField = chapter.controls.find(
                (fieldToFind) =>
                  '#' + fieldToFind.control_id === fieldToReplace,
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
                  (choice) =>
                    '' + choice.choice_id === foundedField.control_value,
                );
                formula = formula.replaceAll(
                  fieldToReplace,
                  `${value?.choice_value}`,
                );
                if (!value?.choice_value && value?.choice_value !== 0) {
                  oneOfValueIsMissing = true;
                }
              }
            });
          });
        });

        if (!oneOfValueIsMissing) {
          const calculatedValue = Function('return ' + formula);
          if (
            calculatedValue &&
            !isNaN(calculatedValue()) &&
            isFinite(calculatedValue())
          ) {
            field.control_value = calculatedValue().toString();
            field.calculatedValue = calculatedValue().toString();
          }
        }
        if (oneOfValueIsMissing) {
          field.control_value = '';
          field.calculatedValue = '';
        }
      }
      if (field.formula?.map) {
        field.formula.map.map((map) => {
          if (between(field.control_value, map.min, map.max)) {
            field.control_value = map.lib;
            field.calculatedValue = map.lib;
          }
        });
      }
    });
  });

  return formState;
};
