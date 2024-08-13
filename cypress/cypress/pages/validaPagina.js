class Validacao{

    validarAcessoAPagina() {
        cy.url().should('eq','https://sampleapp.tricentis.com/101/app.php')

        // cy.screenshot('login')
    }
}

export default new Validacao()