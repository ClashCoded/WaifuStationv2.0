module.exports = function override (config, env) {
    const fallback = config.resolve.fallback || {};
    console.log('override')
    // let loaders = config.resolve
    // loaders.fallback = 
    Object.assign(fallback, {
        "assert": require.resolve("assert"),
        "fs": false,
        "tls": false,
        "net": false,
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "zlib": false,
        "path": false,
        "stream": require.resolve("stream-browserify"),
        "util": false,
        "url": require.resolve("url"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify")
    })
    
    config.ignoreWarnings = [/Failed to parse source map/]

    config.resolve.fallback = fallback;
    
    return config
}