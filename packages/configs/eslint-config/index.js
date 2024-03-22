module.exports = {
  plugins: ['prettier', 'react-hooks', 'simple-import-sort'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': 'error',

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
        html: true
      }
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
        propElementValues: 'always'
      }
    ],
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true
      }
    ],
    'react/jsx-sort-props': [
      'error',
      {
        reservedFirst: true,
        shorthandFirst: true,
        callbacksLast: true
      }
    ],

    'react-hooks/rules-of-hooks': 'error',

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react'],
          ['^\\.\\./\\.\\./testing'],
          ['^.+\\.types$'],
          ['^(@testing-library|@storybook|@date-io|date-fns)'],
          ['^clsx', '^.+\\.classes$'],
          ['^@mui/base'],
          ['^@mui/material/styles', '^@mui/system', '^@mui/material', '^@mui/utils'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$']
        ]
      }
    ],
    'simple-import-sort/exports': 'error'
  }
};
