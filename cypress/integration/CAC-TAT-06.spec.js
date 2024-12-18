/// <reference types ="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function(){
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })
    
it('Seleciona um arquivo da pasta fixtures', function(){
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json')
    .should(function($input) {
        expect($input[0].files[0].name).to.equal('example.json')
    })
})   

it('Seleciona um arquivo simulando um drag-drop',function(){
    cy.get('input[type=file]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop'})
    .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
    })
})
    

it.only('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias',function(){
    cy.fixture('example.json',{econding:null}).as('arquivoExemplo')
    cy.get('input[type=file]')
    .selectFile('@arquivoExemplo')
    .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
    })
})

})