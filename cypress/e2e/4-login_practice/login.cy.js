describe('practicetestautomation', () =>{
    beforeEach(() =>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it('TC01-Positive LogIn test', () =>{
        //test case 1
        // cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[name="username"]').type('student')
        cy.get('[name="password"]').type('Password123')
        cy.get('#submit').click()

        cy.url().should('eq', 'https://practicetestautomation.com/logged-in-successfully/')
        cy.contains('Congratulations' || 'successfully' || 'logged in').should('be.visible')

        cy.get('.wp-block-button__link').should('be.visible')

    })

    it ('TC02-Negative username test', () =>{
        //test case 2
        // cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[name="username"]').type('incorrectUser')
        cy.get('[name="password"]').type('Password123')
        cy.get('#submit').click()
        cy.get('#error').should('be.visible')
        cy.get('#error').should('contain', 'Your username is invalid!')
    })

    it ('TC03-Negative password test', () =>{
        //test case 3
        // cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[name="username"]').type('student')
        cy.get('[name="password"]').type('incorrectPassword')
        cy.get('#submit').click()
        cy.get('#error').should('be.visible')
        cy.get('#error').should('contain', 'Your password is invalid!')
    })



})