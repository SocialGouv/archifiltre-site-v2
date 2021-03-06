const path = require('path');

const tsconfigPath = path.resolve(__dirname, './tsconfig.json');

/** @type {import("eslint").Linter.Config} */
const defaultConfig = {
    root: true,
    extends: ['next/core-web-vitals', 'prettier'],
    ignorePatterns: ['node_modules'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: tsconfigPath,
        sourceType: 'module',
    },
    plugins: [
        'prettier',
        '@typescript-eslint',
        'unused-imports',
        'typescript-sort-keys',
    ],
    reportUnusedDisableDirectives: true,
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'import/order': [
            'warn',
            {
                alphabetize: {
                    order: 'asc',
                },
            },
        ],
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                trailingComma: 'all',
                singleQuote: true,
                printWidth: 80,
                parser: 'typescript',
                arrowParens: 'avoid',
            },
        ],
    },
};

module.exports = defaultConfig;
