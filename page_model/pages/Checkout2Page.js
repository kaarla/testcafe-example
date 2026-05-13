import {Selector, t} from 'testcafe'

class Checkout2Page {
  constructor() {
    this.pageTitle = Selector("#header_container > div.header_secondary_container > span").withText(/overview/i)
    this.cartList = Selector('#checkout_summary_container > div > div.cart_list')
    this.backpackItem = this.cartList.find('.inventory_item_name').withText('Sauce Labs Backpack')
    this.finishButton = Selector('#finish')
  }
}

export default new Checkout2Page()
