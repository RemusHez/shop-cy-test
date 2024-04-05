import dashboardCommonPage from '../../../pages/portal/dashboardCommonPage';
import shoppingCartPage from '../../../pages/portal/shoppingCartPage';
import menItemsPage from '../../../pages/portal/menItemsPage';
import checkoutPage from '../../../pages/portal/checkoutPage';
import paymentsPage from '../../../pages/portal/paymentsPage';

context('UI tests for user', () => {
  describe('UI tests for users that are logged in', () => {
    beforeEach(() => {
      dashboardCommonPage.visitDashboardPage();
    });

    it('Logged User is able to buy Men Hoodie - E2E flow', () => {
      cy.login();
      dashboardCommonPage.clickMenSectionButton();
      menItemsPage.clickHoodiesSweatshirts();
      menItemsPage.clickOnFirstItemFromList();
      dashboardCommonPage.selectSize();
      dashboardCommonPage.selectColourMen();
      dashboardCommonPage.clickAddToCartButton();
      dashboardCommonPage.goToShoppingCart();
      shoppingCartPage.goToCheckout();
      checkoutPage.selectShippingMethod();
      checkoutPage.goToPayment();
      paymentsPage.clickPlaceOrderButton();
      paymentsPage.checkPurchaseConfirmationMessageIsDisplayed();
    });

    it('Logged User is able to add and remove items from cart', () => {
      cy.login();
      dashboardCommonPage.checkCartIsEmpty();
      dashboardCommonPage.visitDashboardPage();
      dashboardCommonPage.clickOnFirstItemFromHotSellers();
      dashboardCommonPage.selectSize();
      dashboardCommonPage.selectColourWomen();
      dashboardCommonPage.clickAddToCartButton();
      dashboardCommonPage.goToShoppingCart();
      shoppingCartPage.checkFirstItemIsAddedToCart();
      shoppingCartPage.checkUserIsRedirectToShoppingCart();
      shoppingCartPage.addSecondItemToCart();
      shoppingCartPage.checkSecondItemIsAddedToCart();
      shoppingCartPage.deleteItemsFromCart();
      shoppingCartPage.checkShoppingCartIsEmpty();
    });
  });
});
