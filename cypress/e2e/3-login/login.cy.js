describe('SauceDemo Testing', () => {

    it('TC01-open-website',() => {
        // test case 1
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')

        cy.get('[data-test="username"]').type('standard_user')
        cy.wait(2000)
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.wait(2000)
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
        // cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it ('TC02-Login with invalid username',() => {
        // test case 2
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('invalid_username')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain', 'do not match')
    })

    it ('TC03-Login with invalid username and invalid password',() => {
        // test case 3
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('invalid_username')
        cy.get('[data-test="password"]').type('invalid_password')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain', 'do not match')
    })

    it ('TC04-Login with No username',() => {
        // test case 4
        cy.visit('https://www.saucedemo.com')
        
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', 'Username is required') 
        
    })

    it ('TC05-Login with No password',() => {
        // test case 5
        cy.visit('https://www.saucedemo.com')
        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', 'Password is required')
      

    })
})