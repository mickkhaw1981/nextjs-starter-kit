# Next.js Project Structure Breakdown

├── README.md
├── components.json
├── docs
│ ├── prd.md
│ ├── project-structure.md
│ └── turbo-config.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── prisma
│ ├── schema.prisma
│ └── seeds
│ └── seed.ts
├── public
│ ├── icons
│ │ ├── github.svg
│ │ └── google.svg
│ └── images
│ ├── placeholder.svg
│ ├── placeholder2.svg
│ └── site-logo.svg
├── screenshots
├── scripts
│ └── switchEnv.js
├── src
│ ├── app
│ │ ├── (demo)
│ │ │ ├── buttons
│ │ │ ├── colors
│ │ │ └── inputs
│ │ ├── (root)
│ │ │ └── page.tsx
│ │ ├── auth
│ │ │ ├── callback
│ │ │ ├── confirm
│ │ │ ├── error
│ │ │ ├── forgot-password
│ │ │ ├── login
│ │ │ ├── sign-up
│ │ │ ├── sign-up-success
│ │ │ └── update-password
│ │ ├── favicon.ico
│ │ ├── global.css
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ └── protected
│ │ └── page.tsx
│ ├── assets
│ │ └── fonts
│ │ └── font.ts
│ ├── components
│ │ ├── button
│ │ │ └── custom-button.tsx
│ │ ├── forgot-password-form.tsx
│ │ ├── form
│ │ │ ├── auth-form.tsx
│ │ │ └── social-auth-form.tsx
│ │ ├── logout-button.tsx
│ │ ├── mode-toggle.tsx
│ │ ├── theme-provider.tsx
│ │ ├── ui
│ │ │ ├── alert.tsx
│ │ │ ├── badge.tsx
│ │ │ ├── button.tsx
│ │ │ ├── card.tsx
│ │ │ ├── dropdown-menu.tsx
│ │ │ ├── input.tsx
│ │ │ ├── label.tsx
│ │ │ ├── sonner.tsx
│ │ │ └── table.tsx
│ │ └── update-password-form.tsx
│ ├── constants
│ │ ├── auth-form.ts
│ │ └── routes.ts
│ ├── lib
│ │ ├── actions
│ │ │ └── auth.action.ts
│ │ ├── prisma.ts
│ │ ├── supabase
│ │ │ ├── client.ts
│ │ │ ├── middleware.ts
│ │ │ └── server.ts
│ │ ├── utils
│ │ ├── utils.ts
│ │ └── validations.ts
│ ├── middleware.ts
│ ├── stories
│ │ ├── Button.stories.tsx
│ │ ├── DropdownMenu.stories.tsx
│ │ └── ModeToggle.stories.tsx
│ └── types
│ ├── action.d.ts
│ └── global.d.ts
├── supabase
│ └── config.toml
├── tailwind.config.ts
├── tsconfig.json
└── tsconfig.tsbuildinfo
