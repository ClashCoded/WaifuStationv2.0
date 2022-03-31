const webpack = require("webpack")

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.resolve.fallback = {
        "assert": require.resolve("assert"),
        "fs": false,
        "tls": false,
        "net": false,
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "zlib": false,
        "path": false,
        "buffer": require.resolve("buffer"),
        "stream": require.resolve("stream-browserify"),
        "util": false,
        "url": require.resolve("url"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify")
    }
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
    ]
    
    config.ignoreWarnings = [/Failed to parse source map/]
    
    return config
}