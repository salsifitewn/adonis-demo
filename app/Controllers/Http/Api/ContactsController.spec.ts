import { UserFactory } from 'Database/factories'
import test, { group } from 'japa'
import supertest from 'supertest'
const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

const payload = {
  email: 'Hlier.Berger@example.org',
  address: '68589 Abelin Saint-Honoré',
  zipCode: '12234',
  city: 'New Frédéric',
  phone: '+33 589410877',
  type: 'natural',
  firstName: 'Rebecca',
  lastName: 'Morel',
}

test.group('Contacts Controller', (group) => {
  const password = 'secret'
  let email
  let token
  group.before(async () => {
    // https://stackoverflow.com/questions/57008099/using-destructuring-assign-vaules-to-already-defined-varibales
    ;({ email } = await UserFactory.merge({ password }).create())

    const response = await supertest(BASE_URL)
      .post('/api/login')
      .send(`email=${email}&password=${password}`)
    token = response.body.token
  })

  test.only('should not create a contact with wrong zip code', async (assert) => {
    // Given
    const wrongPayload = {
      ...payload,
      zipCode: 'a12234',
    }
    // When
    const response = await supertest(BASE_URL)
      .post('/api/contacts')
      // .auth(email, password)
      .send(wrongPayload)
      .set('Authorization', 'bearer ' + token)
      .set('Accept', 'application/json')
      // Then
      .expect(422)
      .expect('Content-Type', /json/)
    assert.isArray(response.body.errors)
    response.body.errors.map((el) => assert.containsAllKeys(el, ['rule', 'field', 'message']))
  })

})
