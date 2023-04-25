import { selectors } from '../../support/selectors';

class CalendarPage {
  openShift = () => {
    cy.get(selectors.shiftCell).click(); // Clicking on a shift cell element
  };

  startWorkingTime = () => {
    cy.get(selectors.startWorkingTimeBtn).click(); // Clicking on a start working time button element
  };

  clickAllClearBtn = () => {
    cy.get(selectors.allClear).click(); // Clicking on an all clear button element
    cy.get(selectors.stopWorkingTimeBtn).should('be.visible'); // Checking if a stop working time button is visible
  };

  stopWorkingTime = () => {
    cy.get(selectors.stopWorkingTimeBtn).click(); // Clicking on a stop working time button element
    cy.get(selectors.stopTimeTrackingBtn).click(); // Clicking on a stop time tracking button element in a confirmation popup
    cy.get(selectors.startWorkingTimeBtn).should('be.visible'); // Checking if a start working time button is visible
  };

  validateTimerStarted = () => {
    cy.get(selectors.backToCalandarPageBtn).click(); // Clicking on a back to calendar page button element
    cy.get(selectors.timer).should('be.visible'); // Checking if a timer element is visible
  };

  validateTimerStopped = () => {
    cy.get(selectors.backToCalandarPageBtn).click(); // Clicking on a back to calendar page button element
    cy.get(selectors.timer).should('not.exist'); // Checking if a timer element does not exist
  };
}

export default CalendarPage;