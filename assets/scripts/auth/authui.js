const store = require('../store.js')

$('#change-password').hide()
$('#sign-out').hide()

const signUpSuccess = function () {
  $('#sign-in-success').html('Signed Up Successfully')
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
}

const signUpFailure = function () {
  $('#sign-in-success').html('Signed Up Failed')
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in-success').html('Signed In Successfully')
  $('#sign-in')[0].reset()
  $('#sign-up')[0].reset()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
}

const signInFailure = function () {
  $('#sign-in-success').html('Signed In Failed')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function () {
  $('#change-password-success').html('Password changed successfully')
  $('#change-password')[0].reset()
}

const changePasswordFailure = function () {
  $('#change-password-success').html('Error on password change')
  $('#change-password')[0].reset()
}

const signOutSuccess = function () {
  $('#sign-out-success').html('Signed Out Successfully')
  store.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
}

const signOutFailure = function () {
  $('#sign-out-success').html('Signed Out Failed')
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
