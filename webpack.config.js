const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [new HtmlWebpackPlugin()],
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    devtool: 'inline-source-map'
}

module.exports = config