import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelteParser from 'svelte-eslint-parser';

const sharedLanguageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
};

export default [
  {
    ignores: [
      '.svelte-kit/**/*',
      'build/**/*',
      'dist/**/*',
      'node_modules/**/*',
      'coverage/**/*',
      '.cloudflare/**/*',
      '.output/**/*',
    ],
  },
  js.configs.recommended,
  prettier,
  {
    languageOptions: sharedLanguageOptions,
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: {
          ts: tsParser,
        },
        svelteConfig,
        ...sharedLanguageOptions,
      },
    },
    plugins: {
      svelte,
      '@typescript-eslint': ts,
    },
    rules: {
      ...svelte.configs.recommended[0].rules,
      ...svelte.configs.prettier[0].rules,
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ...sharedLanguageOptions,
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      ...ts.configs.recommended.rules,
      'no-undef': 'off',
    },
  },
];
