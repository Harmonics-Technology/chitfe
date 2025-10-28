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
        'subject-empty': [2, 'never'],
    },
};
