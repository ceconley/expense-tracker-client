const showAllExpenses = require('./templates/index-expenses.handlebars')
const showOneExpense = require('./templates/show-expense.handlebars')
const showForDelete = require('./templates/show-for-delete.handlebars')
const api = require('./api')

$('#change-password-modal').hide()

const resetForms = () => {
  $('#show-expense')[0].reset()
  $('#index-expense')[0].reset()
  $('#create-expense')[0].reset()
  $('#delete-id').val('')
  $('#update-expense')[0].reset()
  $('#results').text('')
}

const onShowSuccess = (response) => {
  resetForms()
  const showExpenseHtml = showOneExpense({ expense: response })
  $('#results').empty()
  $('#results').append(showExpenseHtml)
}

const onShowFailure = () => {
  resetForms()
  $('#results').text('Show Expense Failed')
}

const showForDeleteExpenseSuccess = (response) => {
  console.log(response)
  const showExpenseHtml = showForDelete({ expense: response.expense })
  $('#delete-expense-modal').empty()
  $('#delete-expense-modal').append(showExpenseHtml)
}

const showForDeleteExpenseFailure = () => {
  resetForms()
  $('#results').text('Show Expense Failed')
}

const onIndexSuccess = (response) => {
  resetForms()
  console.log(response.expenses)
  const amountArr = []
  response.expenses.forEach(function (exp) {
    const amounts = exp.amount
    amountArr.push(amounts)
  })
  const amountArrSum = (acc, curr) => acc + curr
  const amountSum = amountArr.reduce(amountArrSum).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const showExpensesHtml = showAllExpenses({ expenses: response.expenses })
  $('#results').empty()
  $('#results').append(showExpensesHtml)
  $('#amount-sum').empty()
  $('#amount-sum').append(`$${amountSum}`)
}

const onIndexFailure = () => {
  resetForms()
  $('#results').text('Show All Expenses Failed')
}

const onDeleteSuccess = () => {
  resetForms()
  api.indexExpense()
    .then(onIndexSuccess)
    .catch(onIndexFailure)
}

const onDeleteFailure = () => {
  resetForms()
  $('#results').text('Delete Expense Failed')
}

const onUpdateSuccess = () => {
  resetForms()
  api.indexExpense()
    .then(onIndexSuccess)
    .catch(onIndexFailure)
}

const onUpdateFailure = () => {
  resetForms()
  $('#results').text('Update Expense Failed')
}

const onCreateSuccess = (data) => {
  resetForms()
  api.indexExpense()
    .then(onIndexSuccess)
    .catch(onIndexFailure)
}

const onCreateFailure = () => {
  $('#results').text('Create Expense Failed')
  resetForms()
}

module.exports = {
  onShowSuccess,
  onShowFailure,
  showForDeleteExpenseSuccess,
  showForDeleteExpenseFailure,
  onIndexSuccess,
  onIndexFailure,
  onDeleteSuccess,
  onDeleteFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onCreateSuccess,
  onCreateFailure
}
