import eslint from '@eslint/js'
import tslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'

export default [
  { ignores: ['build', 'node_modules'] },
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      react,
      import: importPlugin
    },
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'react/display-name': 'error',
      'newline-before-return': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'lines-around-comment': [
        'error',
        {
          beforeLineComment: true,
          beforeBlockComment: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowObjectStart: true,
          allowArrayStart: true
        }
      ],
      'import/newline-after-import': [
        'error',
        {
          count: 1
        }
      ]
    }
  }
]
