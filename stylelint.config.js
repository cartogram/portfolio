/** @type {import('stylelint').Config} */
export default {
  extends: ['@efficientcss/stylelint-config-ecss'],
  ignoreFiles: ['dist/**', '.astro/**', 'node_modules/**'],
  rules: {
    'ecss/padding-constraints': null,
    // The ecss structural conventions below don't match how this site is organised
    // (shared global stylesheets, layout components that own their size and
    // spacing, nested child selectors), so they're off. Validity, specificity of
    // new code, !important and commented-out code are still checked.
    'ecss/selector-filename': null,
    'ecss/component-dimensions': null,
    'ecss/component-outside': null,
    'ecss/width-100p': null,
    'ecss/class-child-prefix': null,
    'ecss/class-combined-prefix': null,
    'ecss/content-padding': null,
    'ecss/align-display': null,
    'ecss/flex-prop': null,
    'ecss/flex-shorthand': null,
    'ecss/overflow-hidden': null,
    'ecss/position-sensitive': null,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': null,
    'unit-disallowed-list': null,
  },
}
