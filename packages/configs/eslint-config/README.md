# @elonkit/eslint-config

## Prerequisites

You need to install `typescript` and `prettier` in your project.

## Installation

```bash
npm install --save-dev @elonkit/eslint-config @eslint/compat @stylistic/eslint-plugin eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort globals typescript-eslint
```

## Usage

```js
import config from '@elonkit/eslint-config';

export default [
  ...config,
  {
    ignores: ['node_modules/*'],
  },
];
```
