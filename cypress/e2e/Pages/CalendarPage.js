class CalendarPage {
  
      openShift() {
        cy.get('.iAJOnT').click()
      }
    
      startWorkingTime() {
        cy.get('[data-test="ShiftScreen.TimeRecording.TrackTimeButton"]').click()

      }
      ClickAllClear(){
        cy.get('[data-test="ShiftScreen.ReportDamageDialog.OkButton"]').click()
      }
      stopWorkingTime() {
        cy.get('[data-test="ShiftScreen.TimeRecording.TrackTimeButton"]').click() 
        // click on Stop time tracking confirmation popup
        cy.get('[data-test="ShiftScreen.StopWorkingTimeDialog.ConfirmButton"]').click()
        cy.get('[data-test="ShiftScreen.TimeRecording.TrackTimeButton"]').should('be.visible')
      }
    
      validateTimer() {
        cy.get('[data-test="ShiftScreen.TimeRecording.ElapsedTimeText"] > .sc-dkzDqf')      }
    
      validateTimerStopped() {
        cy.get('.Timer-paused')
      }
    }
    
    export default CalendarPage
    