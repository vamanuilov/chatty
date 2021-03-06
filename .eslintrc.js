module.exports = {
  env: {
    browser: true
  },
  extends: ['airbnb-typescript', 'prettier', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'jest', 'import'],
  rules: {
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'prettier/prettier': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['off'],
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'warn',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', '.ts', '.js'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  }
}
