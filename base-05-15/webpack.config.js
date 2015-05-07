'use strict';

var webpack = require('webpack'),
  path = require('path'),
  bourbon = require('node-bourbon').includePaths;

var paths = {
  app: __dirname + '/app',
  bower: __dirname + '/app/bower_components'
};

module.exports = {
  context: paths.app,
  entry: {
    app: ['webpack/hot/dev-server', './core/bootstrap.js']
  },
  output: {
    path: paths.app,
    filename: 'bundle.js'
  },
  //stats: {
  //	colors: true,
  //	reasons: true
  //},
  devtool: 'source-map',
  debug: true,
  stats: {
    colors: true,
    reasons: true
  },


  resolve: {
    root: paths.app,
    extensions: ['', '.js'], //, '.ts'
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel!jshint',
        exclude: /node_modules|dist|bower_components/
      }, {
        // waiting on 1.5 release
      //  test: /\.ts$/,
      //  loader: 'awesome-typescript'
      //}, {
        test: /\.html$/,
        loader: 'raw'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass?includePaths[]=" + bourbon'
      }, {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=res/[name].[ext]?[hash]'
      }
    ]
  },

  noParse: [
    '../node_modules',
    paths.bower + '/*'
  ],
  postcss: [
    require('postcss-nested'),
    require('autoprefixer-core'),
    require('csswring')
  ],
  plugins: [
    new webpack.DefinePlugin({
      MODE: {
        test: process.env.NODE_ENV === 'test',
        production: process.env.NODE_ENV === 'production'
      }
    })
  ]
};
