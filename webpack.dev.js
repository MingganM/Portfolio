const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {   
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}