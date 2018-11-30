const store = require('../store.js')

$('#change-password').hide()
$('#sign-out').hide()

const resetAuthForms = () => {
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
  $('#change-password')[0].reset()
}

const signUpSuccess = () => {
  $('#authMessage').html('Signed Up Successfully')
  resetAuthForms()
}

const signUpFailure = function () {
  $('#authMessage').html('Signed Up Failed')
  resetAuthForms()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#authMessage').html('Signed In Successfully')
  resetAuthForms()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
}

const signInFailure = function () {
  $('#authMessage').html('Signed In Failed')
  resetAuthForms()
}

const changePasswordSuccess = function () {
  $('#authMessage').html('Password changed successfully')
  resetAuthForms()
}

const changePasswordFailure = function () {
  $('#authMessage').html('Error on password change')
  resetAuthForms()
}

const signOutSuccess = function () {
  $('#authMessage').html('Signed Out Successfully')
  store.user = null
  resetAuthForms()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
}

const signOutFailure = function () {
  resetAuthForms()
  $('#authMessage').html('Signed Out Failed')
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
