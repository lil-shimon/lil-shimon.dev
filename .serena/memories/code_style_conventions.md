# Code Style and Conventions

## TypeScript Configuration
- **Strict Mode**: Enabled - all strict type checking options are active
- **Target**: ES2017
- **Module System**: ESNext with bundler module resolution
- **JSX**: Preserve mode for Next.js processing
- **Path Aliases**: Use `@/*` for imports from `src/*` directory

## Code Formatting (Biome)
- **Indentation**: Tabs (not spaces)
- **Quote Style**: Double quotes for strings
- **Import Organization**: Automatic with Biome assist
- **Line Endings**: Auto-detected by Biome

## React/Component Conventions
- **Component Files**: Named as `*.component.tsx`
- **Test Files**: Co-located as `*.spec.tsx` or `*.test.tsx`
- **Story Files**: Named as `*.component.stories.tsx`
- **Component Structure**: Functional components with arrow functions
- **Exports**: Named exports for components (e.g., `export const Sample = () => {}`)

## File Organization
```
component-name/
├── component-name.component.tsx    # Component implementation
├── component-name.component.spec.tsx # Tests
├── component-name.component.stories.tsx # Storybook stories
└── __snapshots__/                  # Jest snapshots
```

## Testing Conventions
- Use Vitest with React Testing Library
- Write tests in jsdom environment
- Use jest-dom matchers for assertions
- Snapshot testing for component structure
- Test files should test component behavior and rendering

## Import Order (enforced by Biome)
1. External dependencies
2. Internal aliases (@/*)
3. Relative imports
4. Side-effect imports

## Git Commit Conventions
- Pre-commit hooks run `pnpm check` (Biome formatting and linting)
- Commits should pass all checks before being allowed

## Best Practices
- Use TypeScript strict mode features
- Prefer const over let when possible
- Use functional components with hooks
- Keep components small and focused
- Write tests for all components
- Document complex logic with comments
- Use meaningful variable and function names