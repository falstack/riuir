module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
    'transform-async-to-generator'
  ],
  // add your custom rules here
  rules: {},
  globals: {}
}
