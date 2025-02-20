import { SearchInput } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchInput> = {
  title: "Molecules/SearchInput",
  component: SearchInput,
};

export default meta;
type Story = StoryObj<typeof SearchInput>;


export const Case: Story = {
  render: () => (
    <div>
      <SearchInput handleSearch={function (): void {
                throw new Error("Function not implemented.");
            } } />
    </div>
  ),
};