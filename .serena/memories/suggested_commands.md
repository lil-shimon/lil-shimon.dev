# Suggested Commands for Nano Project

## Development Commands
- `pnpm dev` - Start development server with Turbopack at http://localhost:3000
- `pnpm build` - Build production bundles with Turbopack
- `pnpm start` - Serve production build

## Testing Commands
- `pnpm test` - Run Vitest tests
- `pnpm exec vitest --watch` - Run tests in watch mode
- `pnpm exec vitest --ui` - Open Vitest UI for interactive testing
- `pnpm exec vitest run <pattern>` - Run specific test file/pattern

## Code Quality Commands
- `pnpm lint` - Run ESLint checks
- `pnpm check` - Run Biome checks with auto-fix (formats and lints)
- `pnpm type-check` - Run TypeScript type checking (using tsgo)

## Storybook Commands
- `pnpm storybook` - Start Storybook dev server at http://localhost:6006
- `pnpm build-storybook` - Build static Storybook site

## Git Commands
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes (triggers pre-commit hook)
- `git status` - Check current git status
- `git diff` - View unstaged changes
- `git log --oneline -10` - View recent commits

## System Commands (Darwin/macOS)
- `ls -la` - List all files with details
- `find . -name "*.tsx"` - Find TypeScript React files
- `grep -r "pattern" src/` - Search for pattern in source files
- `open http://localhost:3000` - Open browser on macOS

## Package Management
- `pnpm install` - Install dependencies
- `pnpm add <package>` - Add new dependency
- `pnpm add -D <package>` - Add dev dependency
- `pnpm update` - Update dependencies