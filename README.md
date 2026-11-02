# How to use

## Install using npm or other preferred package manager

```console
npm install -D @ricdotnet/eslint
```

## Use with eslint flat config

The example below is just to demonstrate how this could be integrated into an existing eslint configuration.

```js
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigRicdotnet from '@ricdotnet/eslint';

const eslintConfig = defineConfig([
  ...eslintConfigRicdotnet,
  {
    rules: {
      // other rules
    },
  },
]);

export default eslintConfig;
```
