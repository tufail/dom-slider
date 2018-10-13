const path    = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {

  entry: {
    'es-slider.js': './src/main.js',
    'es-slider.min.js': './src/main.js', 
    'css/style.css': './assets/scss/style.scss', 
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]',
    publicPath: "./dist/"
  },
  
  module: {
    rules: [{

          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
          }
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          // fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, {loader:'sass-loader'}]
        })
      },
      // {
      //     test: /\.(scss|css)$/,
      //     use:['style-loader','css-loader', 'sass-loader']
      //  },
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

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    extensions: [".js", ".es6",".json", ".jsx", ".css"]
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