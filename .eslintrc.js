  module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/vue3-recommended',
      //'eslint:recommended'
    ],
    rules: {
      //'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-console': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
  