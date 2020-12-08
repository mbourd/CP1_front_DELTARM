import { apiRouter, getEnv } from 'Services';
import { IAction, IApiData, IChapter, IControl, ICurrentSection, IData, ISection, IState } from '../types';
import { ISelectData } from 'Shared/components';

export const editValidationHandlerCallback = (response: any) => {
  const apiData: IApiData = response.data;
  const actions: IAction[] = [];
  const chapters: IChapter[] = [];

  apiData.actions.map((datum) => {
    actions.push({
      id: '' + datum.id_action,
      label: datum.action_lib,
      url: datum.route,
      code: datum.action_code,
    });

    return datum;
  });

  apiData.current_section.chapters.map((chapter) => {
    const controls: IControl[] = [];
    chapter.controls.map((control) => {
      const c: IControl = {
        desc1: control.control_desc_1,
        desc2: control.control_desc_2,
        editable: control.control_editable,
        id: '' + control.control_id,
        mandatory: control.control_mandatory,
        previousValue: control.control_previous_value,
        title: control.control_title,
        type: control.control_type,
        value: control.control_value,
      };

      if (control.control_answer_choices) {
        const answerChoices: Record<string, ISelectData> = {};
        control.control_answer_choices.map((answer) => {
          answerChoices[answer.choice_id] = {
            id: '' + answer.choice_id,
            label: answer.choice_lib,
            value: answer.choice_id,
          };

          return answer;
        });
        c.answerChoices = answerChoices;
      }

      controls.push(c);

      return control;
    });
    chapters.push({
      controls,
      id: '' + chapter.chap_num,
      label: chapter.chap_lib,
    });

    return chapter;
  });

  const currentSection: ICurrentSection = {
    chapters,
    id: '' + apiData.current_section.section_id,
  };

  const sections: ISection[] = [];

  apiData.sections.map((section) => {
    sections.push({
      id: '' + section.section_id,
      code: '' + section.stage_code,
      label: section.section_lib,
      locked: section.section_locked,
    });

    return section;
  });

  const state: IState = {
    color: apiData.state.state_color,
    id: '' + apiData.state.state_id,
    name: apiData.state.state_name,
  };

  const data: IData = {
    actions,
    currentSection,
    sections,
    state,
    countComments: apiData.nb_comment,
  };

  return data;
};

apiRouter.registerRoute({
  name: 'edit',
  path: '/edit',
  method: 'get',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: getEnv('USER_ID'),
  },
  handler: (response: any) => {
    try {
      return editValidationHandlerCallback(response);
    } catch (e) {
      return null;
    }
  },
});
