var path = require("path");

var PATHS = {
    app: path.resolve(__dirname,'app'),
    build: path.resolve(__dirname,'build')
};


module.exports = {
  entry: {
    app: PATHS.app + "/index.js"
  } ,

  output: {
    path: PATHS.build,
    filename: "bundle.js"
  },
  devServer: {
    host: '127.0.0.1',
    port: 80,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader','css-loader']
      },
      {
        test: /\.js?/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          presets:['env','react']
        }
      },
      {
        test: /\.png$/,
        use: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        use: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader? limit=10000&mimetype=application/font-woff'
      },
       {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
       },
       {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
       },
       {
         test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
         use: 'url-loader?limit=10000&mimetype=image/svg+xml'
       }
    ]
  },

};