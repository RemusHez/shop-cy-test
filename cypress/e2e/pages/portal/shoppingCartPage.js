class ShoppingCartPage {
  cartElements = {
    firstItemFromCart: () =>
      cy.get('.item > .product-item-photo > .product-image-container > '+
    '.product-image-wrapper > .product-image-photo'),
    secondItemFromCart: () =>
      cy.get(':nth-child(5) > [data-layer="Content"]'),
    checkoutButton: () =>
      cy.contains('Proceed to Checkout'),
    addItemToCartFromMoreChoices: () =>
      cy.get(':nth-child(1) > .product-item-info > .details > .actions > '+
      '.actions-primary > form > .action'),
    deleteFirstItemFromCartButton: () =>
      cy.get('.action-delete'),
    cartEmptyMessage: () =>
      cy.get('.cart-empty > :nth-child(1)'),
  };

  // Action
  goToCheckout() {
    this.cartElements.checkoutButton()
        .should('be.visible')
        .wait(600)
        .click();
  }

  addSecondItemToCart() {
    this.cartElements.addItemToCartFromMoreChoices()
        .click();
  }

  deleteItemsFromCart() {
    this.cartElements.deleteFirstItemFromCartButton()
        .first().click();
    cy.wait(500);
    this.cartElements.deleteFirstItemFromCartButton()
        .click();
  }

  // Assert
  checkUserIsRedirectToShoppingCart() {
    cy.url().should('include', '/checkout/cart/');
  }

  checkFirstItemIsAddedToCart() {
    this.cartElements.firstItemFromCart()
        .should('be.visible');
  }

  checkSecondItemIsAddedToCart() {
    this.cartElements.firstItemFromCart()
        .should('be.visible');
  }

  checkShoppingCartIsEmpty() {
    this.cartElements.cartEmptyMessage()
        .should('be.visible');
  }
}
export default new ShoppingCartPage;
