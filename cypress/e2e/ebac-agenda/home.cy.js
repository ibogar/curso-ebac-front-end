/// <reference types="cypress" />

describe("Testa as funcionalidaades da agenda", () => {
    beforeEach(() => cy.visit('https://ebac-agenda-contatos-tan.vercel.app/'))
    it("Testa a inclusão de um contato", () => {
        cy.get('input[placeholder="Nome"]').type('Iuri Portilho')
        cy.get('input[type="email"]').type('iuri@ebac.com')
        cy.get('input[type="tel"]').type('11 91234-1234')
        cy.get('.adicionar').click()

        cy.get('li').last().should('have.text', 'iuri@ebac.com')
    })

    it("Testa a edição do contato", () => {
        cy.get('.edit').last().click()
        cy.get('input[type="email"]').clear().type('iuriportilho@ebac.com')
        cy.get('.alterar').click()

        cy.get('li').last().should('have.text', 'iuriportilho@ebac.com')
    })

    it("Testa a remoção do contato", () => {
        cy.get('.delete').last().click()

        cy.get('li').last().should('not.have.text', 'iuriportilho@ebac.com')
    })
})