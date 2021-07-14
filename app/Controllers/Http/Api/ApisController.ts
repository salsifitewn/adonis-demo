// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Config from '@ioc:Adonis/Core/Config'

export default class ApisController {
  public async index() {
    return { apiVersion: Config.get('apiVersion') }
  }
}
