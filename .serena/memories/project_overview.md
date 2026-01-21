# Nano Project Overview

## Purpose
Nano is a Next.js web application built with modern React and TypeScript. It appears to be a starter/template project with a basic component structure and testing setup.

## Tech Stack
- **Framework**: Next.js 15.5.3 with App Router
- **Runtime**: React 19.1.0 and React DOM 19.1.0
- **Language**: TypeScript 5.x with strict mode enabled
- **Package Manager**: pnpm (with workspace support)
- **Build Tool**: Next.js with Turbopack enabled for development and production
- **Testing**: Vitest with React Testing Library and jest-dom matchers
- **Linting**: ESLint with Next.js config and Biome for formatting/linting
- **Component Development**: Storybook for component isolation and documentation
- **Version Control**: Git with Husky pre-commit hooks

## Project Structure
```
nano/
├── src/
│   ├── app/           # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/    # Reusable React components
│       └── sample/    # Example component with tests and stories
├── public/            # Static assets
├── .husky/           # Git hooks configuration
├── .storybook/       # Storybook configuration
└── Configuration files (tsconfig.json, package.json, etc.)
```

## Key Features
- Modern React 19 with TypeScript
- Server-side rendering with Next.js App Router
- Component testing with Vitest and snapshot testing
- Component documentation with Storybook
- Automated code quality checks with pre-commit hooks
- Path aliasing (@/* maps to src/*)