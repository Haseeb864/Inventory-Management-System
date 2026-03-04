/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

import {
  invoiceTestcase01,
  invoiceTestcase02,
  invoiceTestcase03,
  invoiceTestcase04,
  invoiceTestcase05,
  invoiceTestcase06,
  invoiceTestcase07,
  invoiceTestcase08,
  invoiceTestcase09,
  invoiceTestcase10,
  invoiceTestcase11
} from './INVENTORY'

describe('IMS Test Runner', () => {

  it('Invoice Testcase 01', () => {
    invoiceTestcase01()
  })

  it('Invoice Testcase 02', () => {
    invoiceTestcase02()
  })

  it('Invoice Testcase 03', () => {
    invoiceTestcase03()
  })

  it('Invoice Testcase 04', () => {
    invoiceTestcase04()
  })

  it('Invoice Testcase 05', () => {
    invoiceTestcase05()
  })

  it('Invoice Testcase 06', () => {
    invoiceTestcase06()
  })

  it('Invoice Testcase 07', () => {
    invoiceTestcase07()
  })

  it('Invoice Testcase 08', () => {
    invoiceTestcase08()
  })

  it('Invoice Testcase 09', () => {
    invoiceTestcase09()
  })

  it('Invoice Testcase 10', () => {
    invoiceTestcase10()
  })

  it.only('Invoice Testcase 11', () => {
    invoiceTestcase11()
  })

})