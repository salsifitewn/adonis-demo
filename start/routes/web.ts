import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
}).as('home')
Route.group(() => {
  Route.resource('posts', 'PostsController')
    .middleware({
      store: ['auth:web'],
      destroy: ['auth:web'],
    })
    .as('posts')
}).namespace('App/Controllers/Http/Web')
