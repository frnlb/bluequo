import { Triangle } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Triangle> = {
  title: "Atoms/Triangle",
  component: Triangle,
  argTypes: {
    variant: {
      control: "select",
      options: ["smallTitle", "normal", "span"],
    },
    color: {
      control: "select",
      options: ["black", "gray"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Triangle>;

export const normal: Story = {
  args: {
    variant: "normal",
    color: "black",
    children: "normal"
  },
};

export const SmallTitle: Story = {
  args: {
    variant: "smallTitle",
    color: "black",
    children: "Small Title"
  },
};


export const Gray: Story = {
  args: {
    variant: "normal",
    color: "gray",
    children: "gray"
  },
};


export const Case: Story = {
  render: () => (
    <div>
      <Triangle variant="smallTitle" color="black" align="center">COLLECTION</Triangle>
      <Triangle variant="normal" color="black" align="center">
        <Triangle variant="span" color="gray">by </Triangle>
        undergroung
      </Triangle>
    </div>
  ),
};