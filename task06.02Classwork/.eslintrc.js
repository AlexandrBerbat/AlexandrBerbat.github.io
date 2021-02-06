module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    amd: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: __dirname,
      },
    },
  },
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    'no-console': [
      'off',
    ],
    'max-len': [
      'error',
      {
        code: 1500,
        ignoreTrailingComments: true,
      },
    ],
    'prefer-destructuring': [
      'error', {
        'array': false,
        'object': true,
      }, {
        'enforceForRenamedProperties': false
      }
    ],
  },
};
