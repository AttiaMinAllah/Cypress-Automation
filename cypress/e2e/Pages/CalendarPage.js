import { selectors } from '../common/selectors';

class CalendarPage {
  openShift = () => {
    cy.get(selectors.shiftCell).click(); 
  };

  startWorkingTime = () => {
    cy.get(selectors.startWorkingTimeBtn).click(); 
  };

  clickAllClearBtn = () => {
    cy.get(selectors.allClear).click();
    cy.get(selectors.stopWorkingTimeBtn).should('be.visible'); 
  };

  stopWorkingTime = () => {
    cy.get(selectors.stopWorkingTimeBtn).click(); 
    cy.get(selectors.stopTimeTrackingBtn).click(); 
    cy.get(selectors.startWorkingTimeBtn).should('be.visible'); 
  };

  validateTimerStarted = () => {
    cy.get(selectors.backToCalandarPageBtn).click(); 
    cy.get(selectors.timer).should('be.visible'); 
  };

  validateTimerStopped = () => {
    cy.get(selectors.backToCalandarPageBtn).click(); // Clicking on a back to calendar page button element
    cy.get(selectors.timer).should('not.exist'); // Checking if a timer element does not exist
  };
}

export default CalendarPage;