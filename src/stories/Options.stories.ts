// Core
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Options } from '../components/Options';

const meta: Meta<typeof Options> = {
  title: 'Components/Options',
  component: Options,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Options>;

export const Primary: Story = {
  args: {
    options: [
      {
        id: 1,
        type: 'E-book',
        price: '00,00',
        description: '.pdf, .epub, .mob',
      },
      {
        id: 2,
        type: 'E-book',
        price: '00,00',
        description: '.pdf, .epub, .mob',
      },
    ],
  },
};
