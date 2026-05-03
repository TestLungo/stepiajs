import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import eslintts from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    ignores: ['node_modules', '**/node_modules/**', '**/*.js', '**/*.mjs', '**/*.d.ts'],
  },
  eslint.configs.recommended,
  ...eslintts.configs.recommended,
  ...eslintts.configs.recommendedTypeChecked,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'module',
      parser: eslintts.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      /** Error */
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/await-thenable': 'error',

      /** Warn */
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/array-type': ['warn', { default: 'array' }],
      '@typescript-eslint/type-annotation-spacing': 'warn',
    },
  },
  eslintConfigPrettier,
]);
