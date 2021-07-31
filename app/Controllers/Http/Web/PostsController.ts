import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database from '@ioc:Adonis/Lucid/Database'

// export default class PostsController {
//   public async show({ params }) {
//     return Database.from('posts').select('*').where('id', params.id).first()
//   }
// }

import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ response, view }: HttpContextContract) {
    const posts = await Post.query().orderBy('id', 'asc')
    const html = await view.render('posts/index', {
      posts,
    })
    return html
  }
  public async show({ params, view }) {
    const post = await Post.find(params.id)
    const html = await view.render('posts/show', {
      post,
    })
    return html
  }

  public async store({ params }) {
    return
  }
}
