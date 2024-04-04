import 'cypress-wait-until';

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.get('[data-label="or"]').first().click();
  cy.get('#email').type(Cypress.env('USERNAME'));
  cy.get('#pass').type(Cypress.env('PASSWORD'));
  cy.get('#send2').click();
});
