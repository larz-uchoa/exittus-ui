const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'client_build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })

    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modolues/,
                use: 'babel-loader',
            },
        ]
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    devServer: {
        port: '3000',
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        open: true,
        hot: true,
        liveReload: true,
        proxy:{
            '/api': {
                target: 'hattp://localhost:3333',
                secure: false,
            }
        }
    },
}