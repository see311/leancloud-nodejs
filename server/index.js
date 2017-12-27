import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import * as AV from "leanengine";

async function start() {
  AV.init({
    appId: process.env.LEANCLOUD_APP_ID,
    appKey: process.env.LEANCLOUD_APP_KEY,
    masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
  })

  const app = new Koa()
  const port = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000)

  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(AV.koa2())
  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, err => {
    console.log('Node app is running on port:', port);

    // 注册全局未捕获异常处理器
    process.on('uncaughtException', function (err) {
      console.error('Caught exception:', err.stack);
    });
    process.on('unhandledRejection', function (reason, p) {
      console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason.stack);
    });
  })
}

start()