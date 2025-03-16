import { e2e } from "../support/Constants";

describe('Eliminar una Actividad', () => {
    it('Verifica que se pueda Eliminar una nueva Actividad', () => {
       cy.visit('http://localhost:4200/')
        cy.validacionInicial();

    //Agregar una actividad
        cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Probando Campo de Texto');
        cy.get(e2e.BOTON_AGREGAR).click();
    //Eliminar actividad
        cy.get(e2e.BOTON_ELIMINAR)
        .should('be.visible')
        .should('has.css', 'background-color', 'rgb(220, 53, 69)')
        .click();
    })
  })