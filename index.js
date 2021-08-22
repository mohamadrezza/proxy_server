var express = require('express'),
    app = express(),
    {
        createProxyMiddleware
    } = require('http-proxy-middleware');

require('dotenv').config()

var port = process.env.PORT,
    host = process.env.HOST,
    api_url = process.env.API_SERVICE_URL

// Proxy endpoints
app.use('/reverse', createProxyMiddleware({
    target: api_url,
    changeOrigin: true,
    pathRewrite: {
        [`^/reverse`]: '',
    },
}));

app.listen(port, host, () => {
    console.log(`Starting Proxy at ${host}:${port}`);
});