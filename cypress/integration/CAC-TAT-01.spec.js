/// <reference types ="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function(){
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })
    
    it('verifica o titulo da aplicação',function(){
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')    
    })

})