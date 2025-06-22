import { builtinModules } from 'module';
import globals from 'globals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx,vue}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      semi: 'always',
      // imports
      'import/order': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports.
            ['^\\u0000'],
            // vue related imports
            ['^vue'],
            // React related imports
            ['^react'],
            // Nextjs related imports
            ['^next'],
            // Node.js builtins prefixed with `node:`.
            ['node:', `^(${builtinModules.join('|')})(/|$)`],
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ['^@?\\w'],
            // Absolute imports and other imports such as path aliases `@/foo`.
            // Anything not matched in another group.
            ['^'],
            // Relative imports.
            // Anything that starts with a dot.
            ['^\\.'],
            // Leave classnames for last
            ['(classnames)'],
          ],
        },
      ],
      // other
      curly: 'error',
      'no-unused-vars': 'error',
      'no-undef': 'warn',
    },
  },
];
