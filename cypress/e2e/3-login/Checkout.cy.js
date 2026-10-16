describe('SauceDemo Testing', () => {

    it ('TC01-Verify-Product-Price-and-Checkout-Total-Calculation',() =>{
        // test case 1
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('$29.99').should('be.visible')
        cy.contains('$49.99').should('be.visible')
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('test')
        cy.get('[data-test="lastName"]').type('12345')
        cy.get('[data-test="postalCode"]').type('10010')
        cy.get('[data-test="continue"]').click()

        cy.contains('$79.98').should('be.visible')

    })

    it ('TC02-Verify-Tax-and-Total-Calculation', () => {
        // test case 2
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('test')
    cy.get('[data-test="lastName"]').type('12345')
    cy.get('[data-test="postalCode"]').type('10010')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="subtotal-label"]').then(($subtotal) => {

        const itemTotal = parseFloat(
            $subtotal.text().replace('Item total: $', '')
        )

        cy.get('[data-test="tax-label"]').then(($tax) => {

            const actualTax = parseFloat(
                $tax.text().replace('Tax: $', '')
            )

            const expectedTax = Number(
                (itemTotal * 0.08).toFixed(2)
            )

            expect(actualTax).to.equal(expectedTax)

            cy.get('[data-test="total-label"]').then(($total) => {

                const actualTotal = parseFloat(
                    $total.text().replace('Total: $', '')
                )

                const expectedTotal = Number(
                    (itemTotal + actualTax).toFixed(2)
                )

                expect(actualTotal).to.equal(expectedTotal)

            })
        })
    })

    });

    it ('TC03-Verify User Can Complete Checkout After Cancellation', () => {
        // test case 3
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('test')
        cy.get('[data-test="lastName"]').type('12345')
        cy.get('[data-test="postalCode"]').type('10010')
        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="cancel"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()

                cy.get('[data-test="firstName"]').type('test')
        cy.get('[data-test="lastName"]').type('12345')
        cy.get('[data-test="postalCode"]').type('10010')
        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="title"]').should('contain', 'Checkout: Overview')
        cy.get('[data-test="finish"]').click()

        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()

        cy.url().should('eq', 'https://www.saucedemo.com/')

    })

})