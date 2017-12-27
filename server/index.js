import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import * as leanengine from "leanengine";
import * as leanstorage from "leancloud-storage";

async function start() {
  leanengine.init({
    appId: process.env.LEANCLOUD_APP_ID,
    appKey: process.env.LEANCLOUD_APP_KEY,
    masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
  })

  const app = new Koa()
  const host = process.env.HOST || '0.0.0.0' || '127.0.0.1'
  const port = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000)

  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await new Builder(nuxt).build()
  }

  app.use(leanengine.koa())
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

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

  const TestObject = leanstorage.Object.extend('TestObject');
  const testObject = new TestObject();
  await testObject.save({ words: 'Hello World!' });
  console.log('LeanCloud Rocks!');
}

start()