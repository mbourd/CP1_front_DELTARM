import React from 'react';
import { LinearMetric } from './LinearMetric';

export default {
  title: 'Linear',
  component: LinearMetric,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <LinearMetric {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'determinate',
  lib: 'Taux de Complétude',
  value: 54,
  info: 'Le taux de Complétude est calculé selon les éléments bla bla bla',
  hint: 'Taux de Complétude : 54 dossiers / 100 prévus au plan = 54%',
  style: {
    color: 'blue',
    backgroundColor: 'grey',
    height: 13,
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  style: {
    color: 'red',
    backgroundColor: 'black',
    height: 13,
  },
};
