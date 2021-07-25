import test, { group } from 'japa'
import supertest from 'supertest'
import { PostFactory, UserFactory } from 'Database/factories'
import Post from 'App/Models/Post'
import faker from 'faker'
const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Post Controller', (group) => {
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

  test('should create a post', async (assert) => {
    // Given
    const post = { title: faker.lorem.sentence(), description: faker.lorem.paragraph() }
    // When
    const response = await supertest(BASE_URL)
      .post('/api/posts')
      // .auth(email, password)
      .send(post)
      .set('Authorization', 'bearer ' + token)
      .set('Accept', 'application/json')
      // Then
      .expect(201)
      .expect('Content-Type', /json/)
    assert.equal(post.title, response.body.title)
  })

  test('should not create a post', async (assert) => {
    // Given
    const post = { title: faker.datatype.number(), description: faker.lorem.paragraph() }
    // When
    const response = await supertest(BASE_URL)
      .post('/api/posts')
      .send(post)
      .set('Authorization', 'bearer ' + token)
      .set('Accept', 'application/json')
      // Then
      .expect(422)
    assert.deepEqual(response.body.errors, [
      {
        rule: 'string',
        field: 'title',
        message: 'The title is not a string',
      },
    ])
  })

  test('should list posts', async (assert) => {
    // Given
    const oldPostCount = (await Post.all()).length
    let postCount = 10
    const posts = await PostFactory.createMany(postCount)
    // post.save()
    const actualPostCount = (await Post.all()).length

    // tests not independent: how to reset database?
    assert.notEqual(actualPostCount, oldPostCount)
    // When
    if (posts) {
      const response = await supertest(BASE_URL)
        .get('/api/v1/posts')
        // .set('Authorization', 'bearer ' + token)
        .set('Accept', 'application/json')
        // Then
        .expect(200)
        .expect('Content-Type', /json/)
      assert.equal(response.body.length, actualPostCount)
      assert.exists(response.body[0].title)
    }
  })
})
