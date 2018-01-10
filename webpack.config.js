const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: "./src/entry.tsx",
        vendor: [
            'react',
            'react-dom',
            'styled-components'
        ],
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        watchContentBase: true
    },
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".json"
        ]
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                use: [
                    'awesome-typescript-loader',
                    'stylelint-custom-processor-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}
