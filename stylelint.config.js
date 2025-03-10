/** @type {import('stylelint').Config} */
export default {
  extends: ['@efficientcss/stylelint-config-ecss'],
  rules: {
    'ecss/padding-constraints': null,
    'ecss/selector-filename': [
      true,
      {
        ignoreFiles: [
          'quarantine.css',
          'main.css',
          'base.css',
          'reset.css',
          'general.css',
          'variables.css',
          'theme.css',
          '/style/',
          'typography.css',
        ],
      },
    ],
  },
}
