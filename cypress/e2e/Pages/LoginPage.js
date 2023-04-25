class LoginPage {
  visit() {
    cy.visit('/')
  }
  // Find login page elements and submit the login form.
  login(username, password) {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#kc-login').contains('Anmelden').click()
  }
  
}

export default new LoginPage()



  