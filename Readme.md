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

# Cypress Command Guide

## 1. Cypress คืออะไร

Cypress เป็นเครื่องมือสำหรับทดสอบเว็บไซต์อัตโนมัติ (End-to-End Testing) โดยใช้ JavaScript ในการจำลองการใช้งานเว็บไซต์และตรวจสอบผลลัพธ์ เช่น การเข้าสู่ระบบ การกรอกแบบฟอร์ม การเพิ่มสินค้า และการคำนวณราคา

## 2. คำสั่งพื้นฐาน

| คำสั่ง | คำอธิบาย | ตัวอย่าง |
|---|---|---|
| `cy.visit()` | เปิดเว็บไซต์ | `cy.visit('/login')` |
| `cy.get()` | ค้นหา Element ด้วย CSS Selector | `cy.get('#username')` |
| `cy.contains()` | ค้นหา Element จากข้อความ | `cy.contains('Login')` |
| `.click()` | คลิก Element | `cy.get('button').click()` |
| `.type()` | พิมพ์ข้อความ | `cy.get('#username').type('test')` |
| `.clear()` | ล้างข้อความในช่องกรอก | `cy.get('#username').clear()` |
| `.check()` | เลือก Checkbox | `cy.get('#accept').check()` |
| `.uncheck()` | ยกเลิก Checkbox | `cy.get('#accept').uncheck()` |
| `.select()` | เลือกตัวเลือกใน Dropdown | `cy.get('select').select('Thailand')` |
| `.submit()` | ส่งฟอร์ม | `cy.get('form').submit()` |
| `cy.reload()` | โหลดหน้าเว็บใหม่ | `cy.reload()` |
| `cy.go()` | ย้อนกลับหรือไปหน้าถัดไป | `cy.go('back')` |

## 3. คำสั่งตรวจสอบผลลัพธ์ (Assertions)

ใช้ตรวจสอบว่าผลลัพธ์ที่ได้ตรงกับสิ่งที่คาดหวังหรือไม่

| คำสั่ง | คำอธิบาย |
|---|---|
| `.should('be.visible')` | Element แสดงอยู่ |
| `.should('not.exist')` | Element ไม่มีอยู่ใน DOM |
| `.should('be.disabled')` | Element ถูกปิดใช้งาน |
| `.should('be.enabled')` | Element พร้อมใช้งาน |
| `.should('have.text', 'Success')` | ข้อความตรงตามที่กำหนด |
| `.should('contain.text', 'Success')` | มีข้อความที่กำหนดอยู่ภายใน |
| `.should('have.value', 'test')` | ค่าในช่องกรอกตรงตามที่กำหนด |
| `.should('have.length', 3)` | จำนวน Element เท่ากับ 3 |
| `.should('have.class', 'active')` | Element มี CSS Class ที่กำหนด |
| `.should('be.checked')` | Checkbox ถูกเลือกแล้ว |

### ตัวอย่าง

```javascript
cy.get('#username').type('testuser')
cy.get('#password').type('password123')
cy.get('button[type="submit"]').click()

cy.contains('Welcome').should('be.visible')
cy.url().should('include', '/dashboard')
```

### การใช้ expect()

เหมาะกับการตรวจสอบค่าที่ต้องการ เช่น ราคาสินค้าหรือผลลัพธ์จากการคำนวณ

```javascript
expect(100 + 7).to.equal(107)
```

## 4. การค้นหา Element (Selectors)

| ประเภท | ตัวอย่าง | คำอธิบาย |
|---|---|---|
| ID | `cy.get('#username')` | ค้นหาจาก ID |
| Class | `cy.get('.login-btn')` | ค้นหาจาก Class |
| Tag | `cy.get('button')` | ค้นหาจากชื่อ Tag |
| Attribute | `cy.get('[name="password"]')` | ค้นหาจาก Attribute |
| ข้อความ | `cy.contains('Login')` | ค้นหาจากข้อความ |
| ลำดับ | `cy.get('button').eq(0)` | เลือก Element ลำดับแรก |
| Element แรก | `cy.get('button').first()` | เลือก Element แรก |
| Element สุดท้าย | `cy.get('button').last()` | เลือก Element สุดท้าย |

แนะนำให้ใช้ `data-testid` หรือ Attribute สำหรับการทดสอบโดยเฉพาะ หากสามารถแก้ไข HTML ของเว็บไซต์ได้

```javascript
cy.get('[data-testid="login-button"]').click()
```

## 5. การจัดกลุ่ม Test Case

| คำสั่ง | คำอธิบาย |
|---|---|
| `describe()` | จัดกลุ่ม Test Case |
| `it()` | กำหนด Test Case แต่ละกรณี |
| `before()` | ทำงานก่อนเริ่ม Test Case แรกในกลุ่ม |
| `beforeEach()` | ทำงานก่อน Test Case แต่ละกรณี |
| `afterEach()` | ทำงานหลัง Test Case แต่ละกรณี |
| `after()` | ทำงานหลังจบ Test Case ทั้งกลุ่ม |

### ตัวอย่าง

```javascript
describe('Login Tests', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

  it('TC01 - ตรวจสอบหน้า Login', () => {
    cy.contains('Login').should('be.visible')
  })

  it('TC02 - ตรวจสอบช่อง Username', () => {
    cy.get('#username').should('be.visible')
  })

})
```

## 6. การรอ (Waiting)

| คำสั่ง | คำอธิบาย |
|---|---|
| `cy.wait(2000)` | รอ 2 วินาที |
| `cy.get('#result')` | รอจนพบ Element ตาม Timeout |
| `.should('be.visible')` | รอจน Element แสดงตามเงื่อนไข |
| `cy.wait('@getUsers')` | รอ Request ที่กำหนด Alias ไว้ |

### ตัวอย่าง

```javascript
cy.get('#result', { timeout: 10000 })
  .should('be.visible')
```

แนะนำให้รอตาม Element หรือเงื่อนไขที่ต้องการ แทนการกำหนดเวลารอตายตัวเมื่อสามารถทำได้

## 7. การทดสอบ API ด้วย cy.intercept()

ใช้ดักจับ Request ตรวจสอบ Response หรือจำลองข้อมูลจาก API

```javascript
cy.intercept('GET', '/api/users').as('getUsers')

cy.visit('/users')

cy.wait('@getUsers').then((interception) => {
  expect(interception.response.statusCode).to.equal(200)
})
```

### การจำลอง Response

```javascript
cy.intercept('GET', '/api/users', {
  statusCode: 200,
  body: [
    { id: 1, name: 'Test User' }
  ]
})
```

## 8. การใช้ Fixtures และ Aliases

### Fixtures

ใช้เก็บข้อมูลทดสอบไว้ในไฟล์ JSON เช่น `cypress/fixtures/user.json`

```json
{
  "username": "testuser",
  "password": "password123"
}
```

เรียกใช้งานด้วย

```javascript
cy.fixture('user.json').then((user) => {
  cy.get('#username').type(user.username)
  cy.get('#password').type(user.password)
})
```

### Aliases

ใช้ตั้งชื่อให้ Element หรือข้อมูลเพื่อเรียกใช้งานซ้ำ

```javascript
cy.get('#username').as('usernameInput')

cy.get('@usernameInput').type('testuser')
cy.get('@usernameInput').should('have.value', 'testuser')
```

## 9. คำสั่งจัดการ Cookie และหน้าจอ

| คำสั่ง | คำอธิบาย |
|---|---|
| `cy.getCookies()` | อ่าน Cookies |
| `cy.clearCookies()` | ล้าง Cookies |
| `cy.getCookie('token')` | อ่าน Cookie ตามชื่อ |
| `cy.clearLocalStorage()` | ล้าง Local Storage |
| `cy.screenshot()` | บันทึกภาพหน้าจอ |
| `cy.url()` | อ่าน URL ปัจจุบัน |
| `cy.title()` | อ่านชื่อหน้าเว็บ |
| `cy.viewport(1280, 720)` | กำหนดขนาด Viewport |

### ตัวอย่าง

```javascript
cy.visit('/login')

cy.title().should('include', 'Login')
cy.url().should('include', '/login')
cy.screenshot('login-page')
```

## 10. คำสั่งรันทดสอบ

| คำสั่ง | คำอธิบาย |
|---|---|
| `npx cypress open` | เปิด Cypress Test Runner |
| `npx cypress run` | รันทดสอบแบบ Headless |
| `npx cypress run --browser chrome` | รันทดสอบด้วย Chrome |
| `npx cypress run --spec "cypress/e2e/login.cy.js"` | รันเฉพาะไฟล์ที่กำหนด |
| `npx cypress run --headed` | รันโดยเปิดหน้าต่างเบราว์เซอร์ |
| `npx cypress verify` | ตรวจสอบการติดตั้ง Cypress |

## 11. ตัวอย่างประยุกต์: ทดสอบการเพิ่มสินค้าในตะกร้า

ตัวอย่างนี้ใช้เว็บไซต์ SauceDemo เพื่อทดสอบการเข้าสู่ระบบและเพิ่มสินค้าลงตะกร้า

```javascript
describe('Shopping Cart Tests', () => {

  it('TC01 - ตรวจสอบการเพิ่มสินค้าลงตะกร้า', () => {

    // เปิดเว็บไซต์
    cy.visit('https://www.saucedemo.com')

    // เข้าสู่ระบบ
    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    // เพิ่มสินค้าลงตะกร้า
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click()

    // ตรวจสอบจำนวนสินค้า
    cy.get('.shopping_cart_badge')
      .should('have.text', '1')

    // เปิดตะกร้า
    cy.get('.shopping_cart_link').click()

    // ตรวจสอบชื่อสินค้า
    cy.contains('Sauce Labs Backpack')
      .should('be.visible')

  })

})
```

## 12. แนวทางเลือกใช้คำสั่ง

| สิ่งที่ต้องการทดสอบ | คำสั่งที่เหมาะสม |
|---|---|
| Login | `cy.visit()`, `cy.get()`, `.type()`, `.click()` |
| ตรวจสอบข้อความ | `cy.contains()`, `.should()` |
| ตรวจสอบฟอร์ม | `.type()`, `.clear()`, `.select()`, `.check()` |
| ตรวจสอบค่าคำนวณ | `.invoke()`, `.then()`, `expect()` |
| ตรวจสอบ API | `cy.intercept()`, `cy.wait()` |
| เตรียมข้อมูลทดสอบ | `cy.fixture()`, `beforeEach()` |
| ตรวจสอบ Responsive | `cy.viewport()` |
| บันทึกภาพหน้าจอ | `cy.screenshot()` |

## เอกสารอ้างอิง

- [Cypress Official Documentation](https://docs.cypress.io/)
- [Cypress Commands](https://docs.cypress.io/api/table-of-contents)
- [Cypress Assertions](https://docs.cypress.io/app/references/assertions)



