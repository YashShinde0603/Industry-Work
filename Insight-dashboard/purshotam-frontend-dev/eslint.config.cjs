const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const typescriptEslintParser = require('@typescript-eslint/parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'], // Only lint files in the src folder
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      react,
    },
    rules: {
      // Basic rules for TypeScript and React
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'no-unused-vars': 'warn', // Warns about unused variables
      '@typescript-eslint/no-unused-vars': 'warn', // TypeScript-specific rule for unused variables
      'react/jsx-uses-react': 'off', // Disable old React rule
      'react/jsx-uses-vars': 'warn', // Warns if JSX variables are not used
      'semi': ['error', 'always'], // Enforce semicolons
      'quotes': ['error', 'single'], // Enforce single quotes
      "react/function-component-definition": "off",
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
  ...compat.config({
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
  }),
];
