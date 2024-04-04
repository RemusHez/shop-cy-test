class PaymentsPage {
  paymentsPageElements = {
    placeOrderButton: () =>
      cy.get('.payment-method-content > :nth-child(4) > div.primary > .action'),
    purchaseConfirmationMessage: () =>
      cy.get('[data-ui-id="page-title-wrapper"]'),
  };

  // Action
  clickPlaceOrderButton() {
    this.paymentsPageElements.placeOrderButton()
        .click();
  }

  // Assert
  checkPurchaseConfirmationMessageIsDisplayed() {
    this.paymentsPageElements.purchaseConfirmationMessage()
        .should('be.visible');
    this.paymentsPageElements.purchaseConfirmationMessage()
        .contains('Thank you for your purchase!');
  }
}
export default new PaymentsPage;
