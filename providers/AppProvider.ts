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
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
