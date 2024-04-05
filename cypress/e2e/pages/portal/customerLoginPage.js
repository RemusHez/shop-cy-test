class CustomerLoginPage {
  customerLoginPageElements = {
    emailField: () =>
      cy.get('#email'),
    passwordField: () =>
      cy.get('#pass'),
    signInButton: () =>
      cy.get('#send2'),
  };

  // Actions
  fillEmailField() {
    this.customerLoginPageElements.emailField()
        .click()
        .type(Cypress.env('USERNAME'));
  }

  fillPasswordField() {
    this.customerLoginPageElements.passwordField()
        .click()
        .type(Cypress.env('PASSWORD'));
  }

  clickSignInButton() {
    this.customerLoginPageElements.signInButton()
        .click();
  }

  // Assert
  checkUserIsOnCustomerLoginPage() {
    cy.url().should('include', '/customer/account/login/referer/');
  }

  checkEmailFieldIsDisplayed() {
    this.customerLoginPageElements.emailField()
        .should('be.visible');
  }

  checkPasswordFieldIsDisplayed() {
    this.customerLoginPageElements.passwordField()
        .should('be.visible');
  }
}
export default new CustomerLoginPage;
