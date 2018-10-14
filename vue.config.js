module.exports = {
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8081,
    https: false,
    hotOnly: false
    // proxy: {
    //     '/music-collection': {
    //         target: 'http://songbox.house',
    //         changeOrigin: true,
    //         ws: true,
    //         secure: false
    //     }
    // }
    // proxy: 'http://songbox.house'
  }
};
