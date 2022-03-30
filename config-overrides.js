module.exports = function override (config, env) {
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        "assert": require.resolve("assert"),
        "fs": false,
        "tls": false,
        "net": false,
        "http": require.resolve("stream-http"),
        "https": false,
        "zlib": false,
        "path": false,
        "stream": require.resolve("stream-browserify"),
        "util": false,
        "url": require.resolve("url"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify")
    }
    
    return config
}