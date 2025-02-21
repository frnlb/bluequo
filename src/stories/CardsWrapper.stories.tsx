import { CardsWrapper, CaseCard } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import CollectionImage from "./assets/96be26bddb674f9c286175c263fdef67.jpeg";


const meta: Meta<typeof CardsWrapper> = {
  title: "Templates/CardsWrapper",
  component: CardsWrapper
};

export default meta;
type Story = StoryObj< typeof CardsWrapper>;

export const Case: Story = {
  render: () => (
    <div>
      <CardsWrapper>
          <CaseCard 
          alt=""
          src={CollectionImage}
          title="collection"
          artist="undergroung"
          handleLike={() => console.log("liked")}
          handleVisit={() => console.log("visited")}
          like={1}
          price="28.00 €" visit={0}    />
          <CaseCard 
          alt=""
          src={CollectionImage}
          title="collection"
          artist="undergroung"
          handleLike={() => console.log("liked")}
          handleVisit={() => console.log("visited")}
          like={1}
          price="28.00 €" visit={0}    />
          <CaseCard 
          alt=""
          src={CollectionImage}
          title="collection"
          artist="undergroung"
          handleLike={() => console.log("liked")}
          handleVisit={() => console.log("visited")}
          like={1}
          price="28.00 €" visit={0}    />
                    <CaseCard 
          alt=""
          src={CollectionImage}
          title="collection"
          artist="undergroung"
          handleLike={() => console.log("liked")}
          handleVisit={() => console.log("visited")}
          like={1}
          price="28.00 €" visit={0}    />
                    <CaseCard 
          alt=""
          src={CollectionImage}
          title="collection"
          artist="undergroung"
          handleLike={() => console.log("liked")}
          handleVisit={() => console.log("visited")}
          like={1}
          price="28.00 €" visit={0}    />
                    <CaseCard 
          alt=""
          src={CollectionImage}
          title="collection"
          artist="undergroung"
          handleLike={() => console.log("liked")}
          handleVisit={() => console.log("visited")}
          like={1}
          price="28.00 €" visit={0}    />
                    <CaseCard 
          alt=""
          src={CollectionImage}
          title="collection"
          artist="undergroung"
          handleLike={() => console.log("liked")}
          handleVisit={() => console.log("visited")}
          like={1}
          price="28.00 €" visit={0}    />
      </CardsWrapper>
    </div>
  ),
};