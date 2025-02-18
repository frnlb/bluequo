import { Typography } from "@/components";
import { TypographyProps } from "@/components/atoms/typography/Typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
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
type Story = StoryObj<TypographyProps>;

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
      <Typography variant="smallTitle" color="black" align="center">COLLECTION</Typography>
      <Typography variant="normal" color="black" align="center">
        <Typography variant="span" color="gray">by </Typography>
        undergroung
      </Typography>
    </div>
  ),
};