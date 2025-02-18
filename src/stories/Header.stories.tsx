import { Header } from "@/components";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Molecules/Header",
  component: Header,
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Header>;




export const Case: Story = {
  render: () => (
    <Header/>
  ),
};