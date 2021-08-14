import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Natural from './Natural'
import Legal from './Legal'

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public email: string

  @column()
  public address: string

  @column()
  public zipCode: string

  @column()
  public city: string

  @column()
  public phone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Natural, {
    foreignKey: 'id',
  })
  public natural: HasOne<typeof Natural>

  @hasOne(() => Legal, {
    foreignKey: 'id',
  })
  public legal: HasOne<typeof Legal>
}
