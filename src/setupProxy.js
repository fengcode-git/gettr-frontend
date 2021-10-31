
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://127.0.0.1:2000',
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
      pathRewrite: {
        '^/api': 'http://127.0.0.1:2000/api'
      }
    })
  )

  app.use(
    createProxyMiddleware('/uploads', {
      target: 'http://127.0.0.1:2000',
      changeOrigin: true, // needed for virtual hosted sites
      pathRewrite: {
        '^/uploads': 'http://127.0.0.1:2000/uploads'
      }
    })
  )

  app.use(
    createProxyMiddleware('/images', {
      target: 'http://127.0.0.1:2000',
      changeOrigin: true, // needed for virtual hosted sites
      pathRewrite: {
        '^/images': 'http://127.0.0.1:2000/images'
      }
    })
  )
};