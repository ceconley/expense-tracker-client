const config = require('./config')
const store = require('./store.js')

const showExpense = (data) =>
  $.ajax({
    url: config.apiUrl + '/expenses/' + $('#show-id').val(),
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

const indexExpense = () =>
  $.ajax({
    url: config.apiUrl + '/expenses',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

const deleteExpense = () =>
  $.ajax({
    url: config.apiUrl + '/expenses/' + $('#delete-id').val(),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

const updateExpense = (data) =>
  $.ajax({
    url: config.apiUrl + '/expenses/' + $('#update-id').val(),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

const createExpense = (data) =>
  $.ajax({
    url: config.apiUrl + '/expenses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

module.exports = {
  showExpense,
  indexExpense,
  deleteExpense,
  updateExpense,
  createExpense
}
