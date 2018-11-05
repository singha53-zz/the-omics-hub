// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'react'
  ],
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/extensions': ['error', 'always', {
      js: 'never'
    }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js','.jsx']
      }
    },
  }
}
