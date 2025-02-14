import type { Meta, StoryObj } from "@storybook/react";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

const meta = {
  title: "Components/ModeToggle",
  component: ModeToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A theme toggle component that allows users to switch between light, dark, and system color modes. 
Built with Radix UI Dropdown Menu and styled with Tailwind CSS.

## Features
- Smooth theme transitions with animation
- Accessible keyboard navigation
- Screen reader support
- System theme detection
- Persisted theme preference
- Mobile-friendly design

## Usage

\`\`\`tsx
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <header>
      <ModeToggle />
    </header>
  )
}
\`\`\`

## Accessibility
- Uses semantic HTML button element
- Includes screen reader text
- Supports keyboard navigation (Space/Enter to open, Esc to close, Arrow keys to navigate)
- Maintains focus management
- ARIA attributes for dropdown menu

## Technical Details
- Built on top of Radix UI's Dropdown Menu
- Uses next-themes for theme management
- Automatic system theme detection
- Smooth transitions between themes
- Icon animations on theme change
`,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: "button-name",
            enabled: true,
          },
          {
            id: "aria-hidden-focus",
            enabled: true,
          },
        ],
      },
    },
    controls: {
      hideNoControlsWarning: true,
    },
  },
  argTypes: {
    // While the component doesn't accept props directly, we document the theme options
    // that can be selected from the dropdown
    theme: {
      control: false,
      description: "Theme options available in the dropdown menu:",
      table: {
        type: {
          summary: "light | dark | system",
        },
        defaultValue: { summary: "system" },
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-[200px] min-w-[200px] flex items-center justify-center">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof ModeToggle>;

// Default story showing the toggle in its default position
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The default ModeToggle component with a sun/moon icon that animates on theme change. The dropdown menu provides options for light, dark, and system themes.",
      },
    },
  },
};

// Story showing the toggle in a different position
export const CustomPosition: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="min-h-[200px] min-w-[200px] relative">
        <div className="absolute top-2 left-2">
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "The ModeToggle component positioned in the top-left corner, demonstrating how it can be positioned anywhere in your layout.",
      },
    },
  },
};

// Story showing the toggle in dark mode
export const DarkMode: Story = {
  args: {},
  parameters: {
    themes: {
      defaultTheme: "dark",
    },
    docs: {
      description: {
        story:
          "The ModeToggle component initialized in dark mode, showing the moon icon by default.",
      },
    },
  },
};

// Story showing the toggle in system mode
export const SystemMode: Story = {
  args: {},
  parameters: {
    themes: {
      defaultTheme: "system",
    },
    docs: {
      description: {
        story:
          "The ModeToggle component using system preferences to determine the initial theme.",
      },
    },
  },
};

// Story showing the toggle in mobile viewport
export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "The ModeToggle component in a mobile viewport, demonstrating its responsive behavior and touch-friendly interface.",
      },
    },
  },
};
