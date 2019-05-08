const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    watch: false,
    mode: 'development',
    entry: {},
    output: {
        filename: '[name].js',
        publicPath: './'
    },
    resolve: {
        alias: {
            tpl: path.resolve(__dirname, 'views/template/')
        }
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                  ie8: true
                }
            })
        ]
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(jpg|png|gif)$/i,
                loader: "file-loader"
            },
            {
                test: /\.png$/,
                use: ["url-loader?mimetype=image/png"]
            },
            {
                test: /\.(art|html)$/i,
                loader: "art-template-loader",
                options: {}
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
