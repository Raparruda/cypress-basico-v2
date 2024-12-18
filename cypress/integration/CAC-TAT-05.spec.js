/// <reference types ="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function(){
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })
    
    it('marca todos os Checkbox de uma vez',function() {
        cy.get('#check input[type="checkbox"]')
        .as ('checkboxes')
        .check()
        .should("be.checked")
    })

    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('#check input[type="checkbox"]')
        .check()
        .should("be.checked")
        .last()
        .uncheck()
        .should("not.be.checked")
    })
    
})