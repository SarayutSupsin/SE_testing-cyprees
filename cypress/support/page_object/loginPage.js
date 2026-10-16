class loginPage{
    get loginSuccessText(){
        return cy.get('.post-title')
    }
    get invalidTextLogin(){
        return cy.get('#error')
    }

    verifyLoginSuccessText(){
        this.loginSuccessText.should('have.text', 'Logged In Successfully')
    }

    invalidUsernameLogin(){
        this.invalidTextLogin.should('have.text', 'Your username is invalid!')
    }

    invalidPasswordLogin(){
        this.invalidTextLogin.should('have.text', 'Your password is invalid!')
    }
}

export default new loginPage();