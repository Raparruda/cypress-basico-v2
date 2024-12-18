/// <reference types ="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function(){
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
        cy.get('.success')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Mensagem enviada com sucesso.')
          .invoke('hide')
          .should('not.be.visible')
        cy.get('.error')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Valide os campos obrigatórios!')
          .invoke('hide')
          .should('not.be.visible')
      })

    it(`preenche a area de texto usando o comando invoke`, function() {
        const TeAjudar = Cypress._.repeat('Teste Rephael -', 20)
        cy.get('#firstName').type('Raphael',{0:0})
        cy.get('#lastName').type('Arruda Prestes')
        cy.get('#email').type('raparruda@gmail.com')
        cy.get('#open-text-area')
            .invoke('val',TeAjudar)
            .should('have.value', TeAjudar)
        cy.contains('button','Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('faz uma requisição HTTP', function(){
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
            .should(function(response){
              console.log(response)  
            
              const { status, statusText, body}= response

              expect(status).to.equals(200)
              expect(statusText).to.equals('OK')
              expect(body).to.contains('CAC TAT')
            })
    })

    it.only('Encontra o gato escondido', function(){
        cy.get('#cat')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', '🐈')
          .invoke('hide')
          .should('not.be.visible')
        
    })
})