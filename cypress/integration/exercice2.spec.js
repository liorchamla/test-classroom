/// <reference types="Cypress" />

describe("Exercice2", () => {
    it("should change title", () => {

        cy.visit("http://127.0.0.1:8081")
            .get('button')
            .click()
            .document()
            .title()
            .should("contain", "Hourra");
    })
})