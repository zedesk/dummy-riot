'use strict';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let extractHTML = new ExtractTextPlugin('index.html');

export default {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        extractHTML
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.tag$/,
                loader: 'riotjs',
                exclude: /node_modules/,
                query: { type: 'babel' }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: extractHTML.extract('html')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.tag']
    },
    devServer: {
        contentBase: 'dist',
        port: 1337,
        hot: true,
        inline: true
    }
}
