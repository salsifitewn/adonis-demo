import test, { group } from 'japa'
import supertest from 'supertest'
import { PostFactory, UserFactory } from 'Database/factories'
import Logger from '@ioc:Adonis/Core/Logger'
import Config from '@ioc:Adonis/Core/Config'

import User from 'App/Models/User'
const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Auth Controller', () => {
  test('should return a valid token', async (assert) => {
    // Given
    const password = 'secret'
    const { email } = await UserFactory.merge({ password }).create()
    // console.log(Config.get('app.apiLatest'))

    // When
    const response = await supertest(BASE_URL)
      .post('/api/login')
      .send(`email=${email}&password=${password}`)
      // .set('Content-Type', 'application/x-www-form-urlencoded')
      // Then
      .expect(200)

    assert.isDefined(response.body.token)
  })
})
