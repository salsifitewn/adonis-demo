import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Naturals extends BaseSchema {
  protected tableName = 'naturals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id').references('id').inTable('contacts').notNullable()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
