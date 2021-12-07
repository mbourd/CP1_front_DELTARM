import React from 'react';
import { CircularMetric } from './CircularMetric';

export default {
  title: 'Circular',
  component: CircularMetric,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <CircularMetric {...args} />;
};

export const CircularIndicator = Template.bind({});
CircularIndicator.args = {
  variant: 'determinate',
  lib: 'Taux de Complétude',
  value: 74,
  info: 'Le taux de Complétude est calculé selon les éléments bla bla bla',
  hint: 'Taux de Complétude : 54 dossiers / 100 prévus au plan = 54%',
  style: {
    color: 'skyblue',
  },
};
