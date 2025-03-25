# Next.js Project Structure Breakdown

├── README.md # Project documentation and setup instructions
├── components.json # Configuration for UI components, likely for a component library
├── docs # Documentation folder
│ └── prd.md # Product Requirements Document
├── eslint.config.mjs # ESLint configuration for code linting
├── next-env.d.ts # TypeScript declarations for Next.js environment
├── next.config.js # Next.js configuration file (JavaScript version)
├── next.config.ts # Next.js configuration file (TypeScript version)
├── package-lock.json # Exact dependency tree for reproducible builds
├── package.json # Project metadata and dependencies
├── postcss.config.mjs # PostCSS configuration for CSS processing
├── src # Source code directory
│ ├── app # App Router directory (Next.js 13+)
│ │ ├── favicon.ico # Site favicon
│ │ ├── fonts # Custom font files
│ │ ├── globals.css # Global CSS styles
│ │ ├── layout.tsx # Root layout component
│ │ └── page.tsx # Home page component
│ ├── components # Reusable UI components
│ │ ├── mode-toggle.tsx # Theme mode toggle component
│ │ ├── theme-provider.tsx # Theme context provider
│ │ └── ui # UI component library
│ ├── constants # Application constants, mock data and config values
│ ├── lib # Utility libraries and functions
│ │ ├── actions # Server actions (Next.js 13+ feature)
│ │ ├── database # Database schema defimitions, utility functions and helpers
│ │ ├── handlers # API and event handlers
│ │ └── utils.ts # General utility functions
│ ├── stories # Storybook stories for UI component documentation
│ │ ├── Button.stories.tsx
│ │ ├── DropdownMenu.stories.tsx
│ │ └── ModeToggle.stories.tsx
│ └── types # TypeScript type definitions
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration

```

```
