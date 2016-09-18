var webpack = require('webpack');
//requires files from a directory recursively
var path = require('path');

module.exports = {
  //gives line-numbers for debugging errors
  devtool: 'inline-source-map',

  entry: [
    //url for webpack-dev server
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    //for hot-reloading / live-reloading
    'webpack/hot/only-dev-server',
    //webpack will search this folder for files to run
    './src'
  ],

  //for production --> where webpack would output our files
  output: {
    path: path.join(__dirname, 'public'),
    //the outputFileName
    filename: 'bundle.js'
  },

  //where webpack will look for files to bundle-together
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    //the type of files webpack should expect
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      //only need one loader because webpack only need read .js files
      {
        //the ? allows both js and jsx files
        test: /\.jsx?$/,
        exclude: /node_modules/,
        //modules we install to help load our app
        loaders: ['babel?presets[]=react,presets[]=es2015']
      }
    ]
  },

  plugins: [
    //has to do with hot-reloading / live-reloading
    new webpack.HotModuleReplacementPlugin(),
    //will not allow webpack to compile IF errors are detected
    new webpack.NoErrorsPlugin()
  ]
};