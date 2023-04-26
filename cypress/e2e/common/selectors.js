export const selectors = {
    login: {
      username: '#username',
      password: '#password',
      anmeldenBtn: '#kc-login',
    },
    shiftCell: '.UpcomingShiftStyles-shiftList > :nth-child(3)',
    startWorkingTimeBtn: "button:contains('Record working time')",
    stopWorkingTimeBtn: "button:contains('End working time')",
    stopTimeTrackingBtn:'[data-test="ShiftScreen.StopWorkingTimeDialog.ConfirmButton"]',
    timer: ".hldUor",
    backToCalandarPageBtn: '[data-test="ShiftScreen.ShiftDetails.BackButton"] > .sc-dkzDqf',
    allClear: '[data-test="ShiftScreen.ReportDamageDialog.OkButton"]'
  };

  