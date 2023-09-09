// Core
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ShoppingCard } from '../components/ShoppingCard';

const meta: Meta<typeof ShoppingCard> = {
  title: 'Components/ShoppingCard',
  component: ShoppingCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ShoppingCard>;

export const Primary: Story = {
  args: {
    title: 'ShoppingCard',
    product: 'book',
    description: 'descriptions of the book',
    author: 'Any Author',
    price: 79.09,
  },
};
