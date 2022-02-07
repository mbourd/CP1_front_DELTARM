import { IChapter } from '../../../Features/Edit/types';

export const injectDisabledFields = (formState: IChapter[]): IChapter[] => {
  formState.map((chapter: IChapter) => {
    chapter.controls.map((field) => {
      if (field.control_conditional) {
        // Find the listened field
        formState.map((chapter) => {
          chapter.controls.map(() => {
            const fieldToTest = chapter.controls.find(
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
                const executeCondition = Function('return ' + condition);
                if (executeCondition()) {
                  field.editable = true;
                  if (field.control_mandatory) {
                    field.mandatory = true;
                  }
                }
                if (!executeCondition()) {
                  field.editable = false;
                  if (field.control_mandatory) {
                    field.mandatory = false;
                  }
                }
                // 2 keys in control object : editable is use in component and control_editable is the initial api state
                if (!field.control_editable) {
                  field.editable = false;
                }
              }
            }
          });
        });
      }
    });
  });

  return formState;
};
