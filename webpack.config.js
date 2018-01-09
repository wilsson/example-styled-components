const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        app: "./src/entry.tsx",
        vendor: ['react', 'react-dom'],
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
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.tsx?/,
                loader: 'stylelint-custom-processor-loader'
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
}
