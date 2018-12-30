module.exports = {
  parser: 'babel-eslint',
  extends: [
    'google',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['prettier', 'react'],
  globals: {
    graphql: false,
  },
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
