const store = require('../store.js')

$('#change-password-modal').hide()
$('#sign-out').hide()
$('#show-expense').hide()
$('#index-expense').hide()
$('#create-expense').hide()
$('#delete-expense').hide()
$('#update-expense').hide()

const resetAuthForms = () => {
  $('#sign-up')[0].reset()
  $('#sign-in')[0].reset()
  $('#change-password')[0].reset()
}

const signUpSuccess = () => {
  $('.authMessage').text('Signed Up Successfully')
  resetAuthForms()
}

const signUpFailure = function () {
  $('.authMessage').text('Signed Up Failed')
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
  $('#delete-expense').show()
  $('#update-expense').show()
  $('.authMessage').text('')
}

const signInFailure = function () {
  $('.authMessage').text('Signed In Failed')
  resetAuthForms()
}

const changePasswordSuccess = function () {
  $('.authMessage').text('Password changed successfully')
  $('#changePasswordModal').modal('hide')
  resetAuthForms()
}

const changePasswordFailure = function () {
  $('.authMessage').text('Error on password change')
  resetAuthForms()
}

const signOutSuccess = function () {
  store.user = null
  resetAuthForms()
  $('.authMessage').text('')
  $('#results').text('')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password-modal').hide()
  $('#sign-out').hide()
  $('#show-expense').hide()
  $('#index-expense').hide()
  $('#create-expense').hide()
  $('#delete-expense').hide()
  $('#update-expense').hide()
  $('#change-password-modal').hide()
}

const signOutFailure = function () {
  resetAuthForms()
  $('.authMessage').text('Signed Out Failed')
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
