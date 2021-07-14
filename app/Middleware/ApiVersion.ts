import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Config from '@ioc:Adonis/Core/Config'
import { apiLatest } from 'Config/app'
export default class ApiVersion {
  public async handle({}: HttpContextContract, next: () => Promise<void>, guard: string[]) {
    Config.set('apiVersion', guard.length ? guard[0] : `v${apiLatest}`)
    await next()
  }
}
