import {Selector} from 'testcafe'

class InventoryPage {
  constructor() {
    this.pageTitle = Selector('#header_container > div.header_secondary_container > span').withText(/products/i)
    this.cartButton = Selector('#shopping_cart_container')
    this.burgerButton = Selector('#react-burger-menu-btn')
    this.logoutOption = Selector('#logout_sidebar_link')
    this.inventoryList = Selector('#inventory_container')
    this.itemBackpackButton = Selector('#add-to-cart-sauce-labs-backpack')
    this.itemBikeButton = Selector('#add-to-cart-sauce-labs-bike-light')
  }
}

export default new InventoryPage()
