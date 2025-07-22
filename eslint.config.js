import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.js';
import svelteParser from 'svelte-eslint-parser';
import tsParser from '@typescript-eslint/parser';

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
      '**/*.ts', // Ignore TypeScript files since Bun handles them
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
          ts: tsParser, // Handle TypeScript in Svelte files
        },
        svelteConfig,
        ...sharedLanguageOptions,
      },
    },
    plugins: {
      svelte,
    },
    rules: {
      ...svelte.configs.recommended[0].rules,
      ...svelte.configs.prettier[0].rules,
      'no-undef': 'off',
    },
  },
];
