import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

export default {
    entry: [
      './app/index.js'
    ],
    output: {
        path: __dirname +  '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: __dirname + '/app',
                exclude: /node_modules/,
                loaders: ['babel']
            }, {
                test: /\.scss$/,
                include: __dirname + '/app/styles',
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
      colors: true,
    },
    plugins: [
      HtmlWebpackPluginConfig
    ]
}
