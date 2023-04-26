import LoginPage from '../Pages/LoginPage.js';
import CalendarPage from '../pages/CalendarPage';

describe('Calendar Page', () => {
  const calendarPage = new CalendarPage();

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
    cy.title().should('include', 'CleverPortal');
  });

  it('Verify that user is able to start the working time', () => {
    calendarPage.openShift();
    calendarPage.startWorkingTime();
    calendarPage.clickAllClearBtn();
    calendarPage.validateTimerStarted();
  });

  it('Verify that the user is able to stop the working time', () => {
    calendarPage.openShift();
    calendarPage.stopWorkingTime();
    calendarPage.validateTimerStopped();
  });
});

