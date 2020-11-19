module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['airbnb-base'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        'indent': ['error', 4],
        'semi': ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'no-trailing-spaces': ['error', { ignoreComments: true }],
        'quote-props': ['error', 'consistent'],
        'func-names': ['error', 'never'],
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
        'arrow-parens': ['error', 'as-needed'],
        'no-undef': 'off',
        'array-callback-return': ['error', { allowImplicit: true }],
        'no-restricted-syntax': ['error', "BinaryExpression[operator='of']"],
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'import/no-unresolved': 'off',
        'no-continue': 'off',
        'no-use-before-define': 'off',
        'brace-style': ['error', 'stroustrup'],
        'linebreak-style': 'off',
        'no-restricted-globals': 'off',
        'arrow-body-style': 'off',
        'operator-linebreak': ['error', 'after'],
        'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
        // 由于本项目用于翻译，所以允许出现超长行
        'max-len': 'off'
    }
}
