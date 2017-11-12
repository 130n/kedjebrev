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
            {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.scss$/, loaders:['style-loader', 'css-loader', 'sass-loader']}
        ]
        // ,
        // rules: [{
        //     test: /\.scss$/,
        //     use: [{
        //         loader: "style-loader" // creates style nodes from JS strings
        //     }, {
        //         loader: "css-loader" // translates CSS into CommonJS
        //     }, {
        //         loader: "sass-loader" // compiles Sass to CSS
        //     }]
        // }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // plugins: [HtmlWebpackPluginConfig]
};
