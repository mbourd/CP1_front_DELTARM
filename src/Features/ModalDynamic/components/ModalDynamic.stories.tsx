import React from 'react';
import { ModalDynamic } from './ModalDynamic';
import { data } from '../../../mocks/fixtures/modal/modal';
import { dataPeriodClose } from '../../../mocks/fixtures/modal/modal';

export default {
  title: 'ModalDynamic',
  component: ModalDynamic,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <ModalDynamic {...args} />;
};

export const Modal = Template.bind({});
Modal.args = {
  open: true,
  data,
};

export const ModalPeriodClose = Template.bind({});
ModalPeriodClose.args = {
  open: true,
  data: dataPeriodClose,
};
