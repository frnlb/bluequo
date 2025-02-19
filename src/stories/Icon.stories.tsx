import { Icon } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Heart: Story = {
  render: () => (
    <div>
      <Icon name='heart' size={50} color='red' />
    </div>
  ),
};

export const Arrow: Story = {
  render: () => (
    <div>
      <Icon name='arrow' size={50} color='red' />
    </div>
  ),
};

export const MagnifyingGlass: Story = {
  render: () => (
    <div>
      <Icon name='magnifying-glass' size={50} color='red' />
    </div>
  ),
};
