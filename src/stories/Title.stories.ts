// Core
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Title } from '../components/Title';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio' },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    children: 'Title',
  },
};
