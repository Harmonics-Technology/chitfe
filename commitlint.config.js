module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
        ],
        'subject-case': [2, 'always', 'sentence-case'],
        'header-pattern': [2, 'always', /^(\w+)\(#\d+\): .+$/],
        'header-match-team': [2, 'always', ['type', 'ticket', 'subject']],
        'subject-empty': [2, 'never'],
    },
};
