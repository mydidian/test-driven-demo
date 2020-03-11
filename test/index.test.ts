import {Server} from 'http'
import requires from 'supertest'
import app from '../src/app'

describe('application', () => {
  let server:Server

  beforeAll(async() => {
    server = app.listen()
  })

  it('should return todos', async(done) => {
    await requires(server)
      .get('/todo')
      .expect(200)
      .expect({todos:[]})

    done()
  })

  it('should add todo', async(done) => {
    await requires(server)
      .post('/todo/add')
      .send({message:'hello'})
      .expect(200)
    await requires(server)
      .get('/todo')
      .expect(200)
      .expect({todos:[{message:'hello', done: false}]})

      done()
  })

  afterAll(async() => {
    await server.close()
  })
})