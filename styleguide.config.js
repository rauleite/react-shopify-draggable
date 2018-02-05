const fs = require('fs')
const path = require('path')

module.exports = {
  // components: 'src/lib/components/**/[A-Z]*.js',
  sections: [
    {
      name: 'Demo',
      // content: 'docs/MyConteiner.md',
      components: 'src/demo/MyConteiner.js'
    }
  ],
  // defaultExample: true,
  updateExample: function(props, exampleFilePath) {
    const { settings, lang } = props
    if (typeof settings.file === 'string') {
      const filepath = path.resolve(__dirname, settings.file)
      delete settings.file
      // from '../lib' // 'react-shopify-draggable'

      props.content = fs
        .readFileSync(filepath, 'utf8')
        .replace(/from\s\'\.\.\/lib\'/, "from 'react-shopify-draggable'")
    }
    return props
  },
  title: 'React Shopify Draggable',
  verbose: false,
  // highlightTheme: 'oceanic-next',
  // editorConfig: {
  //   theme: 'oceanic-next'
  // },
  // webpackConfig: require('./config/webpack.config.dev.js'),
  webpackConfig: {
    module: {
      // resolve: {
      //   extensions: ['.es6']
      // },
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    }
  }
}
