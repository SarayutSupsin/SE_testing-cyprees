const testDataLogin = require("../../fixtures/login1.json")
import loginPage from "../../support/page_object/loginPage"
describe('practicetestautomation', () =>{
    beforeEach(() =>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it ('TC01', () => {
        cy.login1(testDataLogin.username.positive, testDataLogin.password.positive)
        loginPage.verifyLoginSuccessText()
    })

    it ('TC02', () => {
        cy.login1(testDataLogin.username.negative, testDataLogin.password.positive)
        loginPage.invalidUsernameLogin()
    })

    it ('TC03', () => {
        cy.login1(testDataLogin.username.positive, testDataLogin.password.negative)
        loginPage.invalidPasswordLogin()
    })

    it 

})