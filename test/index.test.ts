import {Server} from 'http'
import requires from 'supertest'
import app from '../src/app'

describe('application', () => {
  let server:Server

  beforeAll(async() => {
    server = app.listen()
  })

  afterAll(async() => {
    await server.close()
  })
})