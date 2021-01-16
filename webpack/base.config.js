const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootFolder = '../src';
const sassLoaders = [
    {
        loader: 'sass-loader'
    },
    {
        loader: 'sass-resources-loader',
        options: {
            resources: [
                path.resolve(__dirname, rootFolder, 'styles/_variables.scss'),
                path.resolve(__dirname, rootFolder, 'styles/_mixins.scss')
            ]
        }
    }
];

const baseConfig = {
    entry: path.resolve(__dirname, rootFolder, 'index.tsx'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@app/actions': path.resolve(__dirname, rootFolder, 'actions/index.tsx'),
            '@app/components': path.resolve(__dirname, rootFolder, 'components/index.tsx'),
            '@app/constants': path.resolve(__dirname, rootFolder, 'constants/index.tsx'),
            '@app/containers': path.resolve(__dirname, rootFolder, 'containers/index.tsx'),
            '@app/enums': path.resolve(__dirname, rootFolder, 'enums/index.tsx'),
            '@app/helper': path.resolve(__dirname, rootFolder, 'helper/index.tsx'),
            '@app/hooks': path.resolve(__dirname, rootFolder, 'hooks/index.tsx'),
            '@app/interfaces': path.resolve(__dirname, rootFolder, 'interfaces/index.tsx'),
            '@app/reducers': path.resolve(__dirname, rootFolder, 'reducers/index.tsx'),
            '@app/routes': path.resolve(__dirname, rootFolder, 'routes/index.tsx'),
            '@app/services': path.resolve(__dirname, rootFolder, 'services/index.tsx'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g)$/,
                exclude: /node_modules/,
                use: 'file-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, rootFolder, 'index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
    ],
};

module.exports = { ...baseConfig, sassLoaders };
