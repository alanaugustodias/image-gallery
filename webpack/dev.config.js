const webpack = require('webpack');
const { sassLoaders, module: baseModule, plugins, ...baseConfig } = require('./base.config');
const path = require('path');

const devConfig = env => {
    const _environment = env?.environment || 'Mock'; // Default Environment
    const definePlugin = new webpack.DefinePlugin({
        __ENVIRONMENT__: JSON.stringify(_environment)
    });

    const styleLoader = [
        { loader: 'style-loader' },
        {
            loader: 'css-loader',
            options: { sourceMap: false }
        }
    ];

    const devModuleRules = [
        ...baseModule.rules,
        {
            test: /\.css$/,
            use: styleLoader
        },
        {
            test: /\.(sass|scss)$/,
            use: [
                ...styleLoader,
                ...sassLoaders,
            ]
        }
    ];

    return {
        ...baseConfig,
        mode: 'development',
        devtool: 'source-map',
        module: {
            ...baseModule,
            rules: devModuleRules,
        },
        plugins: [
            ...plugins,
            definePlugin,
        ],
        devServer: {
            contentBase: path.join(__dirname, '../dist'),
            port: 9000,
            open: true,
            hot: true,
            compress: true,
            stats: 'errors-only',
            overlay: true,
            progress: true,
            historyApiFallback: true,
            publicPath: '/',
        },
    };
};

module.exports = devConfig;
