const fs = require('fs')
const path = require('path')
require('dotenv').config()

module.exports = {
  // components: 'src/demo/components/**/[A-Z]*.js',
  sections: [
    {
      name: 'Demo',
      // content: 'docs/MyConteiner.md',
      // components: 'src/demo/demo/MyDraggable/index.js'
      components: () => [
        path.resolve(process.env.PATH_MY_DRAGGABLE + 'index.js'),
        path.resolve(process.env.PATH_MY_DROPPABLE + 'index.js')
      ]
      // components: 'src/demo/demo/**/*.js'
    }
    // {
    //   name: 'Droppable Demo',
    //   // content: 'docs/MyConteiner.md',
    //   components: 'src/demo/demo/MyDroppable/index.js'
    // }
  ],
  // styleguideComponents: {
  //   MyDraggable: path.join(__dirname, 'src/demo/demo/MyDraggable/index.js')
  // },
  verbose: true,
  updateExample: function(props, exampleFilePath) {
    const { settings, lang } = props
    if (typeof settings.file === 'string') {
      const filepath = path.resolve(__dirname, settings.file)

      const fileNameInTheFirstLine = '// '
        // Sem primeiro / ou ./
        .concat(settings.file.replace(/^\.?\//, ''))
        .concat('\n')

      let firstValidLine = true
      props.content = fs
        .readFileSync(filepath, 'utf8')
        // Linha a linha
        .split('\n')
        .reduce((total, line, index, arr) => {
          // EOF
          if (index === arr.length - 1 && line === '') return total
          // Tira linha @flow
          if (firstValidLine && line.match(/^[\s]*(\/\/|\/\*).\s*@flow/)) return total
          // Não bate mais, após definir primeira linha válida
          if (firstValidLine && !line.match(/\/|\*/)) firstValidLine = false
          return total + '\n' + line
        }, fileNameInTheFirstLine)
        // Substitui from ../../lib do import pelo nome da lib
        .replace(/from\s\'\.\.\/.*lib\'/, "from 'react-shopify-draggable'")

      delete settings.file
    }
    return props
  },
  title: 'React Shopify Draggable',
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
