import { elements4 as qt } from '../e2e/step_definitions/seguro/seguro.js'

class QuotePage {
  
  
  enviarQuota(qt) {
    cy.get('#email').type(qt.email);
    cy.get('#phone').type(qt.phone);
    cy.get('#username').type(qt.username);
    cy.get('#password').type(qt.password);
    cy.get('#confirmpassword').type(qt.confirmpass);
    cy.get('#Comments').type(qt.comments);
    cy.get('#sendemail').click();
  }
  
  // Method to verify the success message after form submission
  verifySuccessMessage() {
    cy.get('body').then((body) => {
      if (body.find('#success-message').length > 0) {
        cy.get('#success-message', { timeout: 15000 }).should('be.visible');
        cy.get('#success-message').should('contain', 'Sending e-mail success!');
      } else {
        cy.log('Success message element not found');
      }
    });
  }
  
  
}

export default new QuotePage()
