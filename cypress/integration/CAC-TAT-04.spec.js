/// <reference types ="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function(){
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })
    
    it('marca o tipo de atendimento "Feedback"',function() {
        cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('have.value','feedback')
    })

    it.only('marca cada tipo de atendimento',function() {
        cy.get('input[type="radio"]')
        .should('have.length',3)
        .each(function($radio){
            cy.wrap($radio).check()
            cy.wrap($radio).should("be.checked")
        })
    })
})