class MenItemsPage {
  menItemsElements = {
    hoodiesCategory: () =>
      cy.get('.categories-menu > :nth-child(2) > :nth-child(1) > a'),
    firstItemFromList: () =>
      cy.get(':nth-child(1) > .product-item-info > .photo > '+
      '.product-image-container > .product-image-wrapper > '+
      '.product-image-photo'),
  };

  // Action
  clickHoodiesSweatshirts() {
    this.menItemsElements.hoodiesCategory()
        .click();
  }

  clickOnFirstItemFromList() {
    this.menItemsElements.firstItemFromList()
        .click();
  }
}
export default new MenItemsPage;
