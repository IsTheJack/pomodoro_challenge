var webpack = require('webpack');

var config = {
   entry: './main.js',

   devtool: 'source-map',

   debug: true,
    
   output: {
      path:'./',
      filename: 'index.js',
   },
    
   devServer: {
      inline: true,
      port: 3000
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         },
         { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
   }
};

module.exports = config;
