import { Image } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import CollectionImage from "./assets/96be26bddb674f9c286175c263fdef67.jpeg";

const meta: Meta<typeof Image> = {
  title: "Atoms/Image",
  component: Image,
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
type Story = StoryObj<typeof Image>;

export const Main: Story = {
  render: () => (
    <div>
      <Image src={CollectionImage} alt={CollectionImage} />
    </div>
  ),
};


export const Desktop: Story = {
  render: () => (
    <div style={{ width: "400px", height: "360px" }}>
      <Image src={CollectionImage} alt={CollectionImage} />
    </div>
  ),
};

export const Mobile: Story = {
  render: () => (
    <div style={{ width: "328px", height: "350px" }}>
      <Image src={CollectionImage} alt={CollectionImage} />
    </div>
  ),
};