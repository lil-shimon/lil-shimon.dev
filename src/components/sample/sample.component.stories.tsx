import type { Meta, StoryObj } from "@storybook/nextjs";
import { Sample } from "./sample.component";

type Component = typeof Sample;

type Story = StoryObj<Component>;

const meta = {
  component: Sample,
} satisfies Meta<Component>;

export const Default: Story = {};

export default meta;
