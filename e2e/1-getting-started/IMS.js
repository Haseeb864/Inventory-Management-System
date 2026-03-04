/// <reference types="cypress" />

context('IMS End-to-End Flow', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.clearCookies()
    cy.clearLocalStorage()

    // 🔐 LOGIN WITH BASIC AUTH
    cy.visit('https://inventory.seebiz.cloud', {
      auth: {
        username: 'admin',
        password: 'Temp123'
      },
      timeout: 60000,
      failOnStatusCode: false
    })

    // LOGIN VIA FORM
    cy.xpath("//input[@id='email']")
      .should('be.visible')
      .type('pirzadahaseeb717+aaa-14@gmail.com')

    cy.xpath("//input[@id='password']")
      .type('Changeme1@3')

    cy.xpath("//button[@id='click_login_button']").click()

    // VERIFY DASHBOARD
    cy.contains('Dashboard', { timeout: 20000 }).should('be.visible')
  })

  // ===============================
  // TEST CASE 1
  // ===============================
  it('IMS E2E - Invoice + Credit Note Flow', () => {

    // 📦 NAVIGATE TO INVOICE MODULE
    cy.xpath("//button[@id='click_nav_arrow_button']").click()
    cy.xpath("//a[@id='click_invoice_module']").click()
    cy.xpath("//button[@id='Click_Add_New_Item_Adjustment_Button']").click()

    // ➕ ADD CUSTOMER
    cy.xpath("(//div[contains(@class,'indicatorContainer')])[1]").click()
    cy.contains("Add New").click()

    // SELECT PREFIX
    cy.xpath("(//div[contains(@class,'searchable-dropdown__value-container')])[6]").click()
    cy.contains('Dr.').click()

    const uniqueCustomerName = `CUSTOMER-${Date.now()}`
    cy.xpath("//input[@id='firstName']").clear().type(uniqueCustomerName)

    cy.xpath("//button[@type='submit' and normalize-space()='Save']").click()
    cy.contains('Contact created successfully').should('be.visible')

    // ➕ ADD ITEM
    cy.xpath('(//div[contains(@class,"indicatorContainer")])[3]').click()
    cy.contains('Add New').click()

    const uniqueItemName = `ITEM-${Date.now()}`
    cy.get('#name').type(uniqueItemName)

    cy.xpath('//button[@id="Click_generate_item_SKU"]').click()
    cy.xpath('//input[@id="purchaseUnitPrice"]').type('100')
    cy.xpath('//input[@id="salesUnitPrice"]').type('500')

    cy.xpath("(//button[normalize-space()='Save'])[1]").click()

    // MARK AS SENT
    cy.xpath("//button[normalize-space()='Options']").click()
    cy.contains('Mark as Sent').click()

    // RECEIVE PAYMENT
    cy.contains('Receive Payment').click()
    cy.xpath('//input[@id="amount"]').type('500')
    cy.xpath("//button[@type='submit' and normalize-space()='Save']").click()

    // ADD CREDIT NOTE
    cy.contains('Credit Notes').click()
    cy.xpath("//button[contains(@class,'layout-box--button')]").click()
    cy.xpath("//span[normalize-space()='Add Credit Note']").should('be.visible')

    cy.xpath("//button[@type='submit' and normalize-space()='Save']").click()

    // ACTIONS → EDIT
    cy.xpath("//div[@class='CaretDownButton' and normalize-space()='Actions']").click()
    cy.contains('Edit').click()
    cy.xpath("//button[@type='submit' and normalize-space()='Save']").click()
  })

  // ===============================
  // TEST CASE 2
  // ===============================
  it('IMS Login & Dashboard Verification', () => {
    cy.contains('Dashboard').should('be.visible')
  })

})
