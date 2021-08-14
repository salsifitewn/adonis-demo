import Database from '@ioc:Adonis/Lucid/Database'
import { ContactInterface } from '@ioc:App/ContactService'
import Contact from 'App/Models/Contact'
import Legal from 'App/Models/Legal'
import Natural from 'App/Models/Natural'

export default class ContactService implements ContactInterface {
  public getAllContacts(): Promise<Contact[]> {
    return Contact.query().preload('legal').preload('natural')
  }
  public async insertContact(
    contact: Contact,
    { legal, natural }: { legal?: Legal; natural?: Natural }
  ): Promise<Contact> {
    await Database.transaction(async (trx) => {
      contact.useTransaction(trx)
      await contact.save()
      if (!!legal === !!natural) {
        throw new Error('The `Contact ` object should have either type or id property or both.')
      }
      /**
       * The relationship will implicitly reference the
       * transaction from the user instance
       */
      legal && (await contact.related('legal').save(legal))
      natural && (await contact.related('natural').save(natural))
    })
    return contact
  }
  // public sayHello(name: string): void {
  //   console.log(`Hi ${name}`)
  // }

  // public sayGoodbye(name: string): void {
  //   console.log(`Goodbye ${name}`)
  // }
}
