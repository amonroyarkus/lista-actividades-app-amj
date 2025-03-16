/// <reference types="cypress" />
import { e2e } from "../support/Constants";

declare global {
    namespace Cypress {
        interface Chainable {
            validacionInicial(): Chainable<Element>
            editarActividad(): Chainable<Element>
        }
    }
}

Cypress.Commands.add('validacionInicial', () => {
    cy.get(e2e.TITULO_PRINCIPAL,{timeout: 10000}).should('contain', 'Lista de Actividades');
    cy.get(e2e.SUBTITULO,{timeout: 10000}).should('contain', 'Agregar Actividad');
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD,{timeout: 10000})
      .should('be.visible')
      .and('attr', 'value')
    cy.get(e2e.BOTON_AGREGAR,{timeout: 10000})
      .should('be.visible')
      .should('has.css', 'background-color', 'rgb(40, 167, 69)');
})


Cypress.Commands.add('editarActividad', ()  => {
    cy.get(e2e.BOTON_EDITAR,{timeout: 10000})
    .should('be.visible')
    .should('has.css', 'background-color', 'rgb(255, 193, 7)')
    .click();
    cy.get(e2e.CAMPO_EDITAR_ACTIVIDAD,{timeout:10000})
        .should('be.visible')
        .clear()
        .type('Probando Edicion de Actividad');
})