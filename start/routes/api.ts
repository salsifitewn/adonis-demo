import Route from '@ioc:Adonis/Core/Route'
import Config from '@ioc:Adonis/Core/Config'

Config.get('apiVersion')
// Route.resource('/user', 'UsersController')
Route.group(() => {
  Route.resource('posts', 'PostsController')
    .apiOnly()
    .middleware({
      store: ['auth:api'],
      destroy: ['auth:api'],
    })
    .as('api_posts_v1')
  Route.resource('contacts', 'ContactsController')
    .apiOnly()
    .middleware({
      store: ['auth:api'],
      destroy: ['auth:api'],
    })
    .as('api_contacts_v1')
  Route.get('version', 'ApisController.index')
  Route.post('login', 'AuthController.login')
})
  .prefix('api/v1')
  .middleware('apiVersion:v1')
  .namespace('App/Controllers/Http/Api')

Route.group(() => {
  Route.resource('posts', 'PostsController')
    .apiOnly()
    .middleware({
      store: ['auth:api'],
      destroy: ['auth:api'],
    })
    .as('api_posts')
  Route.resource('contacts', 'ContactsController')
    .apiOnly()
    .middleware({
      store: ['auth:api'],
      destroy: ['auth:api'],
    })
    .as('api_contacts')

  Route.get('version', 'ApisController.index')
  Route.post('login', 'AuthController.login')
})
  .prefix('api')
  .middleware('apiVersion')
  .namespace('App/Controllers/Http/Api')
