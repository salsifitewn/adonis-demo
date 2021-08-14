import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Database from '@ioc:Adonis/Lucid/Database'

// export default class PostsController {
//   public async show({ params }) {
//     return Database.from('posts').select('*').where('id', params.id).first()
//   }
// }

import Post from 'App/Models/Post'
import { jsPDF } from 'jspdf'

export default class PostsController {
  public async index({ response, view }: HttpContextContract) {
    const posts = await Post.query().orderBy('id', 'asc')
    const html = await view.render('posts/index', {
      posts,
    })

    // Default export is a4 paper, portrait, using millimeters for units
    // const doc = new jsPDF()

    // doc.text('Hello world!', 10, 10)
    // doc.save('a4.pdf')
    // response.header('Content-type', 'application/pdf')
    // return doc.output()
    return html
  }
  public async show({ params, view }) {
    const post = await Post.findOrFail(params.id)
    const html = await view.render('posts/show', {
      post,
    })
    return html
  }
  public async create({ params, view }) {
    const post = await Post.findOrFail(params.id)
    const html = await view.render('posts/show', {
      post,
    })
    return html
  }
}
