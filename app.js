const Koa = require('koa')
const Ctrl = require('koa-route');
const koaBody = require('koa-body');
const app = new Koa();
const AV = require('leanengine')

app.use(koaBody())
app.use(AV.koa())

app.use(Ctrl.get('/', async (ctx) => {
  ctx.body = await 'hello';
}))

module.exports = app