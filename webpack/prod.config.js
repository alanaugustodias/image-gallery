const webpack = require('webpack');
const { sassLoaders, module, plugins, ...baseConfig } = require('./base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const prodConfig = env => {
    const _environment = env?.environment || 'Mock'; // Default Environment
    const definePlugin = new webpack.DefinePlugin({
        __ENVIRONMENT__: JSON.stringify(_environment)
    });

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: false
        }
    };

    const prodModuleRules = [
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, cssLoader]
        },
        {
            test: /\.(sass|scss)$/,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                cssLoader,
                ...sassLoaders,
            ]
        }
    ];

    return {
        ...baseConfig,
        mode: 'production',
        devtool: 'cheap-source-map',
        optimization: {
            minimizer: [new TerserWebpackPlugin()],
        },
        plugins: [
            ...plugins,
            definePlugin,
            new MiniCssExtractPlugin(),
        ],
        module: {
            ...module,
            rules: prodModuleRules,
        }
    };
};

module.exports = prodConfig;
