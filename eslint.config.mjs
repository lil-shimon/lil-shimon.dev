// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import nextVitals from "eslint-config-next/core-web-vitals";
import storybook from "eslint-plugin-storybook";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // https://github.com/vercel/next.js/issues/85244#issuecomment-3435555006
  // https://nextjs.org/docs/app/api-reference/config/eslint#setup-eslint
  ...nextVitals,
  ...storybook.configs["flat/recommended"],
];

export default eslintConfig;
