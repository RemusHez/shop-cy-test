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

//   addItem1ToCart() {
//     cy.request({
//       method: 'POST',
//       url: 'https://magento.softwaretestingboard.com/checkout/cart/add/',
//       body: {
//         'product': '1396',
//         'uenc': 'aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjSE02THk5dFlXZGxiblJ2TG5OdlpuUjNZWEpsZEdWemRHbHVaMkp2WVhKa0xtTnZiUzkzYjIxbGJpOTBiM0J6TFhkdmJXVnVMMnBoWTJ0bGRITXRkMjl0Wlc0dWFIUnRiQSUyQyUyQy9wcm9kdWN0LzEzOTYv',
//         'form_key': '1RS3SoxucIsHAcpu',
//         'super_attribute[143]': '167',
//         'super_attribute[93]': '50',
//       },
//     })
//         .then((response) => {
//           expect(response.status).to.eq(200);
//         });
//   }

//   addItem2ToCart() {
//     cy.get('@accessToken').then((accessToken) =>{
//       cy.request({
//         method: 'POST',
//         url: 'https://magento.softwaretestingboard.com/checkout/cart/add/',
//         body: {
//           'product': '1396',
//           'uenc': 'aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jaGVja291dC9jYXJ0L2FkZC91ZW5jL2FIUjBjSE02THk5dFlXZGxiblJ2TG5OdlpuUjNZWEpsZEdWemRHbHVaMkp2WVhKa0xtTnZiUzkzYjIxbGJpOTBiM0J6TFhkdmJXVnVMMnBoWTJ0bGRITXRkMjl0Wlc0dWFIUnRiQSUyQyUyQy9wcm9kdWN0LzEzOTYv',
//           'form_key': '1RS3SoxucIsHAcpu',
//           'super_attribute[143]': '167',
//           'super_attribute[93]': '50',
//         },
//         headers: {
//           Authorization: 'Bearer ' + accessToken,
//         },
//       })
//           .then((response) => {
//             expect(response.status).to.eq(200);
//           });
//     });
//   }

//   aaddItem1ToCart() {
//     cy.get('@accessToken').then((accessToken) =>{
//       cy.request({
//         method: 'POST',
//         url: navPortalApi.ADD_MEMBER_NOTE,
//         body: {
//           'title': 'Title',
//           'description': 'Description',
//           'type': 'CONTENT',
//           'memberId': 921,
//           'user': 920,
//         },
//         headers: {
//           Authorization: 'Bearer ' + accessToken,
//         },
//       })
//           .then((response) => {
//             expect(response.status).to.eq(200);
//           });
//     });
//   }
}
export default new Apis();
