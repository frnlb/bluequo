
import { Icon } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;



export const Main: Story = {
  render: () => (
    <div>
      <Icon name='heart' size={50} color='red' />
    </div>
  ),
};