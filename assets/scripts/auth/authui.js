const store = require('../store.js')

$('#change-password').hide()
$('#sign-out').hide()

const signUpSuccess = function () {
  $('#authMessage').html('Signed Up Successfully')
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
}

const signUpFailure = function () {
  $('#authMessage').html('Signed Up Failed')
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  $('#authMessage').html('Signed In Successfully')
  $('#sign-in')[0].reset()
  $('#sign-up')[0].reset()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
}

const signInFailure = function () {
  $('#authMessage').html('Signed In Failed')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function () {
  $('#authMessage').html('Password changed successfully')
  $('#change-password')[0].reset()
}

const changePasswordFailure = function () {
  $('#authMessage').html('Error on password change')
  $('#change-password')[0].reset()
}

const signOutSuccess = function () {
  $('#authMessage').html('Signed Out Successfully')
  store.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
}

const signOutFailure = function () {
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
