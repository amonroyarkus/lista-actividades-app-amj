import { e2e } from "../support/Constants";

describe('Agregar una Actividad', () => {
    it('Verifica que se pueda Agregar una nueva Actividad', () => {
       cy.visit('http://localhost:4200/')
      /*cy.get(e2e.TITULO_PRINCIPAL,{timeout: 10000}).should('contain', 'Lista de Actividades');
      cy.get(e2e.SUBTITULO,{timeout: 10000}).should('contain', 'Agregar Actividad');
      cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD,{timeout: 10000})
        .should('be.visible')
        .and('attr', 'value')
      cy.get(e2e.BOTON_AGREGAR,{timeout: 10000})
        .should('be.visible')
        .should('has.css', 'background-color', 'rgb(40, 167, 69)'); */

        cy.validacionInicial();

    //Agregar una actividad
        //cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Probando Campo de Texto');
        //cy.get(e2e.BOTON_AGREGAR).click();
    })
  })