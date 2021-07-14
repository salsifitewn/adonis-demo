import test from 'japa'
import supertest from 'supertest'
import { PostFactory } from 'database/factories'
import Post from 'app/Models/Post'
const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Post Controller', () => {
  test('should create a post', async (assert) => {
    // Given
    const post = { id: 1 }
    // When
    await supertest(BASE_URL)
      .post('/api/posts')
      .send(post)
      .set('Accept', 'application/json')
      // Then
      .expect(201, { id: 1 })
      .expect('Content-Type', /json/)
  })
  // test('should show a post', async (assert) => {
  //   // Given
  //   const post = await PostFactory.create()
  //   // post.save()
  //   const savedPost = await Post.find(1)
  //   assert.exists(savedPost)
  //   // When
  //   if (savedPost) {
  //     await supertest(BASE_URL)
  //       .post('/api/v1/posts')
  //       .send(post.toJSON())
  //       .set('Accept', 'application/json')
  //       // Then
  //       .expect(201, savedPost.toJSON())
  //       .expect('Content-Type', /json/)
  //   }
  // })
})
