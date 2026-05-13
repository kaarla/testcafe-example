import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import {CREDENTIALS} from '../data/Constants'

fixture('Testing inventory features')
  .page `https://www.saucedemo.com/`

test('Users can logout from inventory page', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(InventoryPage.burgerButton)
    .click(InventoryPage.logoutOption)

  await t.expect(LoginPage.loginButton.exists).ok()
})

test('Users can navigate to the shopping cart page from inventory page', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(InventoryPage.cartButton)

  await t.expect(CartPage.pageTitle.exists).ok()
})

test ('Users can add one item to the cart', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(InventoryPage.itemBackpackButton)
    .click(InventoryPage.cartButton)

  await t.expect(CartPage.backpackItem.exists).ok()
})

test ('Users can add more than one item to the cart', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(InventoryPage.itemBackpackButton)
    .click(InventoryPage.itemBikeButton)
    .click(InventoryPage.cartButton)

  await t
    .expect(CartPage.backpackItem.exists).ok()
    .expect(CartPage.bikeItem.exists).ok()
})
