
import { Button, Typography } from "@/components";
import { Icon } from "@/components";
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

export const Heart: Story = {
  render: () => (
    <div>
      <Button onClick={()=> console.log("clicked")}>
        <Typography variant="normal">1 </Typography>
        <Icon name="heart"/></Button>
    </div>
  ),
};

export const MagnifyingGlass: Story = {
  render: () => (
    <div>
      <Button onClick={()=> console.log("clicked")}><Icon name="magnifying-glass"/></Button>
      </div>
  ),
};

export const Arrow: Story = {
  render: () => (
    <div>
      <Button onClick={()=> console.log("clicked")}>
      <Typography variant="normal">0 </Typography>
        <Icon name="arrow"/></Button>
      </div>
  ),
};