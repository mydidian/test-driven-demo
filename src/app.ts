import Koa from 'koa'
import KoaBodyParser from 'koa-bodyparser'
import KoaRouter from 'koa-router'

const app = new Koa()
const router = new KoaRouter()

let todos:{message:string, done:boolean}[] = []
router.get('/todo', async(context, next) => {
  context.body = {todos}
  next()
})
router.post('/todo/add', async(context, next) => {
  const body = context.request.body
  todos = [...todos, {message:body.message, done:false}]
  context.body = {todos}
  next()
})

app
  .use(KoaBodyParser())
  .use(router.routes())

export default app