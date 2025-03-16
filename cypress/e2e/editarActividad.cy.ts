import { e2e } from "../support/Constants";

describe('Editar una Actividad', () => {
    it('Verifica que se pueda Editar una nueva Actividad', () => {
       cy.visit('http://localhost:4200/')
        cy.validacionInicial();

    //Agregar una actividad
        cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Probando Campo de Texto');
        cy.get(e2e.BOTON_AGREGAR).click();
    //Editar una Actividad    
        cy.editarActividad();
    //Cancelar Edición
        cy.get(e2e.BOTON_CANCELAR_EDICION).click();
    //Editar una Actividad, de nuevo
        cy.editarActividad();
    //Guardar cambios de la edición
        cy.get(e2e.BOTON_GUARDAR_EDICION).click();
        
    })
  })