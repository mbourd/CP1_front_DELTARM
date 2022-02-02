import React from 'react';
import { UploadControl } from './UploadControl';
import { worker } from '../../../../../../mocks/server';
import { rest } from 'msw';
import {
  initialList,
  listAfterDelete,
  listAfterUpload,
} from '../../../../../../mocks/fixtures/upload/upload';

export default {
  title: 'UploadControl',
  component: UploadControl,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <UploadControl {...args} />;
};
const control = {
  control_desc1: null,
  control_desc2: null,
  control_editable: true,
  editable: true,
  control_family: 'standard',
  control_id: '1931',
  isConditional: false,
  isCalculated: false,
  manageCompliance: false,
  control_mandatory: false,
  mandatory: false,
  control_previous_value: null,
  control_regex: null,
  control_regex_msg: null,
  control_title: 'Upload control',
  control_type: 'upload',
  control_value: null,
  upload_detail: initialList,
};
export const Upload = Template.bind({});
Upload.args = {
  control,
  fileId: 1233,
  formState: [{ controls: [control] }],
  setFormState: () => {
    return undefined;
  },
};

Upload.decorators = [
  (story: any) => {
    worker?.use(
      rest.post('https://undefined/control/set_value', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(listAfterUpload));
      }),
      rest.post('https://undefined/control/delete_value', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(listAfterDelete));
      }),
      rest.get('https://undefined/control/get_upfile', (req, res, ctx) => {
        // blob file to download
        // todo mock return of blob

        return res(ctx.status(200), ctx.json(initialList));
      }),
    );

    return story();
  },
];

const controlDisabled = {
  control_desc1: null,
  control_desc2: null,
  control_editable: false,
  editable: false,
  control_family: 'standard',
  control_id: '1937',
  isConditional: false,
  isCalculated: false,
  manageCompliance: false,
  control_mandatory: false,
  mandatory: false,
  control_previous_value: null,
  control_regex: null,
  control_regex_msg: null,
  control_title: 'Upload control disabled',
  control_type: 'upload',
  control_value: null,
  upload_detail: [
    { file_id: '183', file_name: 'disabled.png' },
    { file_id: '167', file_name: 'disabled2.png' },
  ],
};
export const UploadDisabled = Template.bind({});
UploadDisabled.args = {
  control: controlDisabled,
  fileId: 1234,
  formState: [{ controls: [controlDisabled] }],
  setFormState: () => {
    return undefined;
  },
};
