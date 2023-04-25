import LoginPage from '../Pages/LoginPage'
import CalendarPage from '../pages/CalendarPage'

describe('Calendar Page', () => {
  const calendarPage = new CalendarPage()
  beforeEach(() => {
    // Open the page
    LoginPage.visit()
    // Log in with provided credentials
    LoginPage.login('cityshuttleschedule30', 'qwertz123!')
    cy.title().should('include', 'CleverPortal')

  })

  it('Verify that user is able to start the working time', () => {
    calendarPage.openShift()
    calendarPage.startWorkingTime()
    calendarPage.ClickAllClear()
    calendarPage.validateTimer()
  })

  it('Verify that the user is able to stop the working time', () => {
    calendarPage.openShift()
    calendarPage.stopWorkingTime()
    
  })

})



