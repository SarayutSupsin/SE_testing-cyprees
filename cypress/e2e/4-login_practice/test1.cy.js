const testDataLogin = require("../../fixtures/login1.json")

describe('practicetestautomation', () =>{
    beforeEach(() =>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it ('TC01', () => {
        cy.login1(testDataLogin.username.positive, testDataLogin.password.positive)
        cy.location().should((location) =>{
            expect(location.pathname).to.eq('/logged-in-successfully/')
            expect(location.protocol).to.eq('https:')
        })
    })

})