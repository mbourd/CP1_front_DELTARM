import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DummyComponent } from './DummyComponent';

const meta: Meta<typeof DummyComponent> = {
  title: 'Example/DummyComponent',
  component: DummyComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof DummyComponent>;

export const Default: Story = {
  args: {},
};
