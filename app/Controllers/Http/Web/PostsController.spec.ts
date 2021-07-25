import test from 'japa'
import { JSDOM } from 'jsdom'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

// test.group('Post Constroller', () => {
//   test('should', async (assert) => {
//     // Given
//     const post = { id: 1 }
//     // When
//     await supertest(BASE_URL)
//       .post('api/posts')
//       .send(post)
//       // Then
//       .expect(201, { id: 1 })
//       .expect('Content-Type', /json/)

//     //   const { document } = new JSDOM(text).window
//     //   const title = document.querySelector('.title')
//     //   assert.exists(title)
//     //   assert.equal(
//     //     title!.textContent!.trim(),
//     //     'Congratulations, you have just created your first AdonisJS app.'
//     //   )
//   })
// })
