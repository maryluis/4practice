module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': 0,
    'linebreak-style': 0,
    'no-debugger': 0,
    'no-plusplus': 0,
    'import/no-cycle': 0,
    'no-undef': 0,
    'react/forbid-prop-types': 0,
    'arrow-body-style': 0,
    'array-callback-return': 0,
    'consistent-return': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'default-case': 0,
  },
};
