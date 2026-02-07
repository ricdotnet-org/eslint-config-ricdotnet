# How to use

## Install using npm or other preferred package manager

```console
npm install -D https://github.com/ricdotnet-org/eslint-config-ricdotnet{@version}
```

## Use with eslint flat config

The example below is just to demonstrate how this could be integrated into an existing eslint flat config.

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintConfigRicdotnet from 'eslint-config-ricdotnet';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [...eslintConfigRicdotnet];
```
