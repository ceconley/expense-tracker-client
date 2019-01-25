const store = require('../store.js')

$('#change-password-modal').hide()
$('#sign-out').hide()
$('#show-expense').hide()
$('#index-expense').hide()
$('#create-expense').hide()
$('#destroy-expense').hide()
$('#update-expense').hide()

const resetAuthForms = () => {
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
  $('#change-password')[0].reset()
}

const signUpSuccess = () => {
  $('.authMessage').html('Signed Up Successfully')
  resetAuthForms()
}

const signUpFailure = function () {
  $('.authMessage').html('Signed Up Failed')
  resetAuthForms()
}

const signInSuccess = function (data) {
  store.user = data.user
  resetAuthForms()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password-modal').show()
  $('#sign-out').show()
  $('#show-expense').show()
  $('#index-expense').show()
  $('#create-expense').show()
  $('#destroy-expense').show()
  $('#update-expense').show()
}

const signInFailure = function () {
  $('.authMessage').html('Signed In Failed')
  resetAuthForms()
}

const changePasswordSuccess = function () {
  $('.authMessage').html('Password changed successfully')
  resetAuthForms()
}

const changePasswordFailure = function () {
  $('.authMessage').html('Error on password change')
  resetAuthForms()
}

const signOutSuccess = function () {
  store.user = null
  resetAuthForms()
  $('#results').html('')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#show-expense').hide()
  $('#index-expense').hide()
  $('#create-expense').hide()
  $('#destroy-expense').hide()
  $('#update-expense').hide()
}

const signOutFailure = function () {
  resetAuthForms()
  $('.authMessage').html('Signed Out Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
