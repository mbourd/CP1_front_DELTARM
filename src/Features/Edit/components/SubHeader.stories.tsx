import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { http, HttpResponse } from 'msw';

import { componentsDecorator } from '../../../.storybook/componentsDecorator';
import { SubHeader } from './SubHeader';
import { IData } from '../types';

export default {
  title: 'Features/Edit/components/SubHeader',
  component: SubHeader,
  decorators: [componentsDecorator({})],
  parameters: {
    msw: {
      handlers: {
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof SubHeader>;

type Story = StoryObj<typeof SubHeader>;

const data: IData = {
  number: null,
  contrepartie: null,
  productType: '',
  title: null,
  // @ts-ignore
  currentSection: undefined,
  sections: [],
  // @ts-ignore
  state: undefined,
  file: [],
  countComments: 0,
  linked_files: [],
  valid_mode: 'global',
  context: 'edit',
};

/*************** DEFAULT ***************/
const DefaultTemplate = (args) => {
  useEffect(() => {}, []);

  return (
    <>
      <SubHeader {...args} />
    </>
  );
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = DefaultTemplate.bind({});
Default.args = {
  data: structuredClone(data)
};
