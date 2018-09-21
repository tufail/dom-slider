const path    = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
    'es-slider.js': './src/main.es6',
    'es-slider.min.js': './src/main.es6', 
    'css/style.css': './assets/scss/style.scss', 
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]',
    publicPath: "./dist/"
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: '/\.js$/',
        enforce: 'pre',
        exclude: '/node_modules/',
        use: {
          loader: 'eslint-loader',
          options: {
            configFile: __dirname + '/.eslintrc'
          },
        }
      }, 
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({ 
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, {loader:'sass-loader'}]
        })
      },
      {
        test: /\.html$/,
        use: [
          // apply multiple loaders and options
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              /* ... */
            }
          }
        ]
      }
    ]
  },
  
   watch    : true,
   devServer: {
   //  hot: true,
     contentBase: path.resolve(__dirname, "dist")
   },
   plugins  : [
     new BrowserSyncPlugin({ 
         host: 'localhost',
         port: 3000,
         files:['./dist/*.html'],
         server: { baseDir: ['dist'] }
       }),
     new ExtractTextPlugin({
      filename: '[name]',
      allChunks: true
    }),
   ]

};