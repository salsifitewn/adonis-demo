import { ApplicationContract } from '@ioc:Adonis/Core/Application'
export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {
    const { BaseModel } = await import('@ioc:Adonis/Lucid/Orm')

    BaseModel.namingStrategy.serializedName = (_, key: string) => {
      return key
    }

    // Register your own bindings
  }

  public async boot() {
    // IoC container is ready
    // https://dev.to/shemsiu/ioc-container-and-dependency-injection-in-adonis-v5-og2
    // https://github.com/adonisjs/core/discussions/1881
    const ContactService = (await import('App/Services/ContactService')).default
    this.app.container.singleton('App/ContactService', () => new ContactService())
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
