import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tailwindcss from 'eslint-plugin-tailwindcss';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/.vercel/**',
      '**/.pnpm-store/**',
      '**/.pnpm/**',
      '**/.yarn/**',
      '**/.yarnrc.yml',
      '**/.yarnrc',
      '**/.yarn-integrity',
      '**/.yarn-metadata.json',
      '**/.yarn-tarball.tgz',
      '**/.yarnignore',
      '**/.yarnrc.yml',
      '**/.yarnrc',
      '**/.yarn-integrity',
      '**/.yarn-metadata.json',
      '**/.yarn-tarball.tgz',
      '**/.yarnignore',
      '**/.yarnrc.yml',
      '**/.yarnrc',
      '**/.yarn-integrity',
      '**/.yarn-metadata.json',
      '**/.yarn-tarball.tgz',
      '**/.yarnignore',
      '**/.yarnrc.yml',
      '**/.yarnrc',
      '**/.yarn-integrity',
      '**/.yarn-metadata.json',
      '**/.yarn-tarball.tgz',
      '**/.yarnignore',
      '**/.yarnrc.yml',
      '**/.yarnrc',
      '**/.yarn-integrity',
      '**/.yarn-metadata.json',
      '**/.yarn-tarball.tgz',
      '**/.yarnignore',
      '**/.yarnrc.yml',
      '**/.yarnrc',
      '**/.yarn-integrity',
      '**/.yarn-metadata.json',
      '**/.yarn-tarball.tgz',
      '**/.yarnignore',
      '**/.yarnrc.yml',
      '**/.yarnrc',
      '**/.yarn-integrity',
      '**/.yarn-metadata.json',
      '**/.yarn-tarball.tgz',
      '**/.yarnignore',
      '**/.yarnrc.yml',
      '**/.yarnrc',
      '**/.yarn-integrity',
      '**/.yarn-metadata.json',
      '**/.yarn-tarball.tgz',
      '**/.yarnignore',
      '**/.yarnrc.yml',
      '**/.yarnrc',
      '**/.yarn-integrity',
      '**/.yarn-metadata.json',
      '**/.yarn-tarball.tgz',
      '**/.yarnignore',
      '**/.yarnrc.yml',
      '**/.yarnrc',
      '**/.yarn-integrity',
      '**/.yarn-metadata.json',
      '**/.yarn-tarball.tgz',
      '**/.yarnignore',
      '**/.yarnrc.yml',
      '**/.yarnrc',
      '**/.yarn-integrity',
      '**/.yarn-metadata.json',
      '**/.yarn-tarball',
    ],
  },
  ...compat.extends('plugin:tailwindcss/recommended', 'prettier'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      tailwindcss,
    },

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      'tailwindcss/classnames-order': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  ...compat
    .extends(
      // "next/core-web-vitals",
      'plugin:@typescript-eslint/recommended',
      'plugin:tailwindcss/recommended',
      'prettier',
    )
    .map((config) => ({
      ...config,
      files: ['**/*.ts', '**/*.tsx'],
    })),
  {
    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: ['./tsconfig.json'],
        projectService: true,
        tsconfigRootDir:
          '/Users/harmoniccoder/Documents/HarmonicsTechnology/Chit/chit.web',
      },
    },
  },
];
