import {Selector, t} from 'testcafe'

class CartPage {
  constructor() {
    this.pageTitle = Selector("#header_container > div.header_secondary_container > span").withText(/your cart/i)
    this.cartList = Selector('#cart_contents_container > div > div.cart_list')
    this.backpackItem = this.cartList.find('.inventory_item_name').withText('Sauce Labs Backpack')
    this.bikeItem = this.cartList.find('.inventory_item_name').withText('Sauce Labs Bike Light')
    this.checkoutButton = Selector('.btn_action.checkout_button')
  }
}

export default new CartPage()
