import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

const meta = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A dropdown menu component built on top of Radix UI's Dropdown Menu primitive.
Displays a menu to the user—such as a set of actions or functions—triggered by a button.

## Features
- Keyboard navigation
- Type-ahead support
- Supports submenus
- Customizable positioning
- Support for checkboxes and radio groups
- Custom trigger elements
- Keyboard shortcuts
- Group support
- Separator elements
- Icons and indicators
- Disabled states

## Usage Guidelines

### Basic Usage
\`\`\`tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export function MyDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
\`\`\`

### Best Practices
1. **Trigger Element**
   - Use semantic buttons for triggers
   - Include clear visual indicators
   - Provide descriptive labels
   - Consider using icons alongside text

2. **Menu Content**
   - Group related items together
   - Use separators to create visual hierarchy
   - Keep menu items concise
   - Include icons for better visual scanning
   - Add keyboard shortcuts for power users

3. **Accessibility**
   - Include proper ARIA labels
   - Ensure keyboard navigation
   - Provide visual focus indicators
   - Support screen readers
   - Test with assistive technologies

4. **Positioning**
   - Consider viewport edges
   - Handle overflow appropriately
   - Use appropriate alignment
   - Account for mobile viewports

## Styling

### Tailwind Classes
The component uses these Tailwind CSS classes for styling:
- \`w-56\`: Sets default width
- \`rounded-md\`: Rounds corners
- \`border\`: Adds border
- \`bg-white\`: Sets background
- \`p-1\`: Adds padding
- \`text-sm\`: Sets font size
- \`shadow-md\`: Adds shadow
- \`dark:bg-neutral-950\`: Dark mode background

### Customization
You can customize the appearance using Tailwind classes:

\`\`\`tsx
<DropdownMenuContent className="w-72 bg-zinc-50 dark:bg-zinc-900">
  <DropdownMenuItem className="text-red-500 hover:text-red-600">
    Delete
  </DropdownMenuItem>
</DropdownMenuContent>
\`\`\`

## Animation
The component includes smooth animations for:
- Opening/closing transitions
- Submenu transitions
- Focus state changes
- Dark mode transitions

## Technical Details

### Component Architecture
- Built on Radix UI primitives
- Uses React's Context API
- Implements controlled and uncontrolled modes
- Supports TypeScript

### Performance Considerations
- Lazy-loaded submenus
- Optimized re-renders
- Portal-based rendering
- Efficient event handling

### Browser Support
- Works in all modern browsers
- Graceful degradation for older browsers
- Touch-friendly for mobile devices
- Responsive design support

## Accessibility

### ARIA Attributes
- \`aria-haspopup\`: Indicates menu presence
- \`aria-expanded\`: Shows menu state
- \`aria-label\`: Provides descriptions
- \`role="menu"\`: Semantic role
- \`role="menuitem"\`: Item roles

### Keyboard Navigation
- \`Space\` or \`Enter\` to open/close
- \`ArrowDown\` or \`ArrowUp\` to navigate items
- \`ArrowRight\` to open submenu
- \`ArrowLeft\` to close submenu
- \`Escape\` to close
- Type character to move to matching item

### Focus Management
- Maintains focus within menu
- Returns focus on close
- Handles nested focus
- Supports tab navigation

## Common Patterns

### Navigation Menu
Use for site navigation with nested items:
\`\`\`tsx
<DropdownMenu>
  <DropdownMenuTrigger>Navigate</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuItem>Home</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Products</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>New</DropdownMenuItem>
          <DropdownMenuItem>Popular</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
\`\`\`

### Settings Menu
Use for application settings:
\`\`\`tsx
<DropdownMenu>
  <DropdownMenuTrigger>Settings</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Preferences</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem>
      Show notifications
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem>
      Dark mode
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>
\`\`\`

### Context Menu
Use for contextual actions:
\`\`\`tsx
<DropdownMenu>
  <DropdownMenuTrigger>Actions</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Share</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-500">
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
\`\`\`
`,
      },
    },
    a11y: {
      config: {
        rules: [
          { id: "button-name", enabled: true },
          { id: "aria-menu", enabled: true },
        ],
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the dropdown menu when it is initially rendered",
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the dropdown menu",
    },
    onOpenChange: {
      description:
        "Event handler called when the open state of the dropdown menu changes",
    },
    modal: {
      control: "boolean",
      description:
        "The modality of the dropdown menu. When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers",
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

// Basic example with simple items
export const Basic: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic dropdown menu with icons, labels, and keyboard shortcuts.",
      },
    },
  },
};

// Example with checkboxes
export const WithCheckboxes: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(true);
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Preferences</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={checked}
            onCheckedChange={setChecked}
          >
            Show notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>
            Always show toolbar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Show status bar</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu with checkbox items for toggling options.",
      },
    },
  },
};

// Example with radio items
export const WithRadioItems: Story = {
  render: () => {
    const [position, setPosition] = React.useState("bottom");
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu with radio items for selecting a single option.",
      },
    },
  },
};

// Example with submenus
export const WithSubmenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              Invite users
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                Message
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                More...
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Dropdown menu with nested submenus for organizing complex options.",
      },
    },
  },
};

// Example with disabled items
export const WithDisabledItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          Cloud Storage (Coming Soon)
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <CreditCard className="mr-2 h-4 w-4" />
          Billing (Unavailable)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Dropdown menu with disabled items to indicate unavailable options.",
      },
    },
  },
};

// Example with different alignments
export const DifferentAlignments: Story = {
  render: () => (
    <div className="flex gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Align Start</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Align Center</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-56">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Align End</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown menus with different alignment options.",
      },
    },
  },
};
