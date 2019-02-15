const config = require('./config')
const store = require('./store.js')

const createExpense = (data) =>
  $.ajax({
    url: config.apiUrl + '/expenses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

const indexExpense = () =>
  $.ajax({
    url: config.apiUrl + '/expenses',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

const showExpense = () =>
  $.ajax({
    url: config.apiUrl + '/expenses/' + $('#show-id').val(),
    method: 'GET',
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

const deleteExpense = () =>
  $.ajax({
    url: config.apiUrl + '/expenses/' + $('#delete-id').val(),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })

module.exports = {
  createExpense,
  indexExpense,
  showExpense,
  updateExpense,
  deleteExpense
}
