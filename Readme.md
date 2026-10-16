# Cypress Installation and Usage

## 1. Overview
Cypress is a testing framework used to automate web application testing, such as login, form validation, button interactions, and checking calculation results.

## 2. Prerequisites
- Node.js (LTS)
- npm
- Visual Studio Code (VS Code)

Check the installed versions:

```bash
node -v
npm -v
```

## 3. Installation

Install Cypress in the project directory:

```bash
npm install cypress --save-dev
```

## 4. Open Cypress

Launch the Cypress Test Runner:

```bash
npx cypress open
```

Then:
1. Select **E2E Testing**.
2. Configure Cypress.
3. Select a browser.
4. Create a new spec file, such as `login.cy.js`.

## 5. Example Test Case

Create a file at `cypress/e2e/login.cy.js`.

```javascript
describe('My First Test', () => {
  it('should open the website successfully', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('h1', 'Kitchen Sink')
      .should('be.visible')
  })
})
```

### Explanation
- `describe()` — Groups related test cases.
- `it()` — Defines an individual test case.
- `cy.visit()` — Opens a website.
- `cy.contains()` — Finds an element containing specific text.
- `.should('be.visible')` — Verifies that the element is visible.

## 6. Run Tests

**Interactive mode:**

```bash
npx cypress open
```

Select the spec file to run the test in the browser.

**Headless mode:**

```bash
npx cypress run
```

Runs the tests from the terminal without opening the interactive Test Runner.

## 7. Project Structure

```text
project/
├── cypress/
│   └── e2e/
│       └── login.cy.js
├── cypress.config.js
├── package.json
└── package-lock.json
```

## References
- [Cypress Official Documentation](https://docs.cypress.io/)
- [Node.js Official Website](https://nodejs.org/)

### GitHub Copilot
### Cypress Helper
