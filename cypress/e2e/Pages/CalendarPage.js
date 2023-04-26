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
    cy.get(selectors.backToCalandarPageBtn).click(); 
    cy.get(selectors.timer).should('not.exist'); 
  };

  getShift = () => {
    /* Currently due to time constraint I am just taking one shift and performing the tests on the shift.
      But ideally I must have interated through all the shifts and chosen the one which matches my current time.
      Using a loop and time comparison.
    */
  }
}

export default CalendarPage;