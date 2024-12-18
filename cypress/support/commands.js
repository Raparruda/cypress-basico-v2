Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Raphael')
    cy.get('#lastName').type('Arruda Prestes')
    cy.get('#email').type('raparruda@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()
})