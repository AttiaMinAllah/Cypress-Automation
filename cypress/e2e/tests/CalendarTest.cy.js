// import LoginPage from '../Pages/LoginPage'
// import CalendarPage from '../pages/CalendarPage'

// describe('Calendar Page', () => {
//   const calendarPage = new CalendarPage()
//   beforeEach(() => {
//     // Open the page
//     LoginPage.visit()
//     // Log in with provided credentials
//     LoginPage.login('cityshuttleschedule30', 'qwertz123!')
//     cy.title().should('include', 'CleverPortal')

//   })

//   it('Verify that user is able to start the working time', () => {
//     calendarPage.openShift()
//     calendarPage.startWorkingTime()
//     calendarPage.ClickAllClear()
//     calendarPage.validateTimer()
//   })

//   it('Verify that the user is able to stop the working time', () => {
//     calendarPage.openShift()
//     calendarPage.stopWorkingTime()
    
//   })

// })



describe("Clever Shuttle Web App", () => {
  it("Logs in, starts and stops working time", () => {
    // Visit the web app
    cy.visit("https://cleverportal.test.clevershuttle.tech/");

    // Log in with provided credentials
    cy.get("#username").type("cityshuttleschedule30");
    cy.get("#password").type("qwertz123!");
    cy.get("#kc-login").click();

    // Wait for calendar view to load
    cy.get('.iAJOnT').should("be.visible");

    // Open the shift that's running at the given time
    cy.contains(".shift-cell", "SHIFT TIME").click();

    // Press the button to start working time
    cy.contains(".button", "Start Working Time").click();

    // Validate that a timer is shown
    cy.get(".timer", { timeout: 10000 }).should("be.visible");

    // Press the button to stop working time
    cy.contains(".button", "Stop Working Time").click();

    // Validate that the timer stops
    cy.get(".timer").should("not.be.visible");
  });
});
