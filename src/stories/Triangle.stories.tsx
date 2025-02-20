import { Triangle, Typography } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Triangle> = {
  title: "Atoms/Triangle",
  component: Triangle,
};

export default meta;
type Story = StoryObj<typeof Triangle>;


export const Mobile: Story = {
  render: () => (
    <div style={{ width: "328px", height: "509px", backgroundColor: "green", position: "relative" }}>
        <Triangle><Typography align="start" variant="normal">28.00 <Typography variant="tiny">€</Typography></Typography></Triangle>
    </div>
  ),
};

export const Desktop: Story = {
  render: () => (
    <div style={{ width: "400px", height: "460px", backgroundColor: "green", position: "relative" }}>
        <Triangle><Typography align="start" variant="normal">28.00 <Typography variant="tiny">€</Typography></Typography></Triangle>
    </div>
  ),
};