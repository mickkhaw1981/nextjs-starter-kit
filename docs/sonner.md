# Sonner

An opinionated toast component for React.

## About

Sonner is built and maintained by emilkowalski\_.

## Installation

### Run the following command:

```bash
pnpm dlx shadcn@latest add sonner
```

### Add the Toaster component

```tsx
// app/layout.tsx
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
```

## Usage

```tsx
import { toast } from "sonner";
```

```tsx
toast("Event has been created.");
```

## Examples

You can use the toast component in various ways:

```tsx
// Default toast
toast("Event has been created.");

// With description
toast("Event has been created.", {
  description: "Sunday, December 3rd at 9:00am",
});

// With custom styling
toast("Event has been created", {
  description: "Sunday, December 3rd at 9:00am",
  className: "bg-primary-50 border-primary-200 text-primary-800",
});

// Success toast
toast.success("Event has been created.");

// Error toast
toast.error("Event could not be created.");

// With custom icon
toast("Event has been created.", {
  icon: <Icon />,
});

// Promise toast
toast.promise(promise, {
  loading: "Loading...",
  success: "Success!",
  error: "Error!",
});
```

For more information and complete documentation, visit the [shadcn/ui website](https://ui.shadcn.com/docs/components/sonner).
