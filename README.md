# Next.js Modern Stack Template

A Next.js template that combines commonly used tools and libraries for building full-stack web applications. This stack is specifically designed to be optimized for AI coding assistants like Cursor.

## 🎯 Overview

This template includes [Next.js 15](https://nextjs.org/) with the App Router, [Supabase](https://supabase.com) for the database, [Prisma](https://www.prisma.io/) for ORM, and optional integrations with various AI providers and AWS services.

> ⚠️ **Note**: This is my personal template with tools that I personally have experience with.

## ✨ Features

### 🏗️ Core Architecture

- [**Next.js 15**](https://nextjs.org/) - React framework with App Router
- [**TypeScript**](https://www.typescriptlang.org/) - Type safety throughout
- [**Prisma**](https://www.prisma.io/) - Database ORM and schema management
- [**Supabase**](https://supabase.com) - Postgres database with realtime and auth

### 🎨 UI & Styling

- [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework
- [**Framer Motion**](https://www.framer.com/motion/) - Animation library
- [**Lucide Icons**](https://lucide.dev/) - Icon set
- Dark mode with Tailwind CSS

### 🛠️ Development Tools

- [**Storybook**](https://storybook.js.org/) - Component development environment
- [**Geist Font**](https://vercel.com/font) - Typography by Vercel

### 🤖 AI & Background Jobs

- Multiple AI integrations available:
  - [OpenAI](https://openai.com) - GPT-4 and o-series models
  - [Anthropic](https://anthropic.com) - Sonnet-3.5
  - [Perplexity](https://perplexity.ai) - Web search models
  - [Groq](https://groq.com) - Fast inference
- [**Inngest**](https://www.inngest.com/) - Background jobs and scheduled tasks

### 🔧 Infrastructure & Services

- [**Resend**](https://resend.com) - Email delivery
- [**Supabase**](https://supabase.com) - Primary database

### 🔔 Additional Features

- [**react-toastify**](https://fkhadra.github.io/react-toastify/) - Toast notifications
- Utility functions for common operations
- TypeScript and ESLint configuration included

## 🚀 Getting Started

1. Fork this repository
2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env` and configure your environment variables
4. Set up your database:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app.

## 🔄 Database Environment Switching

This project includes a convenient system to switch between local, staging, and production databases during development.

### Available Commands

```bash
# Switch to local database
npm run use:local

# Switch to staging database
npm run use:staging

# Switch to production database
npm run use:prod

# Check current database connection
npm run db:current

# Validate database configuration
npm run db:check
```

### Environment Files Setup

1. `.env.local` - Local development database configuration
2. `.env.staging` - Staging/testing database configuration
3. `.env.production` - Production database configuration (never commit this file)
4. `.env.sample` - Template for environment variables (safe to commit)

The switching system will:

- ✓ Automatically copy the correct environment file
- ✓ Validate required database variables
- ✓ Show clear status messages
- ⚠️ Display appropriate warnings for each environment
- 🔒 Include safety checks to prevent accidental misuse

### Environment Indicators

Each environment has its own indicator and appropriate warning level:

- 🏠 **Local**: Development environment (no warnings)
- 🚧 **Staging**: Testing environment (moderate warnings)
- 🌐 **Production**: Live environment (strong warnings)

### Example Outputs

#### Local Environment

```bash
✓ Environment Switch Complete
🏠 LOCAL Environment Active

Database Configuration:
📡 DATABASE_URL: your-local-database-url
🔌 DIRECT_URL: your-local-direct-url

Status:
📂 Source: .env.local
✨ Target: .env
```

#### Staging Environment

```bash
✓ Environment Switch Complete
🚧 STAGING Environment Active

Database Configuration:
📡 DATABASE_URL: your-staging-database-url
🔌 DIRECT_URL: your-staging-direct-url

Status:
📂 Source: .env.staging
✨ Target: .env

⚠️  WARNING: Staging Database Active
🔨 You are now connected to the STAGING database
📢 This environment is for testing purposes
```

#### Production Environment

```bash
✓ Environment Switch Complete
🌐 PRODUCTION Environment Active

Database Configuration:
📡 DATABASE_URL: your-production-database-url
🔌 DIRECT_URL: your-production-direct-url

Status:
📂 Source: .env.production
✨ Target: .env

⚠️  WARNING: Production Database Active
🔒 You are now connected to the PRODUCTION database
📢 Exercise extreme caution with database operations
```

## �� Project Structure

- `app/` - Next.js app router pages and API routes
- `src/`
  - `components/` - UI components
  - `lib/` - Utilities and configurations
    - `utils/` - Shared utilities
  - `stories/` - Storybook files
- `prisma/` - Database schema

## 🚀 Deployment

This template is optimized for deployment on [Vercel](https://vercel.com).

### Database Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Get your database connection strings from Supabase:
   - Project Settings → Database
   - Copy both the URI (for `DATABASE_URL`) and Direct Connection (for `DIRECT_URL`)

### Vercel Setup

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Configure the following environment variables:
   - `DATABASE_URL` - Your Supabase database URL
   - `DIRECT_URL` - Your Supabase direct connection URL
   - `NEXTAUTH_SECRET` - Generate with `openssl rand -base64 32`
   - `NEXTAUTH_URL` - Your production URL (e.g., https://your-app.vercel.app)
   - Add any other variables from `.env.example` that you're using
5. Deploy!

### Post-Deployment

1. Run database migrations in the Vercel deployment:

```bash
npx vercel env pull .env.production.local  # Pull production env vars
npx prisma migrate deploy                  # Deploy migrations to production
```

2. Set up your custom domain in Vercel (optional):
   - Go to your project settings
   - Navigate to Domains
   - Add your domain and follow the DNS configuration instructions

## 📝 License

MIT License
