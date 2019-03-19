const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: false,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  extends: [
    'standard',
  ],
  plugins: [
    'babel',
  ],
  rules: {
    'indent': OFF,
    'curly': WARN,
    'brace-style': [ERROR, '1tbs', {
      'allowSingleLine': true,
    }],

    'semi': [ERROR, 'always'],
    'semi-spacing': [ERROR, {
      'before': false,
      'after': true,
    }],
    'quotes': [ERROR, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true,
    }],
    'no-dupe-keys': ERROR,
    'comma-dangle': [ERROR, 'always-multiline'],
    'dot-location': [ERROR, 'property'],
    'dot-notation': [ERROR, {
      'allowKeywords': true,
    }],

    'eqeqeq': [ERROR, 'allow-null'],
    'no-eq-null': ERROR,
    'valid-typeof': [ERROR, {
      'requireStringLiterals': true,
    }],

    'no-console': OFF,
    'eol-last': ERROR,
    'no-empty': ERROR,
    'no-shadow': ERROR,
    'no-extra-boolean-cast': OFF,
    'no-inner-declarations': ERROR,
    'block-scoped-var': ERROR,
    'default-case': ERROR,
    'guard-for-in': ERROR,
    'no-caller': ERROR,
    'no-else-return': ERROR,

    'comma-spacing': [ERROR, {
      'before': false,
      'after': true,
    }],
    'key-spacing': [ERROR, {
      'beforeColon': false,
      'afterColon': true,
    }],
    'no-multiple-empty-lines': [ERROR, {
      'max': ERROR,
    }],
    'no-spaced-func': ERROR,
    'keyword-spacing': [ERROR, {
      'after': true,
      'before': true,
    }],
    'space-before-blocks': ERROR,
    'space-before-function-paren': [ERROR, {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'space-infix-ops': ERROR,
    'spaced-comment': [ERROR, 'always',  {
      'markers': ['global', 'eslint'],
    }],

    'no-unused-vars': WARN,
  },
};
