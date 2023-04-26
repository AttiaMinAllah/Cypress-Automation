import { selectors } from "../common/selectors";

class LoginPage {
  visit = () => {
    cy.visit('/');
  };

  login = (username, password) => {
    cy.get(selectors.login.username).type(username);
    cy.get(selectors.login.password).type(password);
    cy.get(selectors.login.anmeldenBtn).contains('Anmelden').click();
  };
}

export default new LoginPage();
