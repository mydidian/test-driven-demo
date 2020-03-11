import app from './app'

app
  .listen(8080)
  .once('listening', () => console.log('Koa is listening on port 8080'))