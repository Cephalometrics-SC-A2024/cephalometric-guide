// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    // Define your custom ESLint rules here, if needed.
    'react/prop-types': [0],
    'react/react-in-jsx-scope': [0],
  },
  ignorePatterns: ['**/*.css', '**/*.svg', '**/*.scss'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
