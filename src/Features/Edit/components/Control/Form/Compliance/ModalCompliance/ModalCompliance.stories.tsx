import React from 'react';
import { ModalCompliance } from './ModalCompliance';
import { MODAL_COMPLIANCE_DATA } from '../../../../../../../mocks/fixtures/compliance/modalcompliance';
import { worker } from '../../../../../../../mocks/server';
import { rest } from 'msw';

export default {
  title: 'ModalCompliance',
  component: ModalCompliance,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <ModalCompliance {...args} />;
};

export const Compliance = Template.bind({});
Compliance.args = {
  open: true,
  onClose: () => false,
  controlId: 1573,
  fileId: 1377,
};

Compliance.decorators = [
  (story: any) => {
    worker?.use(
      rest.get(
        'https://undefined/control/get_compliance_values',
        (req, res, ctx) => {
          req.url.searchParams.get('file_id');
          req.url.searchParams.get('elm_id');

          return res(ctx.status(200), ctx.json(MODAL_COMPLIANCE_DATA));
        },
      ),
    );

    return story();
  },
];
