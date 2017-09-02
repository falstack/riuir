const resolve = require('path').resolve

export const isVueRule = (rule) => {
  return rule.test.toString() === '/\\.vue$/'
}

export const isSASSRule = (rule) => {
  return ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1
}

export const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      resolve(__dirname, '../assets/css/variables.scss'),
      resolve(__dirname, '../assets/css/mixins.scss')
    ]
  }
}
