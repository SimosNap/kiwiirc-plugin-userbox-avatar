const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const makeSourceMap = process.argv.indexOf('--srcmap') > -1;

module.exports = {
    mode: 'production',
    entry: './src/plugin.js',
    output: {
        filename: 'plugin-userbox-avatar.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: [{loader: 'exports-loader'}, {loader: 'babel-loader'}],
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, './node_modules/ip-regex/'),
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: [ 'vue-style-loader', 'css-loader', 'less-loader' ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devtool: makeSourceMap ? 'source-map' : '',
    devServer: {
        filename: 'plugin-userbox-avatar.js',
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};

