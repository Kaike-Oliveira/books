// Core
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Tags } from '../components/Tags';

const meta: Meta<typeof Tags> = {
  title: 'Components/Tags',
  component: Tags,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tags>;

export const Primary: Story = {
  args: {
    tags: [
      {
        text: 'TS',
        id: 'TS',
      },
      {
        text: 'JS',
        id: 'JS',
      },
      {
        text: 'Python',
        id: 'Python',
      },
      {
        text: 'React',
        id: 'React',
      },
    ],
  },
};
