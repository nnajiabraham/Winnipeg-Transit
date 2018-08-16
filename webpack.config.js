const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: path.join(__dirname, 'public/scripts/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options:{
                    presets: ['react', 'env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}