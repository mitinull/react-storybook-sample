import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>; // 👈 Satisfies operator being used for stricter type checking.

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
    onClick: () => console.log("Primary Button Clicked"),
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    onClick: () => console.log("Secondary Button Clicked"),
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    variant: "primary",
    disabled: true,
    onClick: () => console.log("Disabled Button Clicked"),
  },
};
