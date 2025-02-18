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
    children: "normal"
  },
};


export const Variants: Story = {
  render: () => (
    <>
      <Typography variant="smallTitle" color="black">COLLECTION</Typography>
      <Typography variant="span" color="gray"> by </Typography>
      <Typography variant="span" color="black">undergroung</Typography>
    </>
  ),
};