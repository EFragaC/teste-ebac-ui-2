/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () =>{

    before(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login =>{
            cy.login(login.usuario, login.senha)

        })
        
    

        
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Evandro', 'Carlos', 'Evandro.qa')
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso')
    });

})