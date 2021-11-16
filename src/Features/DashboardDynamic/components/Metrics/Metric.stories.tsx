import React from 'react';
import { Metric } from './Metric';

export default {
  title: 'Metric',
  component: Metric,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <Metric {...args} />;
};

export const MetricCustom = Template.bind({});
MetricCustom.args = {
  variant: 'determinate',
  lib: 'Taux de Complétude',
  value: 54,
  info: 'Le taux de Complétude est calculé selon les éléments bla bla bla',
  hint: 'Taux de Complétude : 54 dossiers / 100 prévus au plan = 54%',
  style: {
    color: 'blue',
    backgroundColor: '#000',
  },
};
