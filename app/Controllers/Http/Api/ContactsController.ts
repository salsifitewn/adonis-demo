import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ContactService from '@ioc:App/ContactService'
import Contact from 'App/Models/Contact'
import Legal from 'App/Models/Legal'
import Natural from 'App/Models/Natural'
import CreateContact from 'App/Validators/CreateContactValidator'

export default class ContactsController {
  public async index({ response }: HttpContextContract) {
    // try {
    const contacts = await ContactService.getAllContacts()
    response.status(200).send(contacts)
    // } catch (e) {
    //   response.status(404).send('Not Found')
    // }
  }
  public async store({ request, response }: HttpContextContract) {
    const { address, city, email, firstName, lastName, phone, type, zipCode } =
      await request.validate(CreateContact)
    const contact = new Contact().fill({ address, city, email, phone, zipCode })
    let contactType: Natural | Legal
    switch (type) {
      case 'natural':
        contactType = new Natural().fill({ firstName, lastName })
        break

      case 'legal':
        contactType = new Legal()
        break
    }
    await ContactService.insertContact(contact, { [type]: contactType })
    response.status(201).send(contact)
  }
}
