import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PostFactory, UserFactory } from 'Database/factories'

export default class DatabaseSeederSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const p1 = PostFactory.createMany(10)
    const p2 = UserFactory.createMany(10)
    await Promise.all([p1, p2])
  }
}
