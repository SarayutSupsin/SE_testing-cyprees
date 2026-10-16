describe('SauceDemo Testing', () => {

    it ('TC01-add-item-to-cart',() => {
        // test case 1
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
        // cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.wait(300)
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')    // have.text() คือ ต้องเหมือนกันทุกคำ ความเป๊ะ แต่ 
                                                                                //contain แค่มีคำนั้นอยู่ก็พอ เช็คแค่บางคำ
        cy.wait(300)

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')

        // cy.get('[data-test="shopping-cart-link"]').click()
        // cy.url().should('include', 'cart.html')

    })

    it ('TC02-remove-item-from-cart',() => {
        // test case 1
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
        // cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.wait(300)
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')    // have.text() คือ ต้องเหมือนกันทุกคำ ความเป๊ะ แต่ 
                                                                                //contain แค่มีคำนั้นอยู่ก็พอ เช็คแค่บางคำ
        cy.wait(300)

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('include', 'cart.html')
        cy.contains('Your Cart').should('be.visible')              // cy.contains('Your Cart') - cy.contains มี ... ประกอบอยู่ด้วย คือ Your Cart เป็นข้อความที่อยู่ใน element ไหนก็ได้

        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1') 
        
    })

    it.only ('TC03-checkout',() => {
        // test case 1
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
        // cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.wait(300)
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')    // have.text() คือ ต้องเหมือนกันทุกคำ ความเป๊ะ แต่ 
                                                                                //contain แค่มีคำนั้นอยู่ก็พอ เช็คแค่บางคำ
        cy.wait(300)

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('include', 'cart.html')
        cy.contains('Your Cart').should('be.visible')              // cy.contains('Your Cart') - cy.contains มี ... ประกอบอยู่ด้วย คือ Your Cart เป็นข้อความที่อยู่ใน element ไหนก็ได้

        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')

        cy.get('[data-test="checkout"]').click()
        cy.url().should('include', 'checkout-step-one.html')

        cy.get('[data-test="firstName"]').type('test')
        cy.get('[data-test="lastName"]').type('test')
        cy.get('[data-test="postalCode"]').type('12345')
        cy.get('[data-test="continue"]').click()
        cy.url().should('include', 'checkout-step-two.html')

        cy.get('[data-test="finish"]').click()
        cy.url().should('include', 'checkout-complete.html')
        cy.contains('Thank you for your order!').should('be.visible') 

    })
})