import { apiRouter, router } from 'Services';
import { Edit } from 'Features/Edit';
import { IApiComplianceData, IComplianceData } from './types';

router.registerRoute({
  name: 'edit',
  path: '/file/edit/:id?',
  component: Edit,
  exact: true,
  strict: false,
  sensitive: false,
  props: {
    title: 'Edition',
    apiRouteName: 'edit',
    apiSaveControlRouteName: 'setControlValue',
  },
});

apiRouter.registerRoute({
  name: 'downloadFile',
  path: '/control/get_upfile',
  method: 'get',
});

apiRouter.registerRoute({
  name: 'getCompliance',
  path: '/control/get_compliance_values',
  method: 'get',
  handler: (response): IComplianceData[] => {
    const data: IApiComplianceData[] = response.data;
    const complianceElms: IComplianceData[] = [];

    data.map((compliance) => {
      const com: IComplianceData = {
        desc1: compliance.compliance_elm_desc_1,
        desc2: compliance.compliance_elm_desc_2,
        family: compliance.compliance_elm_family,
        id: compliance.compliance_id,
        lib: compliance.compliance_elm_lib,
        regex: compliance.compliance_elm_regex,
        regexMsg: compliance.compliance_elm_regex_msg,
        type: compliance.compliance_elm_type,
        value: compliance.compliance_elm_value,
        uploadDetail: compliance.compliance_upload_detail,
      };
      complianceElms.push(com);

      return compliance;
    });

    return complianceElms;
  },
});
