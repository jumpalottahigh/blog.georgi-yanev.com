const globals = require('globals')
const react = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const prettier = require('eslint-plugin-prettier')
const prettierConfig = require('eslint-config-prettier')

module.exports = [
  {
    ignores: ['public/', '.cache/'],
  },
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      prettier,
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        graphql: 'readonly',
      },
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
    },
  },
  prettierConfig,
]
