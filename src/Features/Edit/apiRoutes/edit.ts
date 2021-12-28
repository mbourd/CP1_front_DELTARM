import { apiRouter } from 'Services';
import {
  IAction,
  IApiDataEdit,
  IChapter,
  IControl,
  ICurrentSection,
  IData,
  ISection,
  IState,
} from '../types';
import { ISelectData } from 'Shared/components';
import { IButtons } from '../../DashboardDynamic/components/types';

export const editValidationHandlerCallback = (apiData: IApiDataEdit) => {
  const actions: IAction[] = [];
  const actions_contr_perm: IButtons[] = [];
  const chapters: IChapter[] = [];

  if (apiData.actions) {
    apiData.actions?.map((datum) => {
      actions.push({
        id: '' + datum.id_action,
        label: datum.action_lib,
        url: datum.route,
        code: datum.action_code,
      });

      return datum;
    });
  }

  if (apiData.actions_contr_perm) {
    apiData.actions_contr_perm?.map((action) => {
      actions_contr_perm.push({
        bg_color: action.bg_color,
        font_color: action.font_color,
        hover_color: action.hover_color,
        btn_lib: action.btn_lib,
        action: action.action,
      });

      return action;
    });
  }

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
        isConditional: control.control_conditional,
        isCalculated: control.field_is_formula,
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
          complianceCheckboxResolved:
            control.compliance.compliance_checkbox_resolved,
          modaleTitle: control.compliance.compliance_modale_title,
        };
      }

      if (control.conditional) {
        c.conditional = {
          formula: control.conditional.conditional_formula,
          byField: '' + control.conditional.conditional_by_field_id,
          conditionalInitState: control.conditional.conditional_init_state,
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
    actions_contr_perm,
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
    sectionHeader:
      header_message && header_type
        ? { message: header_message, type: header_type }
        : undefined,
    sectionFooter: footer_message ? { message: footer_message } : undefined,
    title: apiData.file_info.title,
  };

  return data;
};

apiRouter.registerRoute({
  name: 'edit',
  path: '/edit',
  method: 'get',
  handler: (response: any) => {
    try {
      return editValidationHandlerCallback(response.data);
    } catch (e) {
      return null;
    }
  },
});
