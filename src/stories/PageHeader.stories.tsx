import {  PageHeader } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof PageHeader> = {
  title: "Templates/PageHeader",
  component: PageHeader,
};

export default meta;
type Story = StoryObj<typeof PageHeader>;


export const Case: Story = {
  render: () => (
    <div>
      <PageHeader handleSearch={()=> {console.log("test")}}/>
    </div>
  ),
};