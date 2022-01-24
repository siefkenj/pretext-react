const util = require("util");

module.exports = function override(config, env) {
    // prevent chunking for all files
    Object.assign(config.optimization, {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                default: false,
            },
        },
    });

    // prevent hashes for the JS files
    Object.assign(config.output, { filename: "static/js/[name].js" });

    // prevent hashes for the CSS files
    // search for the "MiniCssExtractPlugin" so we can remove the hashing in the filename
    for (const plugin of config.plugins) {
        if (!plugin || !plugin.constructor) {
            // do nothing if the plugin is null
            continue;
        }
        if (plugin.constructor.name === "MiniCssExtractPlugin") {
            Object.assign(plugin.options, {
                filename: "static/css/[name].css",
            });
            delete plugin.options.chunkFilename;
        }
    }

    // minimize only the .min.js files
    for (const plugin of config.optimization.minimizer) {
        if (!plugin || !plugin.constructor) {
            // do nothing if the plugin is null
            continue;
        }
        if (plugin.constructor.name === "TerserPlugin") {
            Object.assign(plugin.options, { include: /\.min\.js$/ });
        }
        if (plugin.constructor.name === "OptimizeCssAssetsWebpackPlugin") {
            Object.assign(plugin.options, { assetNameRegExp: /\.min\.css$/ });
        }
    }

    // Make a globalThis shim to prevent webpack code from erroring when run in dev mode
    config.output.globalObject = `(function() {
        if (typeof globalThis === 'object') return globalThis;
        Object.defineProperty(Object.prototype, '__magic__', {
            get: function() {
                return this;
            },
            configurable: true
        });
        __magic__.globalThis = __magic__; // lolwat
        delete Object.prototype.__magic__;
        return globalThis
    }())`;
    
    // Disable chunking of JS builds. We want it all in one file.
    config.optimization.splitChunks = {
        cacheGroups: {
            default: false
         }
    }

    return config;
};
