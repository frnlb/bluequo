import { Card } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import CollectionImage from "./assets/96be26bddb674f9c286175c263fdef67.jpeg";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  argTypes: {
    variant: {
      options: ["normal", "smallTitle", "span"],
      control: { type: "radio" },
    },
    color: {
      options: ["black", "gray"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

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
      <Card alt="" src={CollectionImage} title="collection" artist="undergroung" price="28.00 €"/>
    </div>
  ),
};