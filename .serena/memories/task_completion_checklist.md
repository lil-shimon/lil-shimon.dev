# Task Completion Checklist

## When a Task is Completed

### Required Checks (Must Pass)
1. **Run Biome Check**: `pnpm check`
   - Ensures code formatting is correct (tabs, double quotes)
   - Validates linting rules
   - Organizes imports automatically
   - This is also run automatically on pre-commit

2. **Run ESLint**: `pnpm lint`
   - Checks for ESLint rule violations
   - Ensures Next.js best practices
   - Validates TypeScript usage

3. **Run TypeScript Check**: `pnpm type-check`
   - Ensures no TypeScript errors
   - Validates strict mode compliance
   - Checks type definitions

4. **Run Tests**: `pnpm test`
   - Ensures all tests pass
   - Updates snapshots if needed (`pnpm test -- -u`)
   - Verifies no regressions

### Optional Checks (As Needed)
5. **Test in Development**: `pnpm dev`
   - Manually verify the feature works
   - Check browser console for errors
   - Test user interactions

6. **Build Production**: `pnpm build`
   - Ensure production build succeeds
   - Check for build warnings
   - Verify bundle size is reasonable

7. **Run Storybook**: `pnpm storybook`
   - If components were added/modified
   - Verify component isolation works
   - Update stories if needed

### Before Committing
- Stage files: `git add .`
- Review changes: `git diff --staged`
- Commit with meaningful message: `git commit -m "feat: description"`
- Pre-commit hook will run `pnpm check` automatically

### Important Notes
- Never skip the required checks
- Fix all errors before considering task complete
- Update tests when changing functionality
- Update TypeScript types when changing interfaces
- Ensure no console errors in browser
- Keep commits focused and atomic