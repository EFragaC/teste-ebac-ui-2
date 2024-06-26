///<reference type="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')   
    });
    afterEach(() => {
        cy.screenshot()
        
    });


    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('evandro@teste.com.br')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, evandro (não é evandro? Sair)')
        
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválio', () => {
        cy.get('#username').type('evan@teste.com.br')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()

       // cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')

        
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {

        cy.get('#username').type('evandro@teste.com.br')
        cy.get('#password').type('123@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail evandro@teste.com.br está incorreta. Perdeu a senha?.')
        cy.get('.woocommerce-error').should('exist')

        
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, evandro (não é evandro? Sair)')
        
        
    });
    it('Deve fazer login com sucesso - Fixture', () => {
        cy.fixture('perfil').then( dados =>{
            cy.get('#username').type(dados.usuario , {log:false})
            cy.get('#password').type(dados.senha , {log: false })
            cy.get('.woocommerce-form > .button').click()
            
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, evandro (não é evandro? Sair)')

        })




    });
    it.only('Deve fazer login com sucesso-usando comandos customizados', () => {
        cy.login('evandro@teste.com.br','12345')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, evandro (não é evandro? Sair)')
        
        
    });
        
        
    
});