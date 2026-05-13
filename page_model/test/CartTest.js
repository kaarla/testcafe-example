import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import Checkout1Page from '../pages/Checkout1Page'
import Checkout2Page from '../pages/Checkout2Page'
import CheckoutCompletePage from '../pages/CheckoutCompletePage'

import {CREDENTIALS} from '../data/Constants'
import {CONTACT_INFO} from '../data/Constants'

fixture('Testing cart features')
  .page `https://www.saucedemo.com/`
  .beforeEach(async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t
      .click(InventoryPage.itemBackpackButton)
      .click(InventoryPage.cartButton)

    await t.expect(CartPage.backpackItem.exists).ok()
    await t.click(CartPage.checkoutButton)
  })

test ('Checkout continue providing information', async t =>{
    await t.typeText(Checkout1Page.firstNameInput, CONTACT_INFO.FIRST_NAME)
    await Checkout1Page.submitCheckoutInfo(CONTACT_INFO.LAST_NAME, CONTACT_INFO.ZIP)

    await t.expect(Checkout2Page.pageTitle.exists).ok()
      .expect(Checkout2Page.pageTitle.innerText).contains('Overview')
})

test ('Checkout cannot continue without providing information', async t =>{
    await Checkout1Page.submitCheckoutInfo(CONTACT_INFO.LAST_NAME, CONTACT_INFO.ZIP)
    await t.expect(Checkout1Page.erroMessage.exists).ok()
})

test ('Check final order items before comfirm', async t =>{
  await t.typeText(Checkout1Page.firstNameInput, CONTACT_INFO.FIRST_NAME)
  await Checkout1Page.submitCheckoutInfo(CONTACT_INFO.LAST_NAME, CONTACT_INFO.ZIP)
  await t
    .expect(Checkout2Page.backpackItem.exists).ok()
})

test ('Check final order items and comfirms', async t =>{
  await t.typeText(Checkout1Page.firstNameInput, CONTACT_INFO.FIRST_NAME)
  await Checkout1Page.submitCheckoutInfo(CONTACT_INFO.LAST_NAME, CONTACT_INFO.ZIP)
  await t
    .expect(Checkout2Page.backpackItem.exists).ok()
    .click(Checkout2Page.finishButton)
    .expect(CheckoutCompletePage.thanksImage.exists).ok()
    .expect(CheckoutCompletePage.thanksMessage.innerText).contains("Thank you")
})
