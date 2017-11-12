// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: './index.html',
//     filename: './build.html',
//     inject: 'body'
// })

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: './dist',
        publicPath: '/resources/',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // plugins: [HtmlWebpackPluginConfig]
};
