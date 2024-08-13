import { elements3 as prod } from '../e2e/step_definitions/seguro/seguro.js'

class ProductPage {

    preencherDadosProduto(prod) {
      cy.get('#startdate').type(prod.startDate);
      cy.get('#insurancesum').select(prod.sum);
      cy.get('#meritrating').select(prod.rating);
      cy.get('#damageinsurance').select(prod.damage);
      cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check').click()
      cy.get('#courtesycar').select(prod.courtesyCar);
      cy.get('#nextselectpriceoption').click();
    
    }
   }
  
   export default new ProductPage()