const path = require('path');
const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const i18n = require('marmoym-i18n');

const createServer = require('./createServer');
const getWebpackConfig = require('../../internals/webpack/getWebpackConfig');
const webpackConfig = require(getWebpackConfig(process.env.PLATFORM, process.env.NODE_ENV));

const DIST_PATH = path.resolve(__dirname, '../../dist');

const webpackCompiler = webpack(webpackConfig);

module.exports = createServer((app) => {
  app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      color: true,
    },
  }));
  
  app.use(webpackHotMiddleware(webpackCompiler, {
    heartbeat: 2000,
  }));

  // app.get('/ss/i18n/:locale', function(req, res) {
  //   console.log('Returning i18n %s', req.params.locale);
  //   const result = {
  //     code: 200000,
  //     payload: {
  //       locale: i18n[req.params.locale],
  //     },
  //   };
  
  //   // todo: validation
  //   res.status(200)
  //     .send(result);
  // });

  app.use('*', (req, res, next) => {
    var filename = path.resolve(webpackCompiler.outputPath, 'index.html');
    webpackCompiler.outputFileSystem.readFile(filename, function (err, result) {
      if (err) {
        console.log('Most likely the compilation did not succeed');
        throw new Error(err);
      }
      
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });  
});
