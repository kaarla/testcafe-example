import {Selector, t} from 'testcafe'
import Checkout2Page from '../pages/Checkout2Page'

class Checkout1Page {
  constructor() {
    this.pageTitle = Selector('span.title').withText('Information')
    this.firstNameInput = Selector('#first-name')
    this.lastNameInput = Selector('#last-name')
    this.zipInput = Selector('#postal-code')
    this.continueButton = Selector('#checkout_info_container > div > form > div.checkout_buttons > input')
    this.erroMessage = Selector("#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error").withText("is required")
  }

    async submitCheckoutInfo(lastName, zip){
      await t
          .typeText(this.lastNameInput, lastName)
          .typeText(this.zipInput, zip)
          .click(this.continueButton)
    }
}

export default new Checkout1Page()
