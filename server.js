const Koa = require('koa')
const cors = require('@koa/cors')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(cors())

router.get('/v1', async ctx => {
  ctx.body = 'v1 data'
})

router.get('/v2', async ctx => {
  ctx.body = 'v2 data'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(233, () => {
  console.log('server is running at port 233')
})
