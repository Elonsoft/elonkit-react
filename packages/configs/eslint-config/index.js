import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import prettier from 'eslint-plugin-prettier/recommended';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  reactRecommended,
  {
    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
      'simple-import-sort': simpleImportSort,
      '@stylistic': stylistic,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'prettier/prettier': 'error',

      'no-case-declarations': 'off',
      'no-duplicate-imports': 'error',
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-unreachable-loop': 'error',
      'no-use-before-define': 'error',

      // 'capitalized-comments': 'error',
      curly: 'error',
      eqeqeq: 'error',
      'no-alert': 'error',
      'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
      'no-else-return': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-inline-comments': 'error',
      'no-lonely-if': 'error',
      // 'no-magic-numbers': 'error',
      'no-multi-assign': 'error',
      'no-negated-condition': 'error',
      // 'no-nested-ternary': 'error',
      'no-new-wrappers': 'error',
      // 'no-param-reassign': ['error', { props: true }],
      'no-restricted-globals': ['error', 'close', 'event'],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@mui/lab*'],
              importNames: ['LoadingButton'],
            },
            {
              group: ['@mui/material*'],
              importNames: [
                'Alert',
                'AlertTitle',
                'AppBar',
                'Autocomplete',
                'Avatar',
                'AvatarGroup',
                'Breadcrumbs',
                'Button',
                'ButtonBase',
                'Dialog',
                'DialogActions',
                'DialogContent',
                'DialogContentText',
                'DialogTitle',
                'Divider',
                'IconButton',
                'LinearProgress',
                'Link',
                'Pagination',
                'PaginationItem',
                'SvgIcon',
                'Switch',
                'Table',
                'TableBody',
                'TableCell',
                'TableContainer',
                'TableHead',
                'TablePagination',
                'TableRow',
                'TableText',
              ],
            },
            {
              group: ['@mui/material/Alert'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/AlertTitle'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/AppBar'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/Autocomplete'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/Avatar'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/AvatarGroup'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/Breadcrumbs'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/Button'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/ButtonBase'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/Dialog'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/DialogActions'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/DialogContent'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/DialogContentText'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/DialogTitle'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/Divider'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/IconButton'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/LinearProgress'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/Link'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/Pagination'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/PaginationItem'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/SvgIcon'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/Switch'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/Table'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/TableBody'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/TableCell'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/TableContainer'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/TableHead'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/TablePagination'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/TableRow'],
              importNames: ['default'],
            },
            {
              group: ['@mui/material/TableText'],
              importNames: ['default'],
            },
          ],
        },
      ],
      'no-return-assign': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-object-spread': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      // 'prefer-template': 'error',
      'require-await': 'error',
      // yoda: 'error',

      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: '*', next: 'multiline-expression' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: 'multiline-expression', next: '*' },
        { blankLine: 'never', prev: 'case', next: 'case' },
        { blankLine: 'never', prev: 'case', next: 'default' },
      ],

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',

      // 'react/hook-use-state': 'error',
      // 'react/no-array-index-key': 'error',
      // 'react/jsx-handler-names': [
      //   'error',
      //   {
      //     eventHandlerPrefix: '(on|set|toggle)',
      //     eventHandlerPropPrefix: '(on|set)',
      //     checkLocalVariables: true,
      //     checkInlineFunction: false
      //   }
      // ],
      'react/jsx-boolean-value': 'error',
      'react/jsx-fragments': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/no-object-type-as-default-prop': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/void-dom-elements-no-children': 'error',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
          propElementValues: 'always',
        },
      ],
      'react/jsx-no-useless-fragment': [
        'error',
        {
          allowExpressions: true,
        },
      ],
      'react/jsx-sort-props': [
        'error',
        {
          reservedFirst: true,
          shorthandFirst: true,
          callbacksLast: true,
        },
      ],

      'react-hooks/rules-of-hooks': 'error',

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  }
);
