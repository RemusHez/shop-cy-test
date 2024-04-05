class DashboardCommonPage {
  dashboardElements = {
    dashBoardSignInButton: () =>
      cy.get('[data-label="or"]'),
    dashBoardWelcomeMessage: () =>
      cy.get(':nth-child(2) > .greet > .logged-in'),
    userDropdownArrow: () =>
      cy.get('[data-action="customer-menu-toggle"]'),
    signOutButton: () =>
      cy.contains('Sign Out'),
    cartIcon: () =>
      cy.get('.showcart'),
    miniCart: () =>
      cy.get(':nth-child(7) > .secondary > .action > span'),
    menSectionButton: () =>
      cy.get('#ui-id-5'),
  };

  hotSellersSectionElements = {
    firstItemFromHotSellers: () =>
      cy.get(':nth-child(1) > .product-item-info > .product-item-photo > '+
    '.product-image-container > .product-image-wrapper > .product-image-photo'),
    selectSpecificSize: () =>
      cy.get('#option-label-size-143-item-168'),
    selectSpecificColourWomen: () =>
      cy.get('#option-label-color-93-item-56'),
    selectSpecificColourMen: () =>
      cy.get('#option-label-color-93-item-50'),
    addToCartButton: () =>
      cy.get('#product-addtocart-button'),
  };

  // Action
  visitDashboardPage() {
    cy.visit('/');
  }

  clickMenSectionButton() {
    this.dashboardElements.menSectionButton()
        .click();
  }

  clickDashboardSignInButton() {
    this.dashboardElements.dashBoardSignInButton()
        .first().click();
  }

  clickSignOut() {
    this.dashboardElements.userDropdownArrow()
        .first().click({force: true});
    this.dashboardElements.signOutButton()
        .click();
  }

  clickOnFirstItemFromHotSellers() {
    this.hotSellersSectionElements.firstItemFromHotSellers()
        .click();
  }

  selectSize() {
    this.hotSellersSectionElements.selectSpecificSize()
        .click();
  }

  selectColourWomen() {
    this.hotSellersSectionElements.selectSpecificColourWomen()
        .click();
  }

  selectColourMen() {
    this.hotSellersSectionElements.selectSpecificColourMen()
        .click();
  }

  clickAddToCartButton() {
    this.hotSellersSectionElements.addToCartButton()
        .click();
  }

  goToShoppingCart() {
    cy.get('.message-success > div > a').click();
  }

  // Assert
  checkSignInButtonIsDisplayedOnDashboardPage() {
    this.dashboardElements.dashBoardSignInButton()
        .should('be.visible');
  }

  checkWelcomeMessageDisplayedOnDashboardPage() {
    this.dashboardElements.dashBoardWelcomeMessage()
        .should('be.visible')
        .contains('Welcome, Test User!');
  }

  checkUserDropdownArrowIsDisplayedOnDashboardPage() {
    this.dashboardElements.userDropdownArrow()
        .should('be.visible');
  }

  checkUserIsLoggedOut() {
    cy.url().should('include', '/customer/account/logout');
  }

  checkCartIsEmpty() {
    this.dashboardElements.cartIcon().click();
    cy.get('.subtitle').contains('You have no items in your shopping cart.');
  }
}
export default new DashboardCommonPage;
