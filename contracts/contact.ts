declare module '@ioc:App/ContactService' {
  import Contact from 'App/Models/Contact'
  import Legal from 'App/Models/Legal'
  import Natural from 'App/Models/Natural'
  export interface ContactInterface {
    // sayHello(name: string): void
    // sayGoodbye(name: string): void
    getAllContacts(): Promise<Contact[]>
    // getAllLegalContacts(): Promise<Contact[]>
    // getAllNaturalContacts(): Promise<Contact[]>
    // getContact(): Promise<Contact>
    insertContact(
      contact: Contact,
      { legal, natural }: { legal?: Legal; natural?: Natural }
    ): Promise<Contact>
    // editContact(): Promise<Contact>
    // deleteContact(): Promise<Contact>
  }

  const ContactService: ContactInterface
  export default ContactService
}
