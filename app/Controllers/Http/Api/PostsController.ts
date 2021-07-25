import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import CreatePost from 'App/Validators/CreatePostValidator'
import UpdatePost from 'App/Validators/UpdatePostValidator'
import Logger from '@ioc:Adonis/Core/Logger'

// import Database from '@ioc:Adonis/Lucid/Database'

// export default class PostsController {
//   public async show({ params }) {
//     return Database.from('posts').select('*').where('id', params.id).first()
//   }
// }

export default class PostsController {
  public async index({ response }: HttpContextContract) {
    const posts = await Post.all()
    // Logger.info('' + posts.length)
    response.status(200).send(posts)
  }
  public async update({ request, response }: HttpContextContract) {
    const payload = await request.validate(UpdatePost)
    const post = await Post.findOrFail(payload.id)
    // Logger.info(JSON.stringify(post.toJSON()))

    await post.merge({ ...payload }).save()

    response.status(200).send(post)
  }
  public async show({ params, response }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    response.status(200).send(post)
  }
  public async destroy({ params, response }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    await post.delete()
    response.status(200).send(post)
  }
  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreatePost)
    const post = await Post.create(payload)
    response.status(201).send(post)
  }
}
