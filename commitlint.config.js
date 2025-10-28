module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
        parserOpts: {
            issuePrefixes: ['#'],
        },
    },
    rules: {
        // 'references-empty': [2, ''],
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
        ],
        'body-max-line-length': [2, 'always', 5000],
        'subject-empty': [2, 'never'],
    },
};
