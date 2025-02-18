
import { Button } from "@/components/atoms/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;



export const Main: Story = {
  render: () => (
    <div>
      <Button onClick={()=> console.log("clicked")}>This is a button</Button>
    </div>
  ),
};