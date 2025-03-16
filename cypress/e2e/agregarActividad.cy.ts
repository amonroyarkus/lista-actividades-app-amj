import { e2e } from "../support/Constants";

describe('Agregar una Actividad', () => {
    it('Verifica que se pueda Agregar una nueva Actividad', () => {
       cy.visit('http://localhost:4200/')
        cy.validacionInicial();

    //Agregar una actividad
        cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Probando Campo de Texto');
        cy.get(e2e.BOTON_AGREGAR).click();
    })
  })