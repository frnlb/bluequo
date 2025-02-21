import { CaseCard } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import CollectionImage from "./assets/96be26bddb674f9c286175c263fdef67.jpeg";


const meta: Meta<typeof CaseCard> = {
  title: "Molecules/CaseCard",
  component: CaseCard,
  argTypes: {
    
  },
};

export default meta;
type Story = StoryObj<typeof CaseCard>;

export const Case: Story = {
  render: () => (
    <div>
      <CaseCard 
        align="center"
        alt=""
        src={CollectionImage}
        title="collection"
        artist="undergroung"
        handleLike={()=> console.log("liked")}
        handleVisit={()=> console.log("visited")}
        like={1}
        price="28.00 €"
    />
    </div>
  ),
};