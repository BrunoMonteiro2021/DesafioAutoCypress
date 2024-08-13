
import { elements2 as ins } from '../e2e/step_definitions/seguro/seguro.js'

class InsurantPage {

    preencherDadoSegurador(ins) {

      cy.get('#firstname').type(ins.firstName);
      cy.get('#lastname').type(ins.lastName);
      cy.get('#birthdate').type(ins.birthDate);
      cy.get(':nth-child(4) > .group > :nth-child(1) > .ideal-radio').click();
      cy.get('#streetaddress').type(ins.address);
      cy.get('#country').select(ins.country);
      cy.get('#zipcode').type(ins.zip);
      cy.get('#city').type(ins.city);
      cy.get('#occupation').select(ins.occupation);
      cy.get(':nth-child(5) > .ideal-check').click();
      cy.get('#website').type(ins.website);
      cy.get('#nextenterproductdata').click();
    }
  
  }
  
  export default new InsurantPage()
  