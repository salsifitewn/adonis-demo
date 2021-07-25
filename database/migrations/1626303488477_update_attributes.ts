import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('name', 'title')
      table.text('description')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('title', 'name')
      table.dropColumn('description')
    })
  }
}
