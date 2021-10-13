import { apiRouter } from 'Services';
import {
  IAction,
  IApiData,
  IChapter,
  IControl,
  ICurrentSection,
  IData,
  ISection,
  IState
} from '../types';
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
        fontColor: control.control_font_color,
        fontSize: control.control_font_size,
        family: control.control_family,
        regex: control.control_regex,
        regexMsg: control.control_regex_msg,
        manageCompliance: control.control_manage_compliance,
      };

      if (control.control_answer_choices) {
        const answerChoices: Record<string, ISelectData> = {};
        control.control_answer_choices.map((answer) => {
          answerChoices[answer.choice_id] = {
            id: '' + answer.choice_id,
            label: answer.choice_lib,
            value: answer.choice_id,
            isKo: answer.choice_is_ko,
          };

          return answer;
        });
        c.answerChoices = answerChoices;
      }

      if (control.compliance) {
        c.compliance = {
          resolved: control.compliance.compliance_resolved,
          complianceUncheckColor: control.compliance.compliance_uncheck_color,
          complianceCheckColor: control.compliance.compliance_check_color,
          complianceLib: control.compliance.compliance_lib,
          complianceCheckboxResolved: control.compliance.compliance_checkbox_resolved,
          modaleTitle: control.compliance.compliance_modale_title,
        };
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
      tooltip: section.section_hint || undefined,
    });

    return section;
  });

  const state: IState = {
    color: apiData.state.state_color,
    id: '' + apiData.state.state_id,
    name: apiData.state.state_name,
  };

  const { header_message, header_type } = apiData.section_header || {};
  const { footer_message } = apiData.section_footer || {};

  const data: IData = {
    actions,
    currentSection,
    sections,
    state,
    file: apiData.file,
    number: apiData.file_info.file_num + '/' + apiData.file_info.file_avenant,
    contrepartie: apiData.file_info.contrepartie,
    productType: apiData.file_info.product_type,
    countComments: apiData.nb_comment,
    validationCount: apiData.valid_num,
    sectionHeader: header_message && header_type ? { message: header_message, type: header_type } : undefined,
    sectionFooter: footer_message ? { message: footer_message } : undefined,
  };

  return data;
};

apiRouter.registerRoute({
  name: 'edit',
  path: '/edit',
  method: 'get',
  handler: (response: any) => {
    try {
      return editValidationHandlerCallback(response);
    } catch (e) {
      return null;
    }
  },
});
