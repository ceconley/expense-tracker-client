const config = require('./config')
const store = require('./store.js')

const showExpense = () =>
  $.ajax({
    url: config.apiUrl + '/expenses/' + store.expenseId,
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

const destroyExpense = (data) =>
  $.ajax({
    url: config.apiUrl + '/expenses/' + store.expenseId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })

const updateExpense = (data) =>
  $.ajax({
    url: config.apiUrl + '/expenses/' + store.expenseId,
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
    data
  })

module.exports = {
  showExpense,
  indexExpense,
  destroyExpense,
  updateExpense,
  createExpense
}
