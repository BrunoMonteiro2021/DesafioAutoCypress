
class PricePage {

    selecionaOpcaoPreco(option) {
      cy.get('tr > .group > :nth-child(4)').click();
      cy.get('#nextsendquote').click();
    }
   
  }
  
  export default new PricePage()