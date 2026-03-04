// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-xpath';
Cypress.config('defaultCommandTimeout', 20000)
Cypress.config('pageLoadTimeout', 60000)
import './commands'
import "cypress-real-events/support";

beforeEach(() => {
  cy.on('window:confirm', () => true)

  cy.window().then((win) => {
    win.onbeforeunload = null
  })
})