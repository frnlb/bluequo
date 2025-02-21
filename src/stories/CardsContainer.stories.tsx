import { CardsWrapper } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CardsWrapper> = {
  title: "Templates/CardsWrapper",
  component: CardsWrapper,
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
type Story = StoryObj< typeof CardsWrapper>;

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
      <CardsWrapper variant="smallTitle" color="black" align="center">COLLECTION</CardsWrapper>
      <CardsWrapper variant="normal" color="black" align="center">
        <CardsWrapper variant="span" color="gray">by </CardsWrapper>
        undergroung
      </CardsWrapper>
    </div>
  ),
};