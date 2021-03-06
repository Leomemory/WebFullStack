'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    // proxy: {
    //   "/api": {
    //       target: "http://127.0.0.1:3000/", 
    //       changOrigin: true
    //   }
    // },
    before(app) {
      // 模拟后台服务器express
      app.get("/api/login", function(req, res) {
        const { username, passwd } = req.query;
        console.log(username, passwd);

        if (username == "lijiang" && passwd == "123") {
          res.json({ code: 1, token: "jilei" });
        } else {
          res.status(401).json({ code: 0, message: "用户名或者密码错误" });
        }
      });

      // 保护接口中间件
      function auth(req, res, next) {
        if (req.headers.authorization) {
          // 已认证
          next()
        } else {
          // 用户未授权
          res.sendStatus(401)
        }
      }
      
      // 获取登录用户信息
      app.get("/api/userinfo", auth, function(req, res) {
        res.json({ code: 1, data: { name: "leo", age: 20 } });
      });

      app.get("/api/goods", function(req, res) {
        res.json({
          code: 1,
          slider: [
            {
              id: 21,
              img: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1940742.jpg?max_age=2592000"
            },
            {
              id: 22,
              img: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1940348.jpg?max_age=2592000"
            },
            {
              id: 23,
              img: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1937356.jpg?max_age=2592000"
            },
            {
              id: 24,
              img: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1938709.jpg?max_age=2592000"
            }
          ],
          data: {
            fe: [
              {
                id: 1,
                title: "Vue2.x实战",
                price: "100",
                img: "./assets/img/01.jpg",
                count: 100
              },
              {
                id: 2,
                title: "React16.x实战",
                price: "120",
                img: "./assets/img/03.jpg",
                count: 100
              },
              {
                id: 3,
                title: "nodejs实战",
                price: "80",
                img: "./assets/img/02.jpg",
                count: 100
              },
              {
                id: 4,
                title: "前端工程化",
                price: "110",
                img: "./assets/img/04.jpg",
                count: 100
              },
              {
                id: 5,
                title: "面试",
                price: "200",
                img: "./assets/img/02.jpg",
                count: 100
              },
              {
                id: 6,
                title: "前端安全",
                price: "30",
                img: "./assets/img/05.jpg",
                count: 100
              }
            ],
            python: [
              {
                id: 7,
                title: "Python基础语法",
                price: "120",
                img: "/img/03.jpg",
                count: 101
              },
              {
                id: 8,
                title: "Flask实战",
                price: "80",
                img: "/img/02.jpg",
                count: 100
              },
              {
                id: 9,
                title: "Django实战",
                price: "110",
                img: "/img/01.jpg",
                count: 100
              },
              {
                id: 10,
                title: "Python语法进阶",
                price: "200",
                img: "/img/04.jpg",
                count: 100
              }
            ],
            java: [
              {
                id: 11,
                title: "java入门实战",
                price: "80",
                img: "/img/02.jpg",
                count: 100
              },
              {
                id: 12,
                title: "spring boot实战",
                price: "110",
                img: "/img/01.jpg",
                count: 100
              },
              {
                id: 13,
                title: "Java高并发",
                price: "30",
                img: "/img/04.jpg",
                count: 100
              }
            ],
            bigdata: [
              {
                id: 14,
                title: "大数据实战",
                price: "200",
                img: "/img/01.jpg",
                count: 100
              },
              {
                id: 15,
                title: "Hadoop实战",
                price: "120",
                img: "/img/03.jpg",
                count: 100
              },
              {
                id: 16,
                title: "Kafka平台",
                price: "80",
                img: "/img/02.jpg",
                count: 100
              }
            ],
            ai: [
              {
                id: 17,
                title: "算法实战",
                price: "100",
                img: "/img/01.jpg",
                count: 100
              },
              {
                id: 18,
                title: "个性化推荐",
                price: "120",
                img: "/img/03.jpg",
                count: 100
              },
              {
                id: 19,
                title: "机器学习",
                price: "80",
                img: "/img/02.jpg",
                count: 100
              },
              {
                id: 20,
                title: "AI实战",
                price: "110",
                img: "/img/05.jpg",
                count: 100
              }
            ]
          },
          keys: ["fe", "python", "java", "bigdata", "ai"]
        });
      });
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
