///<reference type="cypress"/>


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        //.first() primeiro elemento da lista
       // .last() trás o ultimo da lista
      // .eq(2) pega a posição que eu escolher, lembrandro que se começa do zero que e o 1
        .contains('Apollo Running Short')
        .click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });
});