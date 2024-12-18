/// <reference types ="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function(){
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })
    
    it('verifica o titulo da aplicação',function(){
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')    
    })

    it('preenche campos obrgatórios e envia formulário',function(){
        cy.get('#firstName').type('Raphael',{0:0})
        cy.get('#lastName').type('Arruda Prestes')
        cy.get('#email').type('raparruda@gmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button','Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',function(){
        cy.get('#firstName').type('Raphael',{0:0})
        cy.get('#lastName').type('Arruda Prestes')
        cy.get('#email').type('raparruda!!gmail.com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button','Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('campo telefone continua vazio quando preenchido com valor não-numérico',function(){
        cy.get('#phone')
        .type('abcdefgh')
        .should('have.value','')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',function(){
        cy.get('#firstName').type('Raphael',{0:0})
        cy.get('#lastName').type('Arruda Prestes')
        cy.get('#email').type('raparruda@gmail.com')
        cy.get('#phone-checkbox').click()

        cy.get('#open-text-area').type('Teste')
        cy.contains('button','Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone',function(){
        cy.get('#firstName')
        .type('Raphael')
        .should('have.value', 'Raphael')
        .clear()
        cy.get('#lastName')
        .type('Arruda Prestes')
        .should('have.value', 'Arruda Prestes')
        .clear()
        cy.get('#email')
        .type('raparruda@gmail.com')
        .should('have.value', 'raparruda@gmail.com')
        .clear()
        cy.get('#phone')
        .type('22334455')
        .should('have.value','22334455')
        .clear()
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',function(){
        cy.contains('button','Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado',function(){
       cy.fillMandatoryFieldsAndSubmit()

       cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (YouTube) por seu texto', function(){
        cy.get('#product')
            .select('YouTube')
            .should('have.value','youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function(){
        cy.get('#product')
            .select('mentoria')
            .should('have.value','mentoria')
    })

    it('seleciona um produto (Blog) por seu índice',function() {
        cy.get('#product').select(1).should('have.value', 'blog')
    })
})