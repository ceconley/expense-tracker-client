const showAllExpenses = require('./../../index-expenses.handlebars')
const showOneExpense = require('./../../show-expense.handlebars')

$('#change-password-modal').hide()

const resetForms = () => {
  $('#show-expense')[0].reset()
  $('#index-expense')[0].reset()
  $('#create-expense')[0].reset()
  $('#destroy-expense')[0].reset()
  $('#update-expense')[0].reset()
  $('#results').html('')
}

const onShowSuccess = (response) => {
  resetForms()
  console.log(response)
  const showExpenseHtml = showOneExpense({ expense: response })
  $('#results').empty()
  $('#results').html(showExpenseHtml)
}

const onShowFailure = () => {
  resetForms()
  $('#results').html('Show Expense Failed')
}

const onIndexSuccess = (response) => {
  resetForms()
  // const expenseDate = Date.parse(response.expenses.created_at)
  console.log(response.expenses)
  // const expenseDates = response.expenses.map(exp => Date.parse(exp.created_at))
  $.each(response.expenses, function () {
    this.created_at = this.created_at.setDate()
  })
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
  $('#results').html('Show All Expenses Failed')
}

const onDestroySuccess = () => {
  resetForms()
  $('#results').html('Expense Deleted')
}

const onDestroyFailure = () => {
  resetForms()
  $('#results').html('Delete Expense Failed')
}

const onUpdateSuccess = () => {
  resetForms()
  $('#results').html('Expense Updated')
}

const onUpdateFailure = () => {
  resetForms()
  $('#results').html('Update Expense Failed')
}

const onCreateSuccess = (data) => {
  $('#results').html('Expense Created')
  resetForms()
}

const onCreateFailure = () => {
  $('#results').html('Create Expense Failed')
  resetForms()
}

module.exports = {
  onShowSuccess,
  onShowFailure,
  onIndexSuccess,
  onIndexFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onCreateSuccess,
  onCreateFailure
}
