module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    lintOnSave: false,
    productionSourceMap: false,
    css: {
        sourceMap: true
    },
    devServer: {
        // 端口配置
        port: 7001,
    }
}