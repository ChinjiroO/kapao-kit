import { defineConfig } from 'eslint/config'
import eslintPlugin from '@eslint/js'
import { configs as tseslintConfigs } from 'typescript-eslint'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'

const ignoresConfig = defineConfig([
    {
        name: 'project/ignores',
        ignores: [
            '.next/',
            'node_modules/',
            'public/',
            'next-env.d.ts',
        ],
    },
])

const eslintConfig = defineConfig([
    {
        name: 'project/javascript-recommended',
        files: ['**/*.{js,mjs,ts,tsx}'],
        ...eslintPlugin.configs.recommended,
    },
])

const typescriptConfig = defineConfig([
    {
        name: 'project/typescript-strict',
        files: ['**/*.{ts,tsx,mjs}'],
        extends: [
            ...tseslintConfigs.strictTypeChecked,
            ...tseslintConfigs.stylisticTypeChecked,
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: { jsx: true },
            },
        },
        rules: {
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
            '@typescript-eslint/unified-signatures': 'off',
        },
    },
    {
        name: 'project/javascript-disable-type-check',
        files: ['**/*.{js,mjs,cjs}'],
        ...tseslintConfigs.disableTypeChecked,
    },
    {
        name: 'project/config-files-unsafe-off',
        files: ['*.config.{ts,mjs,js}'],
        rules: {
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
        },
    },
])

const reactConfig = defineConfig([
    {
        name: 'project/react-next',
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            'react-hooks': reactHooksPlugin,
            '@next/next': nextPlugin,
        },
        rules: {
            ...reactHooksPlugin.configs['recommended-latest'].rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
        },
    },
])

export default defineConfig([
    ...ignoresConfig,
    ...eslintConfig,
    ...typescriptConfig,
    ...reactConfig,
])
