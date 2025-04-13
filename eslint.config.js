import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import boundaries from 'eslint-plugin-boundaries'
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  eslintPluginPrettierRecommended,
  {
    extends: [js.configs.recommended, importPlugin.flatConfigs.recommended],
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: { boundaries, js, perfectionist },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_' },
      ],
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              allow: ['shared'],
              from: 'entities',
            },
            {
              allow: ['entities', 'shared'],
              from: 'features',
            },
            {
              allow: ['features', 'entities', 'shared'],
              from: 'widgets',
            },
            {
              allow: ['widgets', 'features', 'entities', 'shared'],
              from: 'pages',
            },
            {
              allow: ['pages', 'widgets', 'features', 'entities', 'shared'],
              from: 'app',
            },
          ],
        },
      ],
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              group: 'internal',
              pattern: '~/**',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
      'perfectionist/sort-array-includes': 'error',
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-modules': 'error',
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
      'perfectionist/sort-object-types': 'error',
      'perfectionist/sort-objects': 'error',
      'prettier/prettier': 'error',
    },
    settings: {
      'boundaries/elements': [
        { pattern: 'src/app/**', type: 'app' },
        { pattern: 'src/pages/**', type: 'pages' },
        { pattern: 'src/widgets/**', type: 'widgets' },
        { pattern: 'src/features/**', type: 'features' },
        { pattern: 'src/entities/**', type: 'entities' },
        { pattern: 'src/shared/**', type: 'shared' },
      ],
      'import/resolver': {
        typescript: true,
      },
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
])
