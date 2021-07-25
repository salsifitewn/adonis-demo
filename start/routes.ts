/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Config from '@ioc:Adonis/Core/Config'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
Config.get('apiVersion')
// Route.resource('/user', 'UsersController')
Route.group(() => {
  Route.resource('posts', 'PostsController')
    .apiOnly()
    .middleware({
      store: ['auth:api'],
      destroy: ['auth:api'],
    })
    .as('posts_v1')
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
  Route.get('version', 'ApisController.index')
  Route.post('login', 'AuthController.login')
})
  .prefix('api')
  .middleware('apiVersion')
  .namespace('App/Controllers/Http/Api')
