import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import CreatePost from 'App/Validators/CreatePostValidator'
// import Database from '@ioc:Adonis/Lucid/Database'

// export default class PostsController {
//   public async show({ params }) {
//     return Database.from('posts').select('*').where('id', params.id).first()
//   }
// }

export default class PostsController {
  public async index({ response }: HttpContextContract) {
    return response.status(501)
  }
  public async update({ response }: HttpContextContract) {
    return response.status(501)
  }
  public async show({ response }: HttpContextContract) {
    return response.status(501)
  }
  public async destroy({ response }: HttpContextContract) {
    return response.status(501)
  }
  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreatePost)
    const post = await Post.create(payload)
    response.status(201).send(post)
  }
}
