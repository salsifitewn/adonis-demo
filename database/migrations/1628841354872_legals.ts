import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Legals extends BaseSchema {
  protected tableName = 'legals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id').references('id').inTable('contacts').notNullable()
      table.string('company_name').notNullable()
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
