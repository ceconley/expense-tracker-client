'use strict'

const authEvents = require('./auth/authevents')
const events = require('./events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#show-expense').on('submit', events.onShowExpense)
  $('#index-expense').on('submit', events.onIndexExpense)
  $('#destroy-expense').on('submit', events.onDestroyExpense)
  $('#update-expense').on('submit', events.onUpdateExpense)
  $('#create-expense').on('submit', events.onCreateExpense)
})
