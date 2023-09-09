// Core
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Paragraph } from '../components/Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio' },
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  args: {
    children: 'Paragraph',
  },
};
