// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    // Prevent definitions of unused prop types
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md#rule-options
    'react/no-unused-prop-types': 'error',

    // https://eslint.org/docs/rules/no-unused-vars#ignorerestsiblings
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],

    // https://eslint.org/docs/rules/no-console
    'no-console': 'warn',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  globals: {},
  settings: {
    react: {
      version: '16.3.0',
    },
  },
};
