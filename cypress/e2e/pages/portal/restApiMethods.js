// / <reference types="cypress" />
/* eslint-disable max-len */
import 'cypress-localstorage-commands';

class Apis {
  addItem2ToCart() {
    cy.request({
      method: 'POST',
      url: 'https://magento.softwaretestingboard.com/checkout/cart/add/',
      body: {
        'product': '1812',
        'item': '1812',
        'form_key': 'd0in2M9wNPwsmtq9',
        'super_attribute[143]': '167',
        'super_attribute[93]': '59',
      },
    })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
  }
}
export default new Apis();
