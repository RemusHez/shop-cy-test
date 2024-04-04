class CheckoutPage {
  checkoutPageElements = {
    checkoutEmailAddressField: () =>
      cy.get('#customer-email-fieldset > .required > .control > '+
      '#customer-email'),
    checkoutFirstName: () =>
      cy.get('[name="shippingAddress.firstname"]'),
    checkoutLastName: () =>
      cy.get('[name="shippingAddress.lastname"]'),
    checkoutAddress: () =>
      // cy.get('.street'),
      cy.get('[name="street[0]"]'),
    checkoutCity: () =>
      cy.get('[name="shippingAddress.city"]'),
    checkoutZipCode: () =>
      cy.get('[name="shippingAddress.postcode"]'),
    checkoutCountry: () =>
      cy.get('[name="shippingAddress.country_id"]'),
    checkoutState: () =>
      cy.get('[name="region_id"]'),
    firstShippingMethode: () =>
      cy.get(':nth-child(1) > :nth-child(1) > .radio'),
    checkoutPhoneNumber: () =>
      cy.get('[name="shippingAddress.telephone"]'),
    checkoutNextButton: () =>
      cy.contains('Next'),
  };

  // Actions
  fillInCheckoutEmailAddress() {
    this.checkoutPageElements.checkoutEmailAddressField()
        .click()
        .type(Cypress.env('CHECKOUT_EMAIL'));
  }

  fillInCheckoutFirstName() {
    this.checkoutPageElements.checkoutFirstName()
        .click()
        .type(Cypress.env('CHECKOUT_FIRST_NAME'));
  }

  fillInCheckoutLastName() {
    this.checkoutPageElements.checkoutLastName()
        .click()
        .type(Cypress.env('CHECKOUT_LAST_NAME'));
  }

  fillInCheckoutAddress() {
    this.checkoutPageElements.checkoutAddress()
        .click()
        .type(Cypress.env('CHECKOUT_STREET_ADDRESS'));
  }

  fillInCheckoutCity() {
    this.checkoutPageElements.checkoutCity()
        .click()
        .type(Cypress.env('CHECKOUT_CITY'));
  }

  selectInCheckoutState() {
    this.checkoutPageElements.checkoutState()
        .select(1);
  }

  fillInCheckoutZipCode() {
    this.checkoutPageElements.checkoutZipCode()
        .click()
        .type(Cypress.env('CHECKOUT_ZIP_CODE'));
  }

  fillInCheckoutPhoneNumber() {
    this.checkoutPageElements.checkoutPhoneNumber()
        .click()
        .type(Cypress.env('CHECKOUT_PHONE_NUMBER'));
  }

  selectShippingMethod() {
    this.checkoutPageElements.firstShippingMethode()
        .click();
  }

  goToPayment() {
    this.checkoutPageElements.checkoutNextButton()
        .click();
  }

  fillCheckoutRequiredInfo() {
    this.fillInCheckoutEmailAddress();
    this.fillInCheckoutFirstName();
    this.fillInCheckoutLastName();
    this.fillInCheckoutAddress();
    this.fillInCheckoutCity();
    this.selectInCheckoutState();
    this.fillInCheckoutZipCode();
    this.fillInCheckoutPhoneNumber();
  }

  fillCheckoutRequiredInfoForLoggedUser() {
    this.fillInCheckoutAddress();
    this.fillInCheckoutCity();
    this.selectInCheckoutState();
    this.fillInCheckoutZipCode();
    this.fillInCheckoutPhoneNumber();
  }

  // Assert
  checkUserIsRedirectedToCheckout() {
    cy.url().should('include', '/checkout/#shipping');
  }
}
export default new CheckoutPage;
