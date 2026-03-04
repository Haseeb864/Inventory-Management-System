// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import 'cypress-file-upload';
import 'cypress-xpath';

// Login Command 01
Cypress.Commands.add('loginIMS', () => {
   cy.visit('https://inventory.seebiz.cloud', {
  auth: {
    username: 'admin',
    password: 'Temp123'
  },
  timeout: 60000,
  failOnStatusCode: false,
  onBeforeLoad(win) {
    win.onbeforeunload = null
  }
})

    cy.xpath("//input[@id='email']")
        .should('be.visible')
        .clear()
        .type('pirzadahaseeb717+aaa-15@gmail.com');

    cy.xpath("//input[@id='password']")
        .clear()
        .type('Changeme1@3');

    cy.xpath("//button[@id='click_login_button']").click();

    cy.contains('Dashboard', { timeout: 20000 }).should('be.visible');

    cy.xpath("//button[@id='click_nav_arrow_button']").click();
});
