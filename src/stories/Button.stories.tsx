import type { Meta, StoryObj } from "@storybook/react";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with multiple variants and sizes. Built with Radix UI and styled with Tailwind CSS.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    asChild: {
      control: "boolean",
      description: "Whether to render as a child component using Radix UI Slot",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Base story with default variant and size
export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};

// Variant stories
export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

// Size stories
export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

// Icon button examples
export const IconOnly: Story = {
  args: {
    size: "icon",
    children: <Mail className="size-4" />,
    "aria-label": "Send email",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="size-4" />
        Send Email
      </>
    ),
  },
};

// State examples
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

// Loading state example (if implemented)
export const Loading: Story = {
  args: {
    children: "Loading...",
    disabled: true,
  },
};

// Long text example
export const LongText: Story = {
  args: {
    children: "This is a very long button text that might wrap",
  },
};
