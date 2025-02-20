import { Button, Header, Icon, Typography } from "@/components";

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
    <Header title={"collection"} artist={"undergroug"}>
      <Button onClick={()=> console.log("clicked")}><Typography variant="normal" color="inherit">1 </Typography><Icon name="heart"/></Button>
      <Button onClick={()=> console.log("clicked")}><Typography variant="normal" color="inherit">0 </Typography><Icon name="arrow"/></Button>
    </Header>
  ),
};