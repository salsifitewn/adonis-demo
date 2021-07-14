import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database from '@ioc:Adonis/Lucid/Database'

// export default class PostsController {
//   public async show({ params }) {
//     return Database.from('posts').select('*').where('id', params.id).first()
//   }
// }

// import Post from 'App/Models/Post'
export default class PostsController {
  // public async show({ params }) {
  //   const post = await Post.find(1)
  //   return post
  // }

  public async store({ request, response }: HttpContextContract) {
    response.status(201).send(request.body())
  }
}
