const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        // filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,

        publicPath: '/',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(ico|svg|png|gif|jpg|jpeg|avif)$/,
                exclude: /fonts/,
                loader: 'file-loader',
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
            },
            {
                // test: /\.tsx?$/,
                test: /\.m?(ts|js)x?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@ui': path.resolve(__dirname, 'src/ui'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@models': path.resolve(__dirname, 'src/models'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        },
    },
}
