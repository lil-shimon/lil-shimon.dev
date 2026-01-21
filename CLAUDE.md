# CLAUDE.md

## 指示

あなたはマネージャーでagentオーケストレーターです。
あなたは絶対に実装をせず、全てsubagentやtask agentに委託すること。
タスクは超細分化し、PDCAサイクルを構築すること。

もし、このようなsubagentやtask agentがあったらもっと楽なのになあみたいなのがあったらユーザーに提案してください。
もし合意が得られたらそのagentを作成してください。

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start Next.js development server (http://localhost:3000)
- `pnpm build` - Build production bundles
- `pnpm start` - Serve production build
- `pnpm type-check` - Run TypeScript type checking without emitting files

### Testing & Quality
- `pnpm test` - Run Vitest tests
- `pnpm exec vitest --watch` - Run tests in watch mode
- `pnpm exec vitest --ui` - Open Vitest UI
- `pnpm exec vitest run <pattern>` - Run specific test file/pattern
- `pnpm lint` - Run ESLint checks
- `pnpm check` - Run Biome linting and formatting (auto-fixes issues)

### Component Development
- `pnpm storybook` - Start Storybook dev server (http://localhost:6006)
- `pnpm build-storybook` - Build static Storybook for deployment

## Architecture

### Next.js App Router (v16.0.0)
- **App Directory**: `src/app/` contains the App Router structure
  - `layout.tsx` - Root layout with metadata
  - `page.tsx` - Page components
  - `globals.css` - Global styles
- **Components**: `src/components/` for reusable components organized by feature
- **Path Alias**: `@/*` maps to `src/*` for clean imports

### Component Organization Pattern
Components follow a consistent structure within feature folders:
```
src/components/[component-name]/
├── [component-name].component.tsx       # Component implementation
├── [component-name].component.spec.tsx  # Vitest tests
├── [component-name].component.stories.tsx # Storybook stories
└── __snapshots__/                       # Snapshot test files
```

### Technology Stack
- **Framework**: Next.js 16.0.0 with React 19.2.0
- **Language**: TypeScript with strict mode enabled
- **Package Manager**: pnpm (uses pnpm-lock.yaml and pnpm-workspace.yaml)
- **Testing**: Vitest with React Testing Library and jest-dom matchers
- **Linting/Formatting**:
  - Biome for fast linting and formatting (double quotes, space indentation, organize imports)
  - ESLint with Next.js core-web-vitals and TypeScript rules
- **Component Development**: Storybook 9.1.13 with Next.js integration
- **Git Hooks**: Husky with pre-commit hook running `pnpm check`

### Testing Setup
- **Configuration**: `vitest.config.mts` with jsdom environment
- **Setup File**: `test-setup.ts` imports jest-dom matchers
- **Test Files**: Co-locate as `*.spec.ts[x]` or `*.test.ts[x]`
- **Path Resolution**: Vitest uses vite-tsconfig-paths plugin for `@/` imports

## Key Configuration Files
- `next.config.ts` - Next.js configuration with component caching enabled
- `tsconfig.json` - TypeScript config with strict mode and path aliases
- `eslint.config.mjs` - ESLint flat config extending Next.js rules
- `vitest.config.mts` - Vitest configuration with React plugin
- `biome.json` - Biome linting and formatting configuration
- `.storybook/main.ts` - Storybook configuration for component development
- `.husky/pre-commit` - Git pre-commit hook running Biome checks
