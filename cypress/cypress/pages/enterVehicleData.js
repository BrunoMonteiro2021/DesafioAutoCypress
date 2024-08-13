
import { elements as el } from '../e2e/step_definitions/seguro/seguro.js'
class Seguro {

    visitarPagina() {
        cy.visit('https://sampleapp.tricentis.com/101/app.php')
    }

    preencherCredenciaisValidas(el) {
      cy.get('#make').select(el.make);
      cy.get('#model').select(el.model);
      cy.get('#cylindercapacity').type(el.cylinder);
      cy.get('#engineperformance').type(el.engine);
      cy.get('#dateofmanufacture').type(el.date);
      cy.get('#numberofseats').select(el.seats);
      cy.get(':nth-child(7) > .group > :nth-child(2) > .ideal-radio').click();
      cy.get('#numberofseatsmotorcycle').select(el.seatsmotor);
      cy.get('#fuel').select(el.fuel);
      cy.get('#payload').type(el.payload);
      cy.get('#totalweight').type(el.totalweight);
      cy.get('#listprice').type(el.price);
      cy.get('#licenseplatenumber').type(el.licence);
      cy.get('#annualmileage').type(el.mileage);
      cy.get('#nextenterinsurantdata').click();
    }
}

export default new Seguro()

