import { Button, Icon, Typography, Card } from "@/components";
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


export const Desktop: Story = {
  render: () => (
    <div>
        <Card alt="" src={CollectionImage} title="collection" artist="undergroung" price="28.00 €">
          <Button onClick={()=> console.log("clicked")}><Typography variant="normal" color="inherit">1 </Typography><Icon name="heart"/></Button>
          <Button onClick={()=> console.log("clicked")}><Typography variant="normal" color="inherit">0 </Typography><Icon name="arrow"/></Button>
      </Card>
    </div>
  ),
};

export const Mobile: Story = {
  render: () => (
    <div>
      <Card alt="" src={CollectionImage} title="collection" artist="undergroung">
              <Button onClick={()=> console.log("clicked")}><Typography variant="normal" color="inherit">1 </Typography><Icon name="heart"/></Button>
              <Button onClick={()=> console.log("clicked")}><Typography variant="normal" color="inherit">0 </Typography><Icon name="arrow"/></Button>
      </Card>
    </div>
  ),
};