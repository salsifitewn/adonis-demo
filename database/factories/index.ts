import User from 'App/Models/User'
import Post from 'App/Models/Post'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const PostFactory = Factory.define(Post, ({ faker }) => {
  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
  }
}).build()

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    email: faker.internet.exampleEmail(),
    password: 'secret',
  }
}).build()
